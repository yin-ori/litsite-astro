import type { Locale } from './i18n';

export interface SEOProps {
  title: string;
  description: string;
  locale: Locale;
  keywords?: string[];
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
}

// Generate structured data for Person
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'LitSite Professional',
    jobTitle: 'Translator and Proofreader',
    description: 'Professional translator and proofreader specializing in German-Japanese literary and academic texts',
    url: 'https://litsite.com',
    sameAs: [],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'German',
        alternateName: 'de',
      },
      {
        '@type': 'Language',
        name: 'Japanese',
        alternateName: 'ja',
      },
    ],
  };
}

// Generate structured data for Professional Service
export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'LitSite Translation Services',
    description: 'Professional translation and proofreading services for literary and academic texts',
    url: 'https://litsite.com',
    serviceType: ['Translation', 'Proofreading', 'Literary Translation', 'Academic Translation'],
    areaServed: {
      '@type': 'Country',
      name: ['Germany', 'Japan'],
    },
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'German',
        alternateName: 'de',
      },
      {
        '@type': 'Language',
        name: 'Japanese',
        alternateName: 'ja',
      },
    ],
  };
}

// Generate hreflang links
export function generateHreflangLinks(currentPath: string) {
  return [
    { hreflang: 'de', href: `https://litsite.com${currentPath}` },
    { hreflang: 'ja', href: `https://litsite.com/ja${currentPath}` },
    { hreflang: 'x-default', href: `https://litsite.com${currentPath}` },
  ];
}

// Generate Open Graph meta tags
export function generateOpenGraphTags(props: SEOProps) {
  const { title, description, locale, image } = props;

  return [
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:locale', content: locale === 'de' ? 'de_DE' : 'ja_JP' },
    { property: 'og:site_name', content: 'LitSite' },
    ...(image ? [{ property: 'og:image', content: image }] : []),
  ];
}

// Generate Twitter Card meta tags
export function generateTwitterCardTags(props: SEOProps) {
  const { title, description, image } = props;

  return [
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    ...(image ? [{ name: 'twitter:image', content: image }] : []),
  ];
}