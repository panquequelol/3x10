import { LanguagePicker } from './LanguagePicker';
import { useTranslations } from '../../i18n/utils';

interface HeaderProps {
  lang: 'es' | 'en';
}

export function Header({ lang }: HeaderProps) {
  const t = useTranslations(lang);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkType: string) => {
    e.preventDefault();
    const urls: Record<string, string> = {
      shemfund: '#',
      indies: '#',
    };

    const url = urls[linkType] || '#';
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <header className="border-b border-[#dfff5c] h-[70px] flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 bg-[#132318]/80 backdrop-blur-sm">
      <a
        href="#home"
        className="font-sans text-[#dfff5c] text-[24px] link-hover animate-fade-in"
      >
        {t('header.brand')}
      </a>
      <div className="flex items-center gap-4">
        <p className="font-sans text-[#dfff5c] text-[20px] md:text-[24px]">
          {t('header.by')}{' '}
          <a
            href="#"
            data-link="shemfund"
            className="underline link-hover"
            onClick={(e) => handleLinkClick(e, 'shemfund')}
          >
            {t('header.shemfund')}
          </a>{' '}
          &{' '}
          <a
            href="#"
            data-link="indies"
            className="underline link-hover"
            onClick={(e) => handleLinkClick(e, 'indies')}
          >
            {t('header.indies')}
          </a>
        </p>
        <LanguagePicker lang={lang} />
      </div>
    </header>
  );
}
