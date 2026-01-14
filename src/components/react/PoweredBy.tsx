import { useTranslations } from '../../i18n/utils';

interface PoweredByProps {
  lang: 'es' | 'en';
}

export function PoweredBy({ lang }: PoweredByProps) {
  const t = useTranslations(lang);

  return (
    <section id="powered-by" className="relative z-10 min-h-[831px] flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="font-sans text-[#fffcf5] text-[36px] md:text-[40px] lg:text-[44px] leading-[50px]">
            {t('poweredBy.title')}
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center flex flex-col items-center">
            <div className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] lg:w-[230px] lg:h-[230px] mx-auto mb-6 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img
                src="/images/platanus-ventures-new.png"
                alt="platanus ventures"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-sans text-[#e1ff76] text-[22px] leading-[28px]">
              {t('poweredBy.platanusVentures')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
