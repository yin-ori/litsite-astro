# Blog Articles

This folder contains blog articles in Markdown format, organized by language.

## Folder Structure

```
blog/
├── de/          # German articles
│   └── article-slug.md
├── ja/          # Japanese articles
│   └── article-slug.md
└── README.md
```

## Creating a New Article

1. Create a new `.md` file in the appropriate language folder (`de/` or `ja/`)
2. Use the article slug as the filename (e.g., `my-new-article.md`)
3. Add the required front matter metadata
4. Write your content in Markdown

### Example Article Structure

```markdown
---
title: 'Your Article Title'
description: 'A brief description for SEO (150-160 characters)'
locale: 'de'  # or 'ja'
keywords: ['keyword1', 'keyword2', 'keyword3']
publishedDate: '2024-10-01'
modifiedDate: '2024-10-01'
readTime: '5 Min. Lesezeit'  # or '5分で読める' for Japanese
author: 'JM Sugawara'
---

Your article content starts here. Write naturally in Markdown!

First paragraph introduces the topic...

## First Section

Main content of the first section...

## Second Section

More content here...

## Conclusion

Wrap up your thoughts...
```

## Front Matter Fields

- **title**: Article title (shown as H1 on the page)
- **description**: SEO meta description
- **locale**: Language code ('de' or 'ja')
- **keywords**: Array of keywords for SEO
- **publishedDate**: ISO date format (YYYY-MM-DD)
- **modifiedDate**: ISO date format (YYYY-MM-DD)
- **readTime**: Reading time estimate
- **author**: Author name (defaults to 'JM Sugawara')

## Markdown Formatting

```markdown
## Section Heading (H2)

### Subsection (H3)

Regular paragraph text.

**Bold text** for emphasis

*Italic text* for titles or foreign words

[Link text](https://url.com)

- Bullet point
- Another point

1. Numbered list
2. Second item
```

## After Creating a New Article

1. Create a corresponding page in `src/pages/{locale}/blog/` that loads your markdown:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getEntry } from 'astro:content';

const entry = await getEntry('blog', 'de/your-slug-here');
const { Content } = await entry.render();
// ... rest of the page setup
---
```

2. Update `src/data/blog-posts.ts` to include your article in the blog index

## Tips

- Keep slugs short, descriptive, and URL-friendly (lowercase, hyphens for spaces)
- Use the same slug for both German and Japanese versions
- Write in a clear, engaging style
- Break up long articles with section headings
- Use **bold** for dates when listing chronological items
