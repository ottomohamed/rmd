import { createClient } from '@supabase/supabase-js';
import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// إعداد العملاء (يجب ضبط هذه المتغيرات في Vercel)
const supabaseUrl = process.env.SUPABASE_URL || 'https://tohdgmnhmnmgxknsajfz.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || ''; // سيتم استخدامه من البيئة
const anthropicKey = process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);
const anthropic = new Anthropic({ apiKey: anthropicKey });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic, journalist, persona, beat } = req.body;

  try {
    // 1. توليد محتوى المقال باستخدام Anthropic Claude
    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 4000,
      system: `أنت صحفي محترف في "مغرب 24". اسمك ${journalist} وتتخصص في ${beat}. 
      شخصيتك هي: ${persona}. 
      اكتب مقالاً إخبارياً عميقاً وحصرياً باللغة العربية بأسلوب مغربي رصين. 
      يجب أن يكون الرد بتنسيق JSON حصرياً كما يلي:
      {
        "title": "عنوان جذاب",
        "subtitle": "عنوان فرعي يلخص الخبر",
        "body": "محتوى المقال مقسم لعدة فقرات مع استخدام علامات السطر الجديد \\n للفصل بينها"
      }`,
      messages: [
        {
          role: "user",
          content: `اكتب تقريراً عن الموضوع التالي: ${topic}. تذكر، أريد الرد ككائن JSON فقط.`
        }
      ],
    });

    const textContent = response.content[0].type === 'text' ? response.content[0].text : '{}';
    const content = JSON.parse(textContent);
    const slug = `${Date.now()}-${journalist.toLowerCase().replace(/\s+/g, '-')}`;

    // 2. الحصول على معرف الكاتب من Supabase (أو إنشاؤه إذا لم يوجد)
    let { data: author } = await supabase
      .from('authors')
      .select('id')
      .eq('slug', journalist.toLowerCase().replace(/\s+/g, '-'))
      .single();

    if (!author) {
      const { data: newAuthor } = await supabase
        .from('authors')
        .insert({
          name: journalist,
          slug: journalist.toLowerCase().replace(/\s+/g, '-'),
          section: beat
        })
        .select()
        .single();
      author = newAuthor;
    }

    // 3. حفظ المقال في قاعدة البيانات
    const { data: article, error: insertError } = await supabase
      .from('articles')
      .insert({
        title: content.title,
        subtitle: content.subtitle,
        body: content.body,
        slug: slug,
        section: beat,
        author_id: author?.id,
        published_at: new Date().toISOString()
      })
      .select()
      .single();

    if (insertError) throw insertError;

    return res.status(200).json({ 
      success: true, 
      articleUrl: `/article/${slug}`,
      article: article 
    });

  } catch (error: any) {
    console.error('Generation Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
