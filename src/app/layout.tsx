import type { Metadata } from "next";
import "./globals.css";

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
        <link href="/css/mobile-nav.css" rel="stylesheet" type="text/css" />

        {/* Fonts & Preconnects */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `WebFont.load({ google: { families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic","Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Inter:300,400,500,600,700","Poppins:300,400,500,600,700","Work Sans:300,400,500,600,700"] }});`,
          }}
        />
      </head>
      <body className="body" suppressHydrationWarning>
        {children}

        {/* Production Webflow & jQuery runtime */}
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66ebfb6ec8f20d5eda50eb34"
          type="text/javascript"
        />
        <script
          src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/js/webflow.a1f0c833.682be516eec0704d.js"
          type="text/javascript"
        />
        <script src="/js/flowbitz.umd.js" type="text/javascript" />
        <script src="/js/lottie.min.js" type="text/javascript" />
        <script src="/js/mobile-nav.js" type="text/javascript" />
        <script src="/js/live-scripts.js" type="text/javascript" />
      </body>
    </html>
  );
}
