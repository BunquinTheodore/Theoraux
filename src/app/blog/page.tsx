"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Rule from "@/components/ui/Rule";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-4 pt-36 pb-20 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              Blog
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Insights &amp; ideas.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Thoughts on technology, automation, design, and building great
              software — from the Theoraux team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {blogPosts.length === 0 ? (
            <>
              <Rule />
              <div className="py-16">
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                  Nothing published yet — check back soon.
                </p>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative h-56 overflow-hidden border border-black/10 dark:border-white/10">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                        <span>{post.author}</span>
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
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-semibold tracking-tight">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-accent">
                        Read More <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
