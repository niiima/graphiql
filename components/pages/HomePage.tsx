'use client'

import { motion } from "motion/react";
import { BlogCard } from "../BlogCard";
import { Newsletter } from "../Newsletter";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { blogPosts } from "../../data/blog-data";
import Link from "next/link";

export function HomePage() {
    const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);
    const recentPosts = blogPosts.slice(3, 9);

    // const handlePostClick = (postId: string) => {
    //     if (onNavigate) {
    //         onNavigate("post", postId);
    //     }
    // };

    // const handleViewAll = () => {
    //     if (onNavigate) {
    //         onNavigate("blog");
    //     }
    // };

    return (
        <div className="min-h-screen">
            {/* Hero Section - Animation note: Fade in with stagger on headline */}
            <section className="relative overflow-hidden border-b border-border">
                {/* Animated background elements */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
                />

                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm"
                        >
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm">Latest insights & stories</span>
                        </motion.div>

                        {/* Animated headline with stagger */}
                        <div className="mb-6 overflow-hidden">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
                            >
                                Insights on Web Development
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                            >
                                & Innovation
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                        >
                            Explore the latest in Next.js, React, Tailwind CSS, and modern web technologies.
                            Stories from our engineering team.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" asChild className="group">
                                    <Link href="/blog">
                                        Explore Articles
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild>
                                    <Link href="/about">About Us</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Posts - Animation note: Cards with hover scale + shadow lift */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="mb-2">Featured Articles</h2>
                    <p className="text-muted-foreground">
                        Hand-picked stories from our community
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            featured
                            index={index}
                        // onClick={() => handlePostClick(post.id)}
                        />
                    ))}
                </div>
            </section>

            {/* Recent Posts Grid - Animation note: Animate on scroll reveal with stagger */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center justify-between"
                >
                    <div>
                        <h2 className="mb-2">Recent Posts</h2>
                        <p className="text-muted-foreground">
                            Latest articles and tutorials
                        </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="ghost"
                            //  onClick={handleViewAll} 
                            className="group">
                            <Link href="/blog"> View All</Link>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            index={index}
                        // onClick={() => handlePostClick(post.id)}
                        />
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <Newsletter />
            </section>
        </div>
    );
}
