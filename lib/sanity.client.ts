import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity client configuration
// Replace these with your actual Sanity project details
export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: process.env.NODE_ENV === "production",
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Fetch with revalidation for ISR
export async function sanityFetch<T>(
    query: string,
    params: Record<string, unknown> = {},
    revalidate: number = 60
): Promise<T> {
    return sanityClient.fetch<T>(query, params, {
        next: { revalidate },
    });
}
