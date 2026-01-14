import { StatItem } from './StatItem';
import { useTranslations } from '../../i18n/utils';

interface SelectionProps {
  lang: 'es' | 'en';
}

export function Selection({ lang }: SelectionProps) {
  const t = useTranslations(lang);

  return (
    <section id="info" className="relative z-10 min-h-[831px] flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-[#fffcf5] text-[48px] md:text-[58px] lg:text-[68px] leading-[85px] mb-4">
            {t('selection.title')}
          </h2>
          <p className="font-sans text-[#fffcf5] text-[20px] md:text-[24px] lg:text-[26px] leading-[34px]">
            {t('selection.subtitle')}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-2xl mx-auto">
          <StatItem
            label={t('selection.stats.howMany')}
            value={t('selection.stats.howManyValue')}
          />
          <StatItem
            label={t('selection.stats.howLong')}
            value={t('selection.stats.howLongValue')}
          />
          <StatItem label={t('selection.stats.when')} value={t('selection.stats.whenValue')} />
          <StatItem
            label={t('selection.stats.where')}
            value={t('selection.stats.whereValue')}
          />
          <StatItem
            label={t('selection.stats.howMuch')}
            value={t('selection.stats.howMuchValue')}
          />
        </div>
      </div>
    </section>
  );
}
