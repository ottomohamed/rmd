import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground transition-colors duration-300" dir="rtl">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 flex-row-reverse items-center">
            <AlertCircle className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold font-sans">
              404 الصفحة غير موجودة
            </h1>
          </div>

          <p className="mt-4 text-sm font-sans text-muted">
            عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. يرجى العودة من الرابط الصحيح أو العودة إلى الصفحة الرئيسية.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}