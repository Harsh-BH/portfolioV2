// Sanity schema for projects/case studies
export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Brand Identity", value: "brand-identity" },
                    { title: "Web Design", value: "web-design" },
                    { title: "Mobile App", value: "mobile-app" },
                    { title: "SaaS", value: "saas" },
                    { title: "AI/ML", value: "ai-ml" },
                    { title: "Fintech", value: "fintech" },
                    { title: "Medtech", value: "medtech" },
                ],
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        },
        {
            name: "description",
            title: "Short Description",
            type: "text",
            rows: 3,
        },
        {
            name: "longDescription",
            title: "Long Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "year",
            title: "Year",
            type: "string",
        },
        {
            name: "client",
            title: "Client",
            type: "string",
        },
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "duration",
            title: "Duration",
            type: "string",
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "images",
            title: "Project Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: "featured",
            title: "Featured",
            type: "boolean",
            description: "Show on homepage?",
            initialValue: false,
        },
        {
            name: "order",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first",
        },
        {
            name: "externalLink",
            title: "External Link",
            type: "url",
            description: "Link to live project",
        },
    ],
    preview: {
        select: {
            title: "title",
            category: "category",
            media: "thumbnail",
        },
        prepare(selection: { title: string; category: string; media: unknown }) {
            const { title, category, media } = selection;
            return {
                title,
                subtitle: category,
                media,
            };
        },
    },
    orderings: [
        {
            title: "Display Order",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }],
        },
    ],
};
