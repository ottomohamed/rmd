# سكريبت لإصلاح أخطاء TypeScript في مشروع MAROC24
Write-Host " بدء إصلاح أخطاء TypeScript..." -ForegroundColor Cyan

# 1. إصلاح أي استيرادات غير صحيحة
 = Get-ChildItem -Path ".\src" -Recurse -Include *.ts, *.tsx
 = False

foreach (C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts in ) {
    import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { message } = req.body || {};
    res.status(200).json({ reply: `تم استقبال الرسالة: "${message}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
} = Get-Content C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts.FullName -Raw
    
    # إصلاح استيرادات api-client
    if (import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { message } = req.body || {};
    res.status(200).json({ reply: `تم استقبال الرسالة: "${message}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
} -match '@workspace/api-client-react/src/generated') {
         = import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { message } = req.body || {};
    res.status(200).json({ reply: `تم استقبال الرسالة: "${message}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
} -replace '@workspace/api-client-react/src/generated/api\.schemas', '@workspace/api-client-react'
        Set-Content -Path C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts.FullName -Value  -NoNewline
        Write-Host " تم إصلاح: " -ForegroundColor Green
         = True
    }
}

# 2. البحث عن أي استيرادات لـ @workspace/api-client-react وتحديثها إذا لزم الأمر
Write-Host "
 فحص استيرادات api-client..." -ForegroundColor Cyan
 = Get-ChildItem -Path ".\src\pages" -Recurse -Include *.ts, *.tsx

foreach (C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts in ) {
    import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { message } = req.body || {};
    res.status(200).json({ reply: `تم استقبال الرسالة: "${message}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
} = Get-Content C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts.FullName -Raw
    
    if (import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { message } = req.body || {};
    res.status(200).json({ reply: `تم استقبال الرسالة: "${message}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
} -match 'from "@workspace/api-client-react"') {
        Write-Host " الملف يستخدم api-client: " -ForegroundColor Green
    }
}

# 3. التحقق من وجود مجلد generated
if (Test-Path ".\lib\api-client-react\src\generated") {
    Write-Host "
 مجلد generated موجود" -ForegroundColor Green
} else {
    Write-Host "
 مجلد generated غير موجود. قد تحتاج إلى تشغيل سكريبت التوليد" -ForegroundColor Yellow
}

# 4. عرض الملفات التي قد تحتاج إلى مراجعة
Write-Host "
 قائمة الملفات التي قد تحتاج إلى مراجعة:" -ForegroundColor Cyan
 = @(
    "src\pages\article.tsx",
    "src\pages\author.tsx",
    "src\pages\home.tsx",
    "src\pages\section.tsx",
    "src\pages\submit.tsx"
)

foreach (C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts in ) {
    if (Test-Path C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts) {
        Write-Host "    C:\Users\DEV\DESKTOP\MAROC24\pages\api\MAGHREB24\newsroom\discuss\index.ts" -ForegroundColor Yellow
    }
}

# 5. عرض الإحصائيات
Write-Host "
 إحصائيات المشروع:" -ForegroundColor Cyan
 = (Get-ChildItem -Path ".\src" -Recurse -Include *.ts, *.tsx).Count
Write-Host "   إجمالي ملفات TypeScript: "

if (-not ) {
    Write-Host "
 لم يتم العثور على أخطاء بحاجة للإصلاح التلقائي." -ForegroundColor Green
} else {
    Write-Host "
 تم إصلاح بعض الملفات بنجاح!" -ForegroundColor Green
}

Write-Host "
 انتهى السكريبت." -ForegroundColor Green
