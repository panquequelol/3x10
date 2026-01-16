import { useTranslations } from "../../i18n/utils";
import Logo from "../../assets/3x10-logo.svg";

interface ProgramDescriptionProps {
  lang: "es" | "en";
}

export function ProgramDescription({ lang }: ProgramDescriptionProps) {
  const t = useTranslations(lang);

  return (
    <section className="relative z-10 min-h-[600px] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4">
        <div className="space-y-6">
          <p className="font-sans text-[#fffcf5] text-[24px] md:text-[26px] leading-[36px]">
            <img
              src={Logo.src}
              alt="3x10"
              className="inline-block w-[20px] h-[20px] md:w-[22px] md:h-[22px] align-middle mr-2"
            />
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
