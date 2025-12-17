"use client"

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    // Animation note: Newsletter section fades in on scroll
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent p-8 md:p-12"
    >
      {/* Animated background gradient */}
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
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
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
          delay: 1,
        }}
        className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-sm">Stay Updated</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          Subscribe to Our Newsletter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-muted-foreground"
        >
          Get the latest articles and insights delivered to your inbox. No spam, unsubscribe anytime.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background/50 backdrop-blur-sm"
            disabled={subscribed}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              disabled={subscribed}
              className="w-full sm:w-auto"
            >
              {subscribed ? "Subscribed! ✓" : "Subscribe"}
            </Button>
          </motion.div>
        </motion.form>

        {subscribed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-primary"
          >
            Thanks for subscribing! Check your inbox for confirmation.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
