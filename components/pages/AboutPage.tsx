'use client'

import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { teamMembers } from "../../data/blog-data";
import { Users, Target, Zap, Heart, Award, TrendingUp } from "lucide-react";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always pushing boundaries and exploring new technologies.",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Committed to excellence in everything we build.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Creating solutions that make a real difference.",
    },
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to transform web development" },
    { year: "2021", title: "Team Growth", description: "Expanded to 25+ talented engineers and designers" },
    { year: "2022", title: "Product Launch", description: "Released our flagship platform to 10,000+ users" },
    { year: "2023", title: "Series A", description: "Raised funding to accelerate our mission" },
    { year: "2024", title: "50+ Team", description: "Growing our team and impact across the industry" },
  ];

  const stats = [
    { value: "50+", label: "Team Members" },
    { value: "100K+", label: "Active Users" },
    { value: "500+", label: "Articles Published" },
    { value: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent">
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

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">About Us</span>
            </div>
            <h1 className="mb-6">Building the Future of Web Development</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of passionate developers, designers, and innovators dedicated to
              sharing knowledge and building amazing web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do and help us create exceptional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full text-center hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4"
                  >
                    <value.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section - Animation note: Cards with stagger animation */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Talented individuals who are passionate about technology and sharing knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4"
                  >
                    <Avatar className="h-24 w-24 mx-auto border-2 border-primary/20">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <h3 className="mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline - Animation note: Scroll-triggered animations */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones that shaped our company and continue to drive us forward.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground flex-shrink-0"
                      >
                        {index === 0 && <Award className="h-6 w-6" />}
                        {index === 1 && <Users className="h-6 w-6" />}
                        {index === 2 && <Zap className="h-6 w-6" />}
                        {index === 3 && <TrendingUp className="h-6 w-6" />}
                        {index === 4 && <Target className="h-6 w-6" />}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge>{milestone.year}</Badge>
                          <h3>{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent p-8 md:p-12 text-center"
        >
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
            className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our articles, share your knowledge, and connect with developers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => onNavigate?.("blog")}>
                  Read Our Blog
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
