import type { MetadataRoute } from "next";
import { blogPosts, portfolioProjects } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/team",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: absoluteUrl(route || "/"),
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: absoluteUrl(`/portfolio/${project.id}`),
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes];
}
