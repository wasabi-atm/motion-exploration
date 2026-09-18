"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const AI_QUERY = encodeURIComponent(
  "Hi, I'm looking into working with a B2B video production company called Motion The Agency (motiontheagency.com), and I'd like to understand them properly before I reach out. Can you help me get to know them? I'd like to know who they are and what they do, what makes them stand out as a motion and video studio, and what their strongest services are. I'm also interested in the practical side, including their pricing approach, turnaround, quality of work, well-known clients, and most notable results or case studies. Please use as much information as you can from their website, including main pages, service pages, case studies, and blog articles, and give me a clear and honest picture of who they are and what they're best at."
);

export function Footer() {
  useEffect(() => {
    // If Clutch widget script is loaded, trigger re-initialization if available
    if (typeof window !== "undefined" && (window as any).CLUTCHCO) {
      try {
        (window as any).CLUTCHCO.Init();
      } catch {
        // ignore if clutch isn't ready
      }
    }
  }, []);

  return (
    <footer className="section-footer text-white" suppressHydrationWarning>
      {/* Script for Clutch widget */}
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="lazyOnload"
      />

      {/* Dynamic Breadcrumb Container */}
      <div className="w-layout-blockcontainer container-1280 container-breadcrumb w-container">
        <nav
          id="js-breadcrumb"
          aria-label="Breadcrumb"
          className="div-block-65 dynamic-breadcrumb"
          suppressHydrationWarning
        >
          <ol
            role="list"
            className="list-6 dynamic-breadcrumb__items text-caps w-list-unstyled"
            suppressHydrationWarning
          />
          <div className="w-embed w-script" />
        </nav>
      </div>

      {/* Main Footer Container */}
      <div className="w-layout-blockcontainer container-1280 w-container">
        <div className="wrapper-footer">
          {/* Column 1: Brand, Address, Reviews, AI */}
          <div className="column-1">
            <div className="w-layout-vflex">
              <Link href="/" className="w-inline-block" suppressHydrationWarning>
                <img
                  src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/66ebfe7ccb344ea14e764cd7_Link%20%E2%86%92%20cropped-motion-logo-png-04-1-1024x293.png.avif"
                  loading="lazy"
                  alt="motion the agency logo light mode"
                  className="image-5"
                />
              </Link>
              <div className="text-14-150 footer">
                We bring ideas to life with bold motion graphics, 2D/3D animation, UI Design, and Lottie Animations. <br />
                Helping tech &amp; SaaS brands stand out.
              </div>
            </div>

            {/* Address & Email */}
            <div className="social-link-block">
              <div className="link-contact-call-wrapper">
                <a
                  href="https://share.google/u2xcCUZKEpk2THYOp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-contact-call w-inline-block"
                  suppressHydrationWarning
                >
                  <div className="ic-1-call w-embed">
                    <svg
                      width="20"
                      height="28"
                      viewBox="0 0 20 28"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.37501 5C7.5523 5.00215 5.80487 5.72717 4.51602 7.01602C3.22718 8.30486 2.50216 10.0523 2.50001 11.875C2.49782 13.3645 2.98437 14.8136 3.88501 16C3.88501 16 4.07251 16.2469 4.10313 16.2825L9.37501 22.5L14.6494 16.2794C14.6769 16.2463 14.865 16 14.865 16L14.8656 15.9981C15.7658 14.8123 16.2521 13.3638 16.25 11.875C16.2479 10.0523 15.5228 8.30486 14.234 7.01602C12.9451 5.72717 11.1977 5.00215 9.37501 5V5ZM9.37501 14.375C8.88055 14.375 8.3972 14.2284 7.98608 13.9537C7.57496 13.679 7.25453 13.2885 7.06531 12.8317C6.87609 12.3749 6.82658 11.8722 6.92304 11.3873C7.01951 10.9023 7.25761 10.4569 7.60724 10.1072C7.95687 9.7576 8.40233 9.5195 8.88728 9.42304C9.37223 9.32657 9.8749 9.37608 10.3317 9.5653C10.7885 9.75452 11.179 10.075 11.4537 10.4861C11.7284 10.8972 11.875 11.3805 11.875 11.875C11.8742 12.5378 11.6105 13.1732 11.1419 13.6419C10.6732 14.1105 10.0378 14.3742 9.37501 14.375V14.375Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>42-44 Bishopsgate, London, United Kingdom, EC2N 4AH</div>
                </a>
                <a
                  href="mailto:hello@motiontheagency.com"
                  className="link-contact-call w-inline-block"
                  suppressHydrationWarning
                >
                  <div className="ic-2-call w-embed">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5891 9.97266C16.6984 9.89062 16.8625 9.97266 16.8625 10.1094V15.6875C16.8625 16.4258 16.2609 17 15.55 17H4.175C3.43672 17 2.8625 16.4258 2.8625 15.6875V10.1094C2.8625 9.97266 2.99922 9.89062 3.10859 9.97266C3.7375 10.4648 4.53047 11.0664 7.31953 13.0898C7.89375 13.5 8.87813 14.4023 9.8625 14.4023C10.8195 14.4023 11.8313 13.5 12.3781 13.0898C15.1672 11.0664 15.9602 10.4648 16.5891 9.97266ZM9.8625 13.5C9.20625 13.5273 8.30391 12.707 7.83906 12.3789C4.20234 9.75391 3.92891 9.50781 3.10859 8.85156C2.94453 8.74219 2.8625 8.55078 2.8625 8.33203V7.8125C2.8625 7.10156 3.43672 6.5 4.175 6.5H15.55C16.2609 6.5 16.8625 7.10156 16.8625 7.8125V8.33203C16.8625 8.55078 16.7531 8.74219 16.5891 8.85156C15.7688 9.50781 15.4953 9.75391 11.8586 12.3789C11.3938 12.707 10.4914 13.5273 9.8625 13.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>hello@motiontheagency.com</div>
                </a>
              </div>
            </div>

            {/* G2 and Clutch Widgets */}
            <div className="w-layout-hflex flex-h _16 mobile-h">
              <div className="code-embed-9 w-embed w-script">
                <a
                  href="https://www.g2.com/products/motion-the-agency/reviews?utm_source=review-widget"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Read reviews of Motion The Agency on G2"
                  suppressHydrationWarning
                >
                  <img
                    className="full-width"
                    style={{ maxWidth: "140px" }}
                    alt="Read Motion The Agency reviews on G2"
                    src="https://www.g2.com/products/motion-the-agency/widgets/stars?color=white&amp;type=read"
                  />
                </a>
              </div>
              <div className="code-embed-9 w-embed w-script">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="2"
                  data-height="45"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-darkbg="darkbg"
                  data-clutchcompany-id="1917615"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Ask AI about us */}
            <div className="w-layout-hflex flex-v gap-16 left-align">
              <div className="w-layout-hflex flex-h _12">
                <img
                  src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d777a03229cbc93b7784b_sparkIcon.svg"
                  loading="lazy"
                  alt=""
                  className="ic-24"
                />
                <div className="w-layout-hflex flex-h _8 v-mobile">
                  <div className="heading-16-120">Ask AI about us!</div>
                  <div className="text-14-150 _64">Get an instant, unbiased summary!</div>
                </div>
              </div>
              <div className="w-layout-hflex flex-h _8">
                <a
                  href={`https://chatgpt.com/?q=${AI_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-ai w-inline-block"
                  title="Ask ChatGPT about Motion The Agency"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7da16e53465ab40c5b45_gpt.svg"
                    loading="lazy"
                    alt="ChatGPT"
                  />
                </a>
                <a
                  href={`https://claude.ai/new?q=${AI_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-ai w-inline-block"
                  title="Ask Claude about Motion The Agency"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f728a319236392a6ba4_claude.svg"
                    loading="lazy"
                    alt="Claude"
                  />
                </a>
                <a
                  href={`https://www.perplexity.ai/search?q=${AI_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-ai w-inline-block"
                  title="Ask Perplexity about Motion The Agency"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f72f9060f446fb18c76_perplexity.svg"
                    loading="lazy"
                    alt="Perplexity"
                  />
                </a>
                <a
                  href={`https://www.google.com/search?udm=50&aep=11&q=${AI_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-ai w-inline-block"
                  title="Ask Gemini about Motion The Agency"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f721bd3eb3282d22794_gemini.svg"
                    loading="lazy"
                    alt="Gemini"
                  />
                </a>
                <a
                  href={`https://grok.com/?q=${AI_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-ai w-inline-block"
                  title="Ask Grok about Motion The Agency"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f723e587379b2ee1e9e_grok.svg"
                    loading="lazy"
                    alt="Grok"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="flex-h _40px footer">
            {/* Column: Animation services */}
            <div id="w-node-cdc59cc7-9dd5-0b1e-461b-3643144b04ed-144b04dc" className="column-3">
              <div className="gap-16">
                <div className="text-16-150 weight-bold">Animation services</div>
                <div className="list">
                  <Link href="/services/ui-animation" className="footer-link" suppressHydrationWarning>
                    UI animation
                  </Link>
                  <Link href="/services/sizzle-reels" className="footer-link" suppressHydrationWarning>
                    Sizzle reels
                  </Link>
                  <Link href="/services/2d-animation" className="footer-link" suppressHydrationWarning>
                    2D animation
                  </Link>
                  <Link href="/services/3d-animation" className="footer-link" suppressHydrationWarning>
                    3D animation
                  </Link>
                  <Link href="/services/social-media" className="footer-link" suppressHydrationWarning>
                    Social media content
                  </Link>
                  <Link href="/services/branded-motion" className="footer-link" suppressHydrationWarning>
                    Branded motion graphics
                  </Link>
                  <Link href="/services/animated-product" className="footer-link" suppressHydrationWarning>
                    Animated product videos
                  </Link>
                  <Link href="/services/corporate-video" className="footer-link" suppressHydrationWarning>
                    Corporate videos
                  </Link>
                  <Link href="/services/training-video" className="footer-link" suppressHydrationWarning>
                    Training videos
                  </Link>
                  <Link href="/services/explainer-video" className="footer-link" suppressHydrationWarning>
                    Explainer videos
                  </Link>
                  <Link href="/services/lottie" className="footer-link" suppressHydrationWarning>
                    Lottie animation
                  </Link>
                </div>
              </div>
            </div>

            {/* Column: Design services & Pricing */}
            <div id="w-node-_09c10ff7-676d-14b5-00e4-ce8e8e35f2ad-144b04dc" className="column-1-tablet">
              <div className="gap-16">
                <div className="text-16-150 weight-bold">Design services</div>
                <div className="list">
                  <Link href="/services/web-design" className="footer-link" suppressHydrationWarning>
                    Web design
                  </Link>
                  <Link href="/services/ui-design" className="footer-link" suppressHydrationWarning>
                    UI design
                  </Link>
                  <Link href="/services/brand-design" className="footer-link" suppressHydrationWarning>
                    Brand design
                  </Link>
                </div>
              </div>
              <div className="column-2 pricing-wrapper">
                <div className="text-16-150 weight-bold">Pricing</div>
                <div className="list">
                  <Link href="/pricing/motion-graphics-price" className="footer-link" suppressHydrationWarning>
                    Fixed price
                  </Link>
                  <Link href="/pricing/design-subscription-services" className="footer-link" suppressHydrationWarning>
                    Subscription
                  </Link>
                  <Link href="/pricing/creative-credits" className="footer-link" suppressHydrationWarning>
                    Creative credits
                  </Link>
                  <Link href="/pricing" className="footer-link" suppressHydrationWarning>
                    Compare all pricing
                  </Link>
                </div>
              </div>
            </div>

            {/* Column: For whom */}
            <div id="w-node-cdc59cc7-9dd5-0b1e-461b-3643144b050a-144b04dc" className="column-2 hide">
              <div className="w-layout-vflex column-4">
                <div className="list">
                  <div className="text-16-150 weight-bold">For whom</div>
                  <Link href="/for-whom/startup" className="footer-link" suppressHydrationWarning>
                    Startup
                  </Link>
                  <Link href="/for-whom/scaleup" className="footer-link" suppressHydrationWarning>
                    Scaleup
                  </Link>
                  <Link href="/for-whom/enterprise" className="footer-link" suppressHydrationWarning>
                    Enterprise
                  </Link>
                  <Link href="/for-whom/saas" className="footer-link" suppressHydrationWarning>
                    SaaS
                  </Link>
                  <Link href="/for-whom/marketing" className="footer-link" suppressHydrationWarning>
                    Marketing
                  </Link>
                  <Link href="/for-whom/b2b" className="footer-link" suppressHydrationWarning>
                    B2B
                  </Link>
                  <Link href="/for-whom/tech" className="footer-link" suppressHydrationWarning>
                    Tech
                  </Link>
                  <Link href="/for-whom/ai" className="footer-link" suppressHydrationWarning>
                    AI
                  </Link>
                  <Link href="/for-whom/web3" className="footer-link" suppressHydrationWarning>
                    Web3
                  </Link>
                  <Link href="/for-whom/healthcare" className="footer-link" suppressHydrationWarning>
                    Healthcare
                  </Link>
                </div>
              </div>
            </div>

            {/* Column: Resources & Company */}
            <div id="w-node-cdc59cc7-9dd5-0b1e-461b-3643144b051a-144b04dc" className="column-4">
              <div className="column-2 pricing-wrapper">
                <div className="text-16-150 weight-bold">Resources</div>
                <div className="list">
                  <Link href="/resources/blog" className="footer-link" suppressHydrationWarning>
                    Blog
                  </Link>
                  <Link href="/resources/customer-stories" className="footer-link" suppressHydrationWarning>
                    Customer stories
                  </Link>
                  <Link href="/resources/video-cost-calculator" className="footer-link" suppressHydrationWarning>
                    Video cost calculator
                  </Link>
                  <Link href="/resources/ai-video-script-generator" className="footer-link" suppressHydrationWarning>
                    Free AI video script generator
                  </Link>
                </div>
              </div>
              <div className="gap-16 company-wrapper">
                <div className="text-16-150 weight-bold">Company</div>
                <div className="list">
                  <Link href="/about-us" className="footer-link" suppressHydrationWarning>
                    About us
                  </Link>
                  <Link href="/our-work" className="footer-link" suppressHydrationWarning>
                    Our work
                  </Link>
                  <Link href="/how-it-works" className="footer-link" suppressHydrationWarning>
                    How it works
                  </Link>
                  <Link href="/contact-us" className="footer-link" suppressHydrationWarning>
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Footer */}
      <div className="banner-footer">
        <div className="line-gradient">
          <div className="w-layout-blockcontainer container-1280 footer w-container">
            <div className="wrapper-banner-logo space-between">
              <div className="social-link mobile-center">
                <a
                  href="https://www.youtube.com/@motiontheagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/66f422cfe28c3ff5ad22f10c_bi_youtube.svg"
                    loading="lazy"
                    alt="youtube icon"
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/motion-the-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/66f422cf62492921c0dc6417_mdi_linkedin.svg"
                    loading="lazy"
                    alt="linkedin icon"
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://www.behance.net/motiontheagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block"
                  suppressHydrationWarning
                >
                  <img
                    src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a0b0ec539febb098a575651_behance%20icon.svg"
                    loading="lazy"
                    alt="behance icon"
                    className="social-icon"
                  />
                </a>
              </div>
              <div className="gap-24-h mobile-v">
                <div className="text-14-150 footnote">© 2026 Motion The Agency. All rights reserved.</div>
                <div className="div-block-41">
                  <Link href="/legal/terms-of-services" className="ft-link" suppressHydrationWarning>
                    Terms of Service
                  </Link>
                  <Link href="/legal/privacy-policy" className="ft-link" suppressHydrationWarning>
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
