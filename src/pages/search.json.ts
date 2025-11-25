import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
    const Posts = (
        await getCollection("blog", (post) => post.data.status === "Published")
    )
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .map((post: any) => {
            const { title, description, slug, topic, thumbnail } = post.data;
            return { title, description, slug, topic, thumbnail };
        });

    return new Response(JSON.stringify(Posts), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
export const getStaticPaths = () => {}
