import { getCollection } from "astro:content";

export async function GET() {
  const Posts = (
    await getCollection("blog", (post) => post.data.status === "Published")
  )
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .map((post: any) => {
    const data = post.data;
    return {
      title: data.title,
      description: data.description,
      slug: post.slug,
      topic: data.topic,
      thumbnail: data.thumbnail,
    };
  });

  return new Response(JSON.stringify(Posts));
}
