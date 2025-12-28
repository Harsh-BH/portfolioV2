import { generatePersonJsonLd, generatePortfolioJsonLd } from "@/lib/seo";

interface SEOProps {
    type?: "person" | "portfolio";
}

export function SEO({ type = "portfolio" }: SEOProps) {
    const jsonLd = type === "person" ? generatePersonJsonLd() : generatePortfolioJsonLd();

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
