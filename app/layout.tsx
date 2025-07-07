import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

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
    "MultiSelect",
    "shadcn/ui",
    "Next.js 15",
    "React 19",
    "React Components",
    "React UI",
    "shadcn/ui Components",
    "shadcn/ui MultiSelect",
    "shadcn/ui MultiSelect Component",
    "shadcn/ui MultiSelect Demo",
    "shadcn/ui MultiSelect Example",
    "UI Component Library",
    "Accessibility",
    "Theming",
    "Loading States",
    "Interactive Components",
    "Web Development",
    "Frontend Development",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Chamsedin Azouz", url: "https://github.com/Chamesss" }],
  creator: "Chamsedin Azouz",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "MultiSelect Component Demo | shadcn/ui + Next.js 15",
    description:
      "Interactive MultiSelect component with search, theming, and accessibility. Built with shadcn/ui and Next.js 15.",
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
        url: "/logo.png",
        color: "#000000",
      },
    ],
  },
  alternates: {
    canonical: "https://multi-select-component-demo.vercel.app/",
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
        <Analytics />
      </body>
    </html>
  );
}
