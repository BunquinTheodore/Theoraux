This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Search visibility after deployment

The canonical domain is `https://theoraux.com`. The application permanently redirects `www.theoraux.com` to it. Keep both domains assigned to the same Vercel project. You can also configure the `www` domain as a permanent redirect to the primary domain in Vercel's domain settings.

Brand metadata and the Organization/WebSite structured data are centralized in `src/lib/seo.ts`. Keep the brand name, contact information, and official profile links consistent with the visible website. When adding pages, use `createPageMetadata` and include their canonical URLs in `src/app/sitemap.ts`. Only add sitemap modification dates when they reflect an actual content update.

After deploying:

1. Verify ownership of `theoraux.com` in [Google Search Console](https://search.google.com/search-console). The existing `public/google9421193e4e0bfbc1.html` verification file must remain publicly accessible; its presence alone does not confirm that verification is complete.
2. Submit `https://theoraux.com/sitemap.xml` in Search Console, inspect the homepage, and request indexing. Check the Page indexing report for exclusions or a different Google-selected canonical.
3. Add the site and sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters), or import the verified Google Search Console property.
4. Validate the homepage's Organization/WebSite data and a project's BreadcrumbList in Google's [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/). Confirm that the `www` homepage and project URLs return a permanent redirect to the canonical domain.
5. Link the official domain from the company's LinkedIn and Facebook profiles, and keep the same Theoraux name across legitimate business profiles. Monitor impressions, clicks, and position for the branded query in Search Console.

Search engines control rankings. Structured data, sitemaps, and indexing requests improve discovery and brand clarity but do not guarantee indexing or a number-one position. Google advises that recrawling can take days to weeks; see its [recrawling guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
