import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_NAME } from "../config/default";

export const GET: APIRoute = async (context) => {
  const blog = (await getCollection("blog")).filter((post) => post.data.status === "Published");

  const projects = (await getCollection("projects")).filter(
    (project) => project.data.status === "Published"
  );

  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
  );

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site || '',
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}