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
    href: "/for-whom",
    parentLabel: "View all industries & scales",
    sections: [
      {
        title: "By Scale",
        items: [
          {
            title: "Startup",
            description: "Crafting stories that power your startup journey.",
            href: "/for-whom/startup",
            icon: "/images/startup-icon.avif",
          },
          {
            title: "Scaleup",
            description: "Creative support that scales from first raise to enterprise.",
            href: "/for-whom/scaleup",
            icon: "/images/scaleupMenuIcon.avif",
          },
          {
            title: "Enterprise",
            description: "Scalable creative solutions for volume and consistency.",
            href: "/for-whom/enterprise",
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
            href: "/for-whom/b2b",
            icon: "/images/B2B-1.avif",
          },
          {
            title: "SaaS",
            description: "Clear, impactful videos that highlight your product's features.",
            href: "/for-whom/saas",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "AI",
            description: "Captivating visuals that make complex AI concepts simple.",
            href: "/for-whom/ai",
            icon: "/images/AI.avif",
          },
          {
            title: "Tech",
            description: "Cutting-edge visuals designed to showcase innovation.",
            href: "/for-whom/tech",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Marketing",
            description: "Creative video content tailored to boost campaigns.",
            href: "/for-whom/marketing",
            icon: "/images/Marketing.avif",
          },
          {
            title: "Web3",
            description: "Innovative visuals bringing blockchain ideas to life.",
            href: "/for-whom/web3",
            icon: "/images/web-3-icon.svg",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    parentLabel: "See all services",
    sections: [
      {
        title: "Video Services",
        items: [
          {
            title: "Explainer video",
            description: "Make your message clear, engaging, and effective.",
            href: "/services/explainer-video",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Sizzle reels",
            description: "Showcase your business with fast, visual highlights.",
            href: "/services/sizzle-reels",
            icon: "/images/Showcase-1-4.avif",
          },
          {
            title: "Product video",
            description: "Show what your product does and why it matters.",
            href: "/services/animated-product",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "Corporate video",
            description: "Videos for onboarding, events, and brand storytelling.",
            href: "/services/corporate-video",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Social media",
            description: "Scroll-stopping social videos that boost engagement.",
            href: "/services/social-media",
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
            href: "/services/2d-animation",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "3D animation",
            description: "Bring your visuals to life and boost engagement.",
            href: "/services/3d-animation",
            icon: "/images/AI.avif",
          },
          {
            title: "Branded motion",
            description: "Motion graphics that help elevate your brand.",
            href: "/services/branded-motion",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Lottie animation",
            description: "Web animations that enhance UX and look great.",
            href: "/services/lottie",
            icon: "/images/Showcase-1-4.avif",
          },
          {
            title: "UI animation",
            description: "Smooth, high-quality motion for your website.",
            href: "/services/ui-animation",
            icon: "/images/Showcase-1-3.avif",
          },
        ],
      },
    ],
  },
  {
    title: "Our work",
    href: "/our-work",
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
            href: "/resources/blog",
            icon: "/images/Frame-1707478531.avif",
          },
          {
            title: "Customer stories",
            description: "Explore case studies showcasing real challenge solutions.",
            href: "/resources/customer-stories",
            icon: "/images/Frame-1707478784.avif",
          },
          {
            title: "Video cost calculator",
            description: "Instant estimate of video production costs.",
            href: "/resources/video-cost-calculator",
            icon: "/images/cost-calculator-icon.avif",
          },
          {
            title: "AI script generator",
            description: "Simplify your scriptwriting process with AI.",
            href: "/resources/ai-video-script-generator",
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
            href: "/about-us",
            icon: "/images/Frame-1707478785.avif",
          },
          {
            title: "How it works",
            description: "See how we bring your vision to life.",
            href: "/how-it-works",
            icon: "/images/Frame-1707478787.avif",
          },
          {
            title: "Contact us",
            description: "Reach out to start a conversation or ask questions.",
            href: "/contact-us",
            icon: "/images/Frame-1707478787.avif",
          },
        ],
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    parentLabel: "Compare all plans",
    sections: [
      {
        title: "Pricing Plans",
        items: [
          {
            title: "Fixed price",
            description: "Single video projects with upfront pricing and clear scope.",
            href: "/pricing/motion-graphics-price",
            icon: "/images/Frame-1707478784.avif",
          },
          {
            title: "Subscription",
            description: "Ongoing creative support with a dedicated team.",
            href: "/pricing/design-subscription-services",
            icon: "/images/Frame-1707478531.avif",
          },
          {
            title: "Creative credits",
            description: "Flexible creative support with prepaid credits.",
            href: "/pricing/creative-credits",
            icon: "/images/creative-credits-icon-navbar.svg",
          },
        ],
      },
    ],
  },
];
