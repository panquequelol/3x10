import { WebGLShader } from "./WebGLShader";
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

      {/* Header */}
      <Header lang={lang} />

      {/* Hero Section */}
      <Hero lang={lang} />

      {/* Program Description Section */}
      <ProgramDescription lang={lang} />

      {/* Only 10 get selected Section */}
      <Selection lang={lang} />

      {/* Powered by Section */}
      <PoweredBy lang={lang} />

      {/* What would you do with 3k? Section */}
      <WhatWouldYouDo lang={lang} />
    </div>
  );
}
