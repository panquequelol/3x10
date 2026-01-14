import { useTranslations } from "../../i18n/utils";

interface ProgramDescriptionProps {
  lang: "es" | "en";
}

export function ProgramDescription({ lang }: ProgramDescriptionProps) {
  const t = useTranslations(lang);

  return (
    <section className="relative z-10 min-h-[600px] flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center space-y-6">
          <p className="font-sans text-[#fffcf5] text-[24px] md:text-[26px] leading-[36px]">
            {t("program.description1")}
          </p>
          <p className="font-sans text-[#fffcf5] text-[24px] md:text-[26px] leading-[36px]">
            {t("program.description2")}
          </p>
          <p className="font-sans text-[#fffcf5] text-[24px] md:text-[26px] leading-[36px]">
            {t("program.description3")}
          </p>
          <p className="font-sans text-[#fffcf5] text-[24px] md:text-[26px] leading-[36px]">
            {t("program.description4")}
          </p>
          <p className="font-sans text-[#fffcf5] text-[24px] md:text-[26px] leading-[36px]">
            {t("program.description5")}
          </p>
        </div>
      </div>
    </section>
  );
}
