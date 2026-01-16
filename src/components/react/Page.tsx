import { WebGLShader } from "./WebGLShader";
import { MarqueeBanner } from "./MarqueeBanner";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProgramDescription } from "./ProgramDescription";
import { Selection } from "./Selection";
import { PoweredBy } from "./PoweredBy";
import { WhatWouldYouDo } from "./WhatWouldYouDo";

interface PageProps {
  lang: "es" | "en";
}

export function Page({ lang }: PageProps) {
  return (
    <div className="bg-[#132318] min-h-screen w-full relative">
      {/* WebGL Background Shader */}
      <WebGLShader />

      {/* Content sections with controlled spacing */}
      <div className="flex flex-col gap-8">
        <div>
          <MarqueeBanner lang={lang} />
          <Header lang={lang} />
        </div>

        <Hero lang={lang} />

        <ProgramDescription lang={lang} />

        <PoweredBy lang={lang} />

        <WhatWouldYouDo lang={lang} />
      </div>
    </div>
  );
}
