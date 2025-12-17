"use client"
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  // onClick?: () => void;
  featured?: boolean;
  index?: number;
}

export function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
  return (
    // Animation note: Card scales up and shadow lifts on hover, stagger on scroll reveal
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full cursor-pointer"
    // onClick={onClick}
    >
      <Link href={`/blog/${post.id}`} className="block h-full">
        <Card className="h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/10">
          {/* Image with zoom effect on hover */}
          <div className="relative overflow-hidden bg-muted aspect-video">
            <motion.img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            {featured && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 left-4"
              >
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              </motion.div>
            )}
          </div>

          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
            <h3 className={featured ? "text-2xl font-bold" : "font-semibold"}>
              {post.title}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          </CardContent>

          <CardFooter className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
