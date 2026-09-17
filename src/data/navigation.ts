export interface NavSubItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavSubItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  parentLabel?: string;
  sections?: NavSection[];
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    title: "For whom",
    parentLabel: "View all industries",
    sections: [
      {
        title: "By Scale",
        items: [
          {
            title: "Startup",
            description: "Crafting stories that power your startup journey.",
            href: "/for-whom/startup.html",
            icon: "/images/startup-icon.avif",
          },
          {
            title: "Scaleup",
            description: "Creative support that scales from first raise to enterprise.",
            href: "/for-whom/scaleup.html",
            icon: "/images/scaleupMenuIcon.avif",
          },
          {
            title: "Enterprise",
            description: "Scalable creative solutions for volume and consistency.",
            href: "/for-whom/enterprise.html",
            icon: "/images/enterprise-icon.avif",
          },
        ],
      },
      {
        title: "By Industry",
        items: [
          {
            title: "B2B",
            description: "Professional animations that communicate your value and drive growth.",
            href: "/for-whom/b2b.html",
            icon: "/images/B2B-1.avif",
          },
          {
            title: "SaaS",
            description: "Clear, impactful videos that highlight your product's features.",
            href: "/for-whom/saas.html",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "AI",
            description: "Captivating visuals that make complex AI concepts simple.",
            href: "/for-whom/ai.html",
            icon: "/images/AI.avif",
          },
          {
            title: "Tech",
            description: "Cutting-edge visuals designed to showcase innovation.",
            href: "/for-whom/tech.html",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Marketing",
            description: "Creative video content tailored to boost campaigns.",
            href: "/for-whom/marketing.html",
            icon: "/images/Marketing.avif",
          },
          {
            title: "Web3",
            description: "Innovative visuals bringing blockchain ideas to life.",
            href: "/for-whom/web3.html",
            icon: "/images/web-3-icon.svg",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "/services.html",
    parentLabel: "See all services",
    sections: [
      {
        title: "Video Services",
        items: [
          {
            title: "Explainer video",
            description: "Make your message clear, engaging, and effective.",
            href: "/services/explainer-video.html",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Sizzle reels",
            description: "Showcase your business with fast, visual highlights.",
            href: "/services/sizzle-reels.html",
            icon: "/images/Showcase-1-4.avif",
          },
          {
            title: "Product video",
            description: "Show what your product does and why it matters.",
            href: "/services/animated-product.html",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "Corporate video",
            description: "Videos for onboarding, events, and brand storytelling.",
            href: "/services/corporate-video.html",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Social media",
            description: "Scroll-stopping social videos that boost engagement.",
            href: "/services/social-media.html",
            icon: "/images/Marketing.avif",
          },
        ],
      },
      {
        title: "Animation & 3D",
        items: [
          {
            title: "2D animation",
            description: "Turn complex ideas into clear, engaging visuals.",
            href: "/services/2d-animation.html",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "3D animation",
            description: "Bring your visuals to life and boost engagement.",
            href: "/services/3d-animation.html",
            icon: "/images/AI.avif",
          },
          {
            title: "Branded motion",
            description: "Motion graphics that help elevate your brand.",
            href: "/services/branded-motion.html",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Lottie animation",
            description: "Web animations that enhance UX and look great.",
            href: "/services/lottie.html",
            icon: "/images/Showcase-1-4.avif",
          },
          {
            title: "UI animation",
            description: "Smooth, high-quality motion for your website.",
            href: "/services/ui-animation.html",
            icon: "/images/Showcase-1-3.avif",
          },
        ],
      },
    ],
  },
  {
    title: "Our work",
    href: "/our-work.html",
  },
  {
    title: "Resources",
    sections: [
      {
        title: "Resources",
        items: [
          {
            title: "Blog",
            description: "Explore insights and tips for marketing your SaaS.",
            href: "/resources/blog.html",
            icon: "/images/Frame-1707478531.avif",
          },
          {
            title: "Customer stories",
            description: "Explore case studies showcasing real challenge solutions.",
            href: "/resources/customer-stories.html",
            icon: "/images/Frame-1707478784.avif",
          },
          {
            title: "Video cost calculator",
            description: "Instant estimate of video production costs.",
            href: "/resources/video-cost-calculator.html",
            icon: "/images/cost-calculator-icon.avif",
          },
          {
            title: "AI script generator",
            description: "Simplify your scriptwriting process with AI.",
            href: "/resources/ai-video-script-generator.html",
            icon: "/images/ai-script-icon.avif",
          },
        ],
      },
      {
        title: "Company",
        items: [
          {
            title: "About us",
            description: "Discover who we are and our creative mission.",
            href: "/about-us.html",
            icon: "/images/Frame-1707478785.avif",
          },
          {
            title: "How it works",
            description: "See how we bring your vision to life.",
            href: "/how-it-works.html",
            icon: "/images/Frame-1707478787.avif",
          },
          {
            title: "Contact us",
            description: "Reach out to start a conversation or ask questions.",
            href: "/contact-us.html",
            icon: "/images/Frame-1707478787.avif",
          },
        ],
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing.html",
    parentLabel: "Compare all plans",
    sections: [
      {
        title: "Pricing Plans",
        items: [
          {
            title: "Fixed price",
            description: "Single video projects with upfront pricing and clear scope.",
            href: "/pricing/motion-graphics-price.html",
            icon: "/images/Frame-1707478784.avif",
          },
          {
            title: "Subscription",
            description: "Ongoing creative support with a dedicated team.",
            href: "/pricing/design-subscription-services.html",
            icon: "/images/Frame-1707478531.avif",
          },
          {
            title: "Creative credits",
            description: "Flexible creative support with prepaid credits.",
            href: "/pricing/creative-credits.html",
            icon: "/images/creative-credits-icon-navbar.svg",
          },
        ],
      },
    ],
  },
];
