import { ApplyButton } from './ApplyButton';
import { useTranslations } from '../../i18n/utils';

interface WhatWouldYouDoProps {
  lang: 'es' | 'en';
}

export function WhatWouldYouDo({ lang }: WhatWouldYouDoProps) {
  const t = useTranslations(lang);

  return (
    <section
      id="what-would-you-do"
      className="relative z-10 min-h-[831px] flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-[#fffcf5] text-[36px] md:text-[40px] lg:text-[44px] leading-[50px] mb-16">
            {t('whatWouldYouDo.title')}
          </h2>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="relative border border-[#dfff5c] w-full aspect-square overflow-hidden card-hover">
            <div className="absolute inset-0">
              <img
                src="/images/rectangle7.png"
                alt="explode"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="card-overlay absolute inset-0 bg-[rgba(19,35,24,0.81)] transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-sans text-[#dfff5c] text-[26px] leading-[40px]">
                {t('whatWouldYouDo.explode')}
              </p>
            </div>
          </div>
          <div className="relative border border-[#dfff5c] w-full aspect-square overflow-hidden card-hover">
            <div className="absolute inset-0">
              <img
                src="/images/rectangle8.png"
                alt="puter"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="card-overlay absolute inset-0 bg-[rgba(19,35,24,0.8)] transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-sans text-[#dfff5c] text-[26px] leading-[40px]">
                {t('whatWouldYouDo.puter')}
              </p>
            </div>
          </div>
          <div className="relative border border-[#dfff5c] w-full aspect-square overflow-hidden card-hover">
            <div className="absolute inset-0">
              <img
                src="/images/rectangle9.png"
                alt="fish"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="card-overlay absolute inset-0 bg-[rgba(19,35,24,0.8)] transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-sans text-[#dfff5c] text-[26px] leading-[40px]">
                {t('whatWouldYouDo.fish')}
              </p>
            </div>
          </div>
        </div>

        {/* APPLY Button */}
        <div className="flex justify-center items-center">
          <ApplyButton label={t('whatWouldYouDo.apply')} buttonType="apply-bottom" />
        </div>
      </div>
    </section>
  );
}
