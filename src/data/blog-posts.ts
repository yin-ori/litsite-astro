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
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPosts[locale] || [];
}