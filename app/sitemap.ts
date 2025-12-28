import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // Add more static pages as needed
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: "monthly",
        //   priority: 0.8,
        // },
    ];

    // TODO: Add dynamic project pages from Sanity CMS
    // const projects = await sanityFetch<Project[]>(projectsQuery);
    // const projectPages = projects.map((project) => ({
    //   url: `${baseUrl}/work/${project.slug.current}`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly" as const,
    //   priority: 0.7,
    // }));

    return [...staticPages];
}
