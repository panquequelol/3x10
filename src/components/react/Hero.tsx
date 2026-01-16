import { ApplyButton } from "./ApplyButton";
import { StatItem } from "./StatItem";
import { useTranslations } from "../../i18n/utils";

interface HeroProps {
  lang: "es" | "en";
}

export function Hero({ lang }: HeroProps) {
  const t = useTranslations(lang);

  return (
    <section
      id="home"
      className="relative min-h-[831px] overflow-hidden z-10 flex items-center justify-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        {/* BATCH-01 OPEN Banner */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center animate-pulse-slow">
            <img
              src="/images/tag-vector-new.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
            />
            <span
              className="relative z-10 font-sans text-[#e1ff76] text-[22px] px-4 py-2"
              dangerouslySetInnerHTML={{ __html: t("hero.batchBanner") }}
            />
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          <h1
            className="font-sans text-[#fffcf5] text-[36px] md:text-[58px] lg:text-[68px] leading-[48px] md:leading-[85px] mb-4 font-medium tracking-tight antialiased"
            dangerouslySetInnerHTML={{ __html: t("hero.title") }}
          />
          <p
            className="font-sans text-[#fffcf5] text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] md:leading-[34px] opacity-90 font-normal text-balance tracking-normal antialiased"
            dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
          />
        </div>

        {/* APPLY Button and Stats */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex justify-center items-center mb-8">
            <ApplyButton label={t("hero.apply")} buttonType="apply-hero" />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 w-full">
            <StatItem
              label={t("hero.stats.where")}
              value={t("hero.stats.whereValue")}
            />
            <StatItem
              label={t("hero.stats.howMuch")}
              value={t("hero.stats.howMuchValue")}
            />
            <StatItem
              label={t("hero.stats.when")}
              value={t("hero.stats.whenValue")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
