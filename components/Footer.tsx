"use client"

import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  const navigation = {
    product: [
      { name: "Features", page: "home" },
      { name: "Blog", page: "blog" },
      { name: "Documentation", page: "blog" },
    ],
    company: [
      { name: "About", page: "about" },
      { name: "Team", page: "about" },
      { name: "Careers", page: "about" },
    ],
    resources: [
      { name: "Newsletter", page: "home" },
      { name: "Contact", page: "about" },
      { name: "Support", page: "about" },
    ],
  };

  const handleClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-bold text-primary-foreground">D</span>
              </div>
              <span className="font-semibold">DevBlog</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-muted-foreground mb-4"
            >
              Insights on modern web development and innovation.
            </motion.p>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-accent hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigation).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h4 className="mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => handleClick(link.page)}
                      whileHover={{ x: 4 }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 DevBlog. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <motion.a
              href="#"
              whileHover={{ color: "var(--primary)" }}
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "var(--primary)" }}
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
