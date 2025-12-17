'use client'

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CodeBlock } from "../CodeBlock";
import { ArrowRight, Download, Heart, Star, Zap } from "lucide-react";

/**
 * Component Showcase Page
 * Demonstrates all reusable shadcn-style components with examples
 * This serves as a component library reference
 */

export function ComponentShowcase() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4">Component Library</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reusable shadcn/ui style components with Motion animations
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Buttons Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Interactive buttons with hover and tap animations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button>Default Button</Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline">Outline Button</Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost">Ghost Button</Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="group">
                      With Icon
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm">Small Button</Button>
                  </motion.div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: scale 1.05 on hover, 0.95 on tap
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Badges Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>
                  Tags and labels for categorization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge>Default Badge</Badge>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary">Secondary</Badge>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="outline">Outline</Badge>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge className="bg-primary">React</Badge>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge className="bg-purple-500 text-white">TypeScript</Badge>
                  </motion.div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: scale in with stagger, scale 1.1 on hover
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Cards Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>
                  Content containers with hover effects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                      <Card className="hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-base">Card {i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Hover to see the lift effect with shadow enhancement.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: translate up (y: -8) on hover + shadow increase
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Avatars Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>
                  User profile images with fallbacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                        alt="User"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                        alt="User"
                      />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: scale 1.1 + rotate on hover
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Code Block Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Code Block</CardTitle>
                <CardDescription>
                  Syntax-highlighted code snippets with copy button
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="tsx"
                  code={`import { motion } from "motion/react";

export function Component() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      Hello World
    </motion.div>
  );
}`}
                />
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: fade in on scroll, copy button appears on hover
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Icon Buttons Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Icon Buttons</CardTitle>
                <CardDescription>
                  Buttons with icons and animation effects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button size="icon" variant="outline">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button size="icon" variant="outline">
                      <Star className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button size="icon" variant="outline">
                      <Download className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Button size="icon">
                      <Zap className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: Various hover effects - rotate, scale, translate
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Input Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>
                  Form inputs with clean styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-w-md">
                  <Input placeholder="Enter your email..." type="email" />
                  <Input placeholder="Search articles..." type="search" />
                  <div className="flex gap-2">
                    <Input placeholder="With button..." className="flex-1" />
                    <Button>Submit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Gradient Cards Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Gradient Cards</CardTitle>
                <CardDescription>
                  Cards with animated gradient backgrounds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/30 blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl"
                  />
                  <div className="relative z-10 text-center">
                    <h3 className="mb-2">Animated Background</h3>
                    <p className="text-muted-foreground">
                      Pulsing gradient blobs create dynamic visual interest
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Animation: Infinite pulsing scale and opacity on background elements
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
