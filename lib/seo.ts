import { Metadata } from "next";
import { siteConfig } from "./constants";

// Base metadata for the site
export const baseMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@daniella", // Update with actual Twitter handle
    },
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
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

// Helper function to generate page-specific metadata
export function generatePageMetadata(
    title: string,
    description?: string,
    image?: string
): Metadata {
    return {
        title,
        description: description || siteConfig.description,
        openGraph: {
            title,
            description: description || siteConfig.description,
            images: image ? [{ url: image }] : undefined,
        },
        twitter: {
            title,
            description: description || siteConfig.description,
            images: image ? [image] : undefined,
        },
    };
}

// JSON-LD structured data for a person/portfolio
export function generatePersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: "Visual and Product Designer",
        description: siteConfig.description,
        sameAs: [
            // Add social links here
            "https://twitter.com/daniella",
            "https://linkedin.com/in/daniella",
            "https://dribbble.com/daniella",
        ],
    };
}

// JSON-LD for creative work/portfolio
export function generatePortfolioJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.name,
        },
    };
}
