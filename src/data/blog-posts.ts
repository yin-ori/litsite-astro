import type { Locale } from '@/utils/i18n';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const blogPosts: Record<Locale, BlogPost[]> = {
  ja: [
    {
      title: '文学翻訳の芸術',
      slug: 'art-of-literary-translation',
      excerpt: '文学翻訳における忠実性と創造性の微妙なバランスを探る。',
      date: '2024-10-01',
      readTime: '5分で読める',
    },
    {
      title: '学術翻訳における文化的文脈',
      slug: 'cultural-context-academic-translation',
      excerpt: '正確な学術翻訳において文化的背景の理解がなぜ重要なのか。',
      date: '2024-09-15',
      readTime: '4分で読める',
    },
    {
      title: 'ドイツ語-日本語翻訳の課題',
      slug: 'german-japanese-translation-challenges',
      excerpt: 'ドイツ語と日本語間の翻訳における一般的な課題とその対処法。',
      date: '2024-09-01',
      readTime: '6分で読める',
    },
  ],
  de: [
    {
      title: 'Die Kunst der literarischen Übersetzung',
      slug: 'art-of-literary-translation',
      excerpt: 'Erkunden Sie die heikle Balance zwischen Treue und Kreativität in der literarischen Übersetzung.',
      date: '2024-10-01',
      readTime: '5 Min. Lesezeit',
    },
    {
      title: 'Kultureller Kontext in der wissenschaftlichen Übersetzung',
      slug: 'cultural-context-academic-translation',
      excerpt: 'Warum kulturelles Verständnis für präzise wissenschaftliche Übersetzungen unerlässlich ist.',
      date: '2024-09-15',
      readTime: '4 Min. Lesezeit',
    },
    {
      title: 'Herausforderungen der deutsch-japanischen Übersetzung',
      slug: 'german-japanese-translation-challenges',
      excerpt: 'Häufige Herausforderungen und Lösungen beim Übersetzen zwischen Deutsch und Japanisch.',
      date: '2024-09-01',
      readTime: '6 Min. Lesezeit',
    },
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPosts[locale] || [];
}