'use client';

import AppHeader from '@/components/layout/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/language';
import placeholderData from '@/lib/placeholder-images.json';

export default function AboutPage() {
  const { t } = useLanguage();
  const founderImage = placeholderData.images.find(img => img.id === 'founder-about');

  return (
    <div className="bg-background min-h-screen">
      <AppHeader />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-muted/30 p-6 md:p-8 text-center">
              <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-background shadow-md">
                {founderImage && (
                    <AvatarImage src={founderImage.src} alt="Founder" width={founderImage.width} height={founderImage.height} data-ai-hint={founderImage.hint} />
                )}
                <AvatarFallback>FM</AvatarFallback>
              </Avatar>
              <CardTitle className="text-3xl md:text-4xl font-headline tracking-tight">
                {t('founderMessageTitle')}
              </CardTitle>
              <div className="text-muted-foreground mt-2 text-lg">
                {t('founderName')}
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none font-body text-foreground/90 leading-relaxed space-y-4">
                <div>{t('founderMsgP1')}</div>
                <div>{t('founderMsgP2')}</div>
                <div>{t('founderMsgP3')}</div>
                <div>{t('founderMsgP4')}</div>
                <div className="font-semibold text-primary">{t('founderMsgP5')}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
