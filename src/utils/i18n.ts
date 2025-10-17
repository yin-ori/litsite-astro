export type Locale = 'de' | 'ja';

export const locales: Locale[] = ['de', 'ja'];
export const defaultLocale: Locale = 'de';

export const languageNames = {
  de: { native: 'Deutsch', english: 'German' },
  ja: { native: '日本語', english: 'Japanese' },
} as const;

// Translation dictionaries
export const translations = {
  de: {
    'nav.home': 'Home',
    'nav.about': 'Über uns',
    'nav.services': 'Angebot',
    'nav.translation': 'Übersetzungen',
    'nav.proofreading': 'Lektorat',
    'nav.research': 'Forschungsberatung',
    'nav.blog': 'Artikel',
    'nav.contact': 'Kontakt',
    'site.title': 'LitSite',
    'site.description': 'Professionelle Übersetzungs- und Lektoratsdienstleistungen',
    'home.title': 'LitSite',
    'home.subtitle': 'Professionelle Sprachdienstleistungen',
    'home.description': 'Spezialisiert auf literarische und akademische Texte zwischen Deutsch und Japanisch.',
    'about.title': 'Über uns',
    'about.description': 'Erfahren Sie mehr über unsere Expertise und Arbeitsweise',
    'services.title': 'Unsere Leistungen',
    'services.description': 'Professionelle Übersetzungs- und Lektoratsdienstleistungen',
    'contact.title': 'Kontakt',
    'contact.description': 'Nehmen Sie Kontakt mit uns auf',
    'blog.title': 'Artikel',
    'blog.description': 'Einblicke in die Welt der Übersetzung und Sprache',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.services': 'サービス',
    'nav.translation': '翻訳',
    'nav.proofreading': '校正',
    'nav.research': '研究コンサルティング',
    'nav.blog': 'ブログ',
    'nav.contact': 'お問い合わせ',
    'site.title': 'LitSite',
    'site.description': 'プロフェッショナル翻訳・校正サービス',
    'home.title': 'LitSite',
    'home.subtitle': 'プロフェッショナル言語サービス',
    'home.description': 'ドイツ語と日本語間の文学・学術テキストを専門としています。',
    'about.title': '私たちについて',
    'about.description': '私たちの専門知識と作業方法について',
    'services.title': 'サービス',
    'services.description': 'プロフェッショナル翻訳・校正サービス',
    'contact.title': 'お問い合わせ',
    'contact.description': 'お気軽にお問い合わせください',
    'blog.title': '記事',
    'blog.description': '翻訳と言語の世界への洞察',
  },
} as const;

// Get translation function
export function useTranslations(locale: Locale) {
  return function t(key: keyof typeof translations[typeof defaultLocale]): string {
    return translations[locale][key] || translations[defaultLocale][key] || key;
  };
}

// URL utilities - now all locales have explicit prefixes for better SEO
export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}

export function removeLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length);
    }
    if (pathname === `/${locale}`) {
      return '/';
    }
  }
  return pathname;
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  return defaultLocale;
}