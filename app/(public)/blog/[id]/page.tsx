// src/app/(main)/blog/[id]/page.tsx
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-data";

interface Params {
    id: string;
}

export default async function BlogPost({ params }: { params: Params }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return <BlogPostPage post={post} />;
}

// Optional: Generate static params for better performance (SSG)
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}