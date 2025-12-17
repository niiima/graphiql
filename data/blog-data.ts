export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  category: string;
  featured: boolean;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Performant React Applications with Next.js 15",
    excerpt: "Explore the latest features in Next.js 15 and learn how to leverage App Router, Server Components, and streaming for lightning-fast web apps.",
    content: `
# Building Performant React Applications with Next.js 15

Next.js 15 introduces powerful new features that make building fast, modern web applications easier than ever. In this comprehensive guide, we'll explore the key improvements and best practices.

## The Power of Server Components

Server Components revolutionize how we think about React applications. By rendering components on the server, we can:

- Reduce JavaScript bundle sizes dramatically
- Fetch data closer to the source
- Improve initial page load times
- Enhance SEO and social sharing

\`\`\`tsx
// app/page.tsx
async function HomePage() {
  const posts = await fetch('https://api.example.com/posts');
  const data = await posts.json();
  
  return (
    <div>
      {data.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

## Streaming and Suspense

Streaming allows you to progressively render UI as data becomes available, improving perceived performance.

## Conclusion

Next.js 15 provides incredible tools for building fast, scalable applications. Start experimenting today!
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "Senior Frontend Engineer"
    },
    publishedAt: "2024-12-10",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Performance"],
    category: "Web Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Advanced Patterns and Techniques",
    excerpt: "Dive deep into Tailwind CSS with advanced patterns, custom configurations, and production-ready strategies for scaling your design system.",
    content: `
# Mastering Tailwind CSS

Tailwind CSS has transformed how we approach styling. Let's explore advanced techniques that will elevate your projects.

## Custom Design Tokens

Creating a consistent design system with Tailwind is straightforward:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#8b5cf6'
      }
    }
  }
}
\`\`\`

## Component Composition

Build reusable components with the @apply directive and CSS modules for better organization.
    `,
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      role: "Design Systems Lead"
    },
    publishedAt: "2024-12-08",
    readTime: "6 min read",
    tags: ["Tailwind CSS", "CSS", "Design Systems"],
    category: "Web Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "The Complete Guide to React Server Components",
    excerpt: "Understanding React Server Components from the ground up, including when to use them and how they integrate with your existing React knowledge.",
    content: "# React Server Components Guide\n\nServer Components represent a paradigm shift...",
    author: {
      name: "Emily Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      role: "React Core Team"
    },
    publishedAt: "2024-12-05",
    readTime: "10 min read",
    tags: ["React", "Server Components", "Architecture"],
    category: "Web Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Building Our Design System: A Company Story",
    excerpt: "How we built a scalable design system from scratch, the challenges we faced, and the lessons learned along the way.",
    content: "# Building Our Design System\n\nEvery great product needs a solid foundation...",
    author: {
      name: "Alex Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      role: "Product Designer"
    },
    publishedAt: "2024-12-03",
    readTime: "7 min read",
    tags: ["Design Systems", "Company Culture", "Process"],
    category: "Company Stories",
    featured: false,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Essential TypeScript patterns and practices we use to maintain code quality across our growing codebase.",
    content: "# TypeScript Best Practices\n\nType safety at scale requires discipline...",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      role: "Staff Engineer"
    },
    publishedAt: "2024-12-01",
    readTime: "9 min read",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
  },
  {
    id: "6",
    title: "Animations with Framer Motion: From Basics to Advanced",
    excerpt: "Create stunning animations in React with Framer Motion. Learn the fundamentals and advanced techniques for delightful user experiences.",
    content: "# Framer Motion Guide\n\nAnimations bring interfaces to life...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "Senior Frontend Engineer"
    },
    publishedAt: "2024-11-28",
    readTime: "12 min read",
    tags: ["Framer Motion", "Animations", "React"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop"
  },
  {
    id: "7",
    title: "How We Scaled Our Engineering Team to 50+ Engineers",
    excerpt: "Lessons learned from rapid growth: hiring, onboarding, maintaining culture, and building processes that scale.",
    content: "# Scaling Engineering Teams\n\nGrowing from 10 to 50 engineers...",
    author: {
      name: "Jennifer Walsh",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      role: "VP of Engineering"
    },
    publishedAt: "2024-11-25",
    readTime: "11 min read",
    tags: ["Company Culture", "Engineering", "Leadership"],
    category: "Company Stories",
    featured: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
  },
  {
    id: "8",
    title: "Optimizing Web Vitals for Better User Experience",
    excerpt: "A practical guide to improving Core Web Vitals scores and delivering faster, more responsive web applications.",
    content: "# Optimizing Web Vitals\n\nPerformance metrics matter...",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      role: "Design Systems Lead"
    },
    publishedAt: "2024-11-20",
    readTime: "8 min read",
    tags: ["Performance", "Web Vitals", "SEO"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    bio: "Passionate about creating delightful user experiences with React and modern web technologies."
  },
  {
    name: "Michael Rodriguez",
    role: "Design Systems Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bio: "Building scalable design systems and bridging the gap between design and development."
  },
  {
    name: "Emily Thompson",
    role: "React Core Team",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    bio: "Contributing to React core and helping developers build better applications."
  },
  {
    name: "David Park",
    role: "Staff Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    bio: "Architecting robust, type-safe systems that scale with your business."
  },
  {
    name: "Jennifer Walsh",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    bio: "Leading engineering teams and fostering a culture of innovation and excellence."
  },
  {
    name: "Alex Kim",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    bio: "Crafting beautiful, intuitive interfaces that users love."
  }
];

export const categories = [
  "All",
  "Web Development",
  "Company Stories",
  "Design Systems",
  "Performance",
  "Architecture"
];
