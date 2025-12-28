import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlowerCursor } from "@/components/FlowerCursor";
import { SEO } from "@/components/SEO";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

// Font configurations
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

// Export metadata for SEO
export const metadata: Metadata = {
    ...baseMetadata,
};

// Viewport configuration
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#EAEAEA" },
        { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
    ],
    width: "device-width",
    initialScale: 1,
};

// Theme initialization script to prevent flash
const ThemeScript = () => {
    const codeToRunOnClient = `
    (function() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ThemeScript />
                <SEO type="portfolio" />
            </head>
            <body
                className={`${inter.variable} ${playfair.variable} bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300 cursor-none`}
            >
                <FlowerCursor />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

