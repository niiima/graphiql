'use client'

import { motion } from "motion/react";
import { useState } from "react";
import { BlogCard } from "../BlogCard";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { blogPosts, categories } from "../../data/blog-data";

interface BlogListPageProps {
  onNavigate?: (page: string, postId?: string) => void;
}

export function BlogListPage({ onNavigate }: BlogListPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (postId: string) => {
    if (onNavigate) {
      onNavigate("post", postId);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-4">All Articles</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of articles on web development, design, and company culture.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-background"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Animation note: Animated tags */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer whitespace-nowrap"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid - Animation note: Cards with hover lift and image zoom */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-muted-foreground"
        >
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
        </motion.div>

        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h3 className="mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                onClick={() => handlePostClick(post.id)}
              />
            ))}
          </div>
        )}

        {/* Load More Button (for infinite scroll demo) */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
