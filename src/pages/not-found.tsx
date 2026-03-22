import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 text-right" dir="rtl">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 flex-row-reverse">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold font-sans text-gray-900">404 Ø§Ù„ØµÙØ­Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©</h1>
          </div>

          <p className="mt-4 text-sm font-sans text-gray-600">
            Ø¹Ø°Ø±Ø§Ù‹ØŒ Ù„Ù… Ù†ØªÙ…ÙƒÙ† Ù…Ù† Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø§Ù„ØµÙØ­Ø© Ø§Ù„ØªÙŠ ØªØ¨Ø­Ø« Ø¹Ù†Ù‡Ø§. ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ø±Ø§Ø¨Ø· Ø§Ù„ØµØ­ÙŠØ­.
          </p>
        </CardContent>
      </Card>
    </div>

  );
}

