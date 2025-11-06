import type { Locale } from '@/utils/i18n';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: Record<Locale, BlogPost[]> = {
  de: [
    {
      title: 'Die Kunst der literarischen Übersetzung',
      slug: 'art-of-literary-translation',
      excerpt: 'Erkunden Sie die heikle Balance zwischen Treue und Kreativität in der literarischen Übersetzung.',
      date: '2024-10-01',
      readTime: '5 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: 'Schreibtisch mit Büchern und Schreibwaren',
    },
    {
      title: 'Kultureller Kontext in der wissenschaftlichen Übersetzung',
      slug: 'cultural-context-academic-translation',
      excerpt: 'Warum kulturelles Verständnis für präzise wissenschaftliche Übersetzungen unerlässlich ist.',
      date: '2024-09-15',
      readTime: '4 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: 'Bücherregal in einer Bibliothek',
    },
    {
      title: 'Herausforderungen der deutsch-japanischen Übersetzung',
      slug: 'german-japanese-translation-challenges',
      excerpt: 'Häufige Herausforderungen und Lösungen beim Übersetzen zwischen Deutsch und Japanisch.',
      date: '2024-09-01',
      readTime: '6 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: 'Aufgeschlagenes Buch mit Kaffee in ruhiger Leseatmosphäre',
    },
  ],
  en: [
    {
      title: 'The Art of Literary Translation',
      slug: 'art-of-literary-translation',
      excerpt: 'Exploring the delicate balance between fidelity and creativity in literary translation.',
      date: '2024-10-01',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: 'Desk with books and writing supplies',
    },
    {
      title: 'Cultural Context in Academic Translation',
      slug: 'cultural-context-academic-translation',
      excerpt: 'Why cultural understanding is essential for precise academic translations.',
      date: '2024-09-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: 'Library bookshelf',
    },
    {
      title: 'German-Japanese Translation Challenges',
      slug: 'german-japanese-translation-challenges',
      excerpt: 'Common challenges and solutions when translating between German and Japanese.',
      date: '2024-09-01',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: 'Open book with coffee in quiet reading atmosphere',
    },
  ],
  ja: [
    {
      title: '文学翻訳の芸術',
      slug: 'art-of-literary-translation',
      excerpt: '文学翻訳における忠実性と創造性の微妙なバランスを探る。',
      date: '2024-10-01',
      readTime: '5分で読める',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: '本と筆記用具が並ぶ机の上',
    },
    {
      title: '学術翻訳における文化的文脈',
      slug: 'cultural-context-academic-translation',
      excerpt: '正確な学術翻訳において文化的背景の理解がなぜ重要なのか。',
      date: '2024-09-15',
      readTime: '4分で読める',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: '図書館の本棚',
    },
    {
      title: 'ドイツ語-日本語翻訳の課題',
      slug: 'german-japanese-translation-challenges',
      excerpt: 'ドイツ語と日本語間の翻訳における一般的な課題とその対処法。',
      date: '2024-09-01',
      readTime: '6分で読める',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=675&fit=crop&auto=format&q=80',
      imageAlt: '開かれた本とコーヒーのある静かな読書空間',
    },
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPosts[locale] || [];
}