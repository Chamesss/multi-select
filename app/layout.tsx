import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadataBase = new URL(
  "https://multi-select-component-demo.vercel.app"
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "MultiSelect Component Demo | shadcn/ui + Next.js 15",
    template: "%s | MultiSelect Demo",
  },
  description:
    "Interactive demonstration of a customizable MultiSelect component built with shadcn/ui, Next.js 15, and React 19. Features search functionality, theme switching, loading states, and accessibility support.",
  keywords: [
    // your keywords
  ],
  authors: [{ name: "Chamesss", url: "https://github.com/Chamesss" }],
  creator: "Chamesss",
  publisher: "MultiSelect Demo",
  category: "Technology",
  classification: "UI Component Library",
  generator: "Next.js 15",
  applicationName: "MultiSelect Component Demo",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://multi-select-component-demo.vercel.app/",
    title: "MultiSelect Component Demo - Interactive shadcn/ui Component",
    description:
      "Experience a modern MultiSelect component built with shadcn/ui, Next.js 15, and React 19. Features search, theming, loading states, and full accessibility support.",
    siteName: "MultiSelect Component Demo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MultiSelect Component Demo - Interactive UI Component",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MultiSelect Component Demo | shadcn/ui + Next.js 15",
    description:
      "Interactive MultiSelect component with search, theming, and accessibility. Built with shadcn/ui and Next.js 15.",
    creator: "@YourTwitterHandle",
    images: [
      {
        url: "/twitter-image.png",
        alt: "MultiSelect Component Demo Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://multi-select-component-demo.vercel.app/",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export function generateViewport() {
  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
    colorScheme: "dark light",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Zed8XQgwzo1R2PrpPsQdV-R4z-QGYU03dZo_B_ETPBY"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
