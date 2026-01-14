interface LanguagePickerProps {
  lang: 'es' | 'en';
}

export function LanguagePicker({ lang }: LanguagePickerProps) {
  const otherLang = lang === 'es' ? 'en' : 'es';
  const otherPath = lang === 'es' ? '/en' : '/';

  return (
    <a
      href={otherPath}
      className="font-sans text-[#dfff5c] text-[24px] animate-fade-in cursor-pointer hover:opacity-80 transition-opacity"
    >
      {otherLang.toUpperCase()}
    </a>
  );
}
