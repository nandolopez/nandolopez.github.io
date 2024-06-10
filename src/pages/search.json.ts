import { getCollection } from "astro:content";

export async function GET({ params, request }) {
  const Posts = (
    await getCollection("blog", (entry: any) => entry.data.language === "en")
  ).map((post: any) => {
    const data = post.data;
    return {
      title: data.title,
      description: data.description,
      slug: post.slug,
    };
  });

  return new Response(JSON.stringify(Posts));
}
