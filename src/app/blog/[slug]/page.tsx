import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Rule from "@/components/ui/Rule";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Theoraux Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-white pt-36 pb-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <ArrowLeft size={14} className="mr-2" />
          Back to Blog
        </Link>

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          {post.category}
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            <User size={14} />
            {post.author}
          </span>
          <span>·</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <div className="relative mt-10 h-[400px] overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-12">
          {post.content.split("\n").map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-display mt-10 mb-4 text-3xl font-semibold tracking-tight"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                {trimmed}
              </p>
            );
          })}
        </div>

        <Rule className="mt-16" />
        <div className="pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-black/20 px-6 py-3 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white dark:border-white/20 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
