import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900" dir="rtl">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 flex-row-reverse items-center">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold font-sans text-gray-900 dark:text-gray-100">
              404 الصفحة غير موجودة
            </h1>
          </div>

          <p className="mt-4 text-sm font-sans text-gray-600 dark:text-gray-300">
            عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. يرجى التحقق من الرابط الصحيح أو العودة إلى الصفحة الرئيسية.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}