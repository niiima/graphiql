"use client"

import { motion } from "motion/react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group rounded-lg border border-border bg-secondary/50 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/30">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          {language}
        </span>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <Check className="h-3 w-3 text-primary" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-foreground/90 font-mono">
          {code}
        </code>
      </pre>
    </motion.div>
  );
}
