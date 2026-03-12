import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/data";
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
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-dark/50 transition-colors hover:text-primary-600"
        >
          <ArrowLeft size={14} className="mr-1" />
          Back to Blog
        </Link>

        {/* Header */}
        <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
          {post.category}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center gap-4 text-sm text-dark/50">
          <span className="flex items-center gap-1">
            <User size={14} />
            {post.author}
          </span>
          <span>&middot;</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>&middot;</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Featured Image */}
        <div className="relative mt-10 h-[400px] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="mt-12">
          {post.content.split("\n").map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mt-10 mb-4 text-2xl font-bold text-dark"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-dark/70">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Back to blog */}
        <div className="mt-16 border-t border-gray-100 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
          >
            <ArrowLeft size={14} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
