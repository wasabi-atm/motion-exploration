import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GSAPAnimationManager } from "@/components/animation/GSAPAnimationManager";

export const metadata: Metadata = {
  title: "Motion Graphics & Design Agency | Free Video Sample",
  description:
    "A motion graphics and design agency focused on top tier animations for all your B2B marketing and business needs. Explore our Tech & SAAS portfolio today.",
  icons: {
    icon: "https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/66ebfc9738a4b427c148f502_Frame%201707478663.png",
    apple: "https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6762c1dea24d4f98491f457f_Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-mod-js w-mod-ix" suppressHydrationWarning>
      <head>
        {/* Production stylesheets from motiontheagency.com */}
        <link
          href="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/css/motiontheagency.webflow.shared.09737e1f4.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/css/motiontheagency.webflow.66ebfb6ec8f20d5eda50eb3a.57137ef59.opt.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* Fonts & Preconnects */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body" suppressHydrationWarning>
        <GSAPAnimationManager />
        <Navbar />
        {children}
        <Footer />

        {/* Production Webflow & jQuery runtime using Next.js Script */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66ebfb6ec8f20d5eda50eb34"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/js/webflow.a1f0c833.682be516eec0704d.js"
          strategy="afterInteractive"
        />
        <Script src="/js/flowbitz.umd.js" strategy="afterInteractive" />
        <Script src="/js/live-scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
