import type { APIRoute } from "astro";
import { getCollection } from "astro:content";


export const getStaticPaths = () => []


export const GET: APIRoute = async ({ params }) => {

    let input: string = ""

    if (params.term) input = params.term.toLowerCase()

    const Posts = (
        await getCollection("blog", (post) => {
            return post.data.status === "Published" &&
                post.data.title.toLowerCase().includes(input) ||
                post.data.description.toLowerCase().includes(input)
        })
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
    if (input.length === 0) {
        return new Response(null, {
            status: 404,
            statusText: "Not found",
        });
    }

    return new Response(JSON.stringify(Posts),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
}