import { Marquee } from "@joycostudio/marquee/react";
import logo from "../../assets/3x10-logo.svg";

interface MarqueeBannerProps {
  lang: "es" | "en";
}

export function MarqueeBanner({ lang }: MarqueeBannerProps) {
  const text = lang === "es" ? "aplica" : "apply";

  return (
    <div className="w-full bg-[#132318] overflow-hidden">
      <Marquee speed={50} speedFactor={1} direction={1}>
        <div className="flex items-center gap-8 text-[#DFFF5C] font-sans text-[24px] uppercase whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>{text}</span>
              <img src={logo.src} alt="3x10" className="w-[24px] h-[24px]" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
