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
  sections?: NavSection[];
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    title: "For whom",
    sections: [
      {
        title: "Industries",
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
    ],
  },
  {
    title: "Services",
    href: "/services.html",
    sections: [
      {
        title: "Video Services",
        items: [
          {
            title: "Explainer Videos",
            description: "Engaging 2D & 3D explainers breaking down complex value propositions.",
            href: "/services.html#explainers",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Product Demos",
            description: "High-fidelity interactive and animated walkthroughs.",
            href: "/services.html#demos",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "Social Ads",
            description: "High-converting short-form creative for growth campaigns.",
            href: "/services.html#ads",
            icon: "/images/Marketing.avif",
          },
        ],
      },
      {
        title: "Animation & 3D",
        items: [
          {
            title: "3D Motion Graphics",
            description: "Hyper-detailed 3D device renders, abstract physics, and lighting.",
            href: "/services.html#3d",
            icon: "/images/AI.avif",
          },
          {
            title: "UI/UX Micro-Interactions",
            description: "Smooth app interface animations that elevate user experience.",
            href: "/services.html#ui",
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
        title: "Explore",
        items: [
          {
            title: "Customer Stories",
            description: "See how leading brands scaled their video output.",
            href: "/customer-stories",
            icon: "/images/Showcase-1.avif",
          },
          {
            title: "Free Sample",
            description: "Request a custom sample animation tailored to your brand.",
            href: "/get-free-sample.html",
            icon: "/images/Showcase-1-3.avif",
          },
          {
            title: "How It Works",
            description: "Discover our rapid, transparent workflow and timeline.",
            href: "/how-it-works.html",
            icon: "/images/AI.avif",
          },
        ],
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing.html",
  },
];
