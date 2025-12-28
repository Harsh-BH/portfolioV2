// Sanity schema for profile/personal info
export default {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: "tagline",
            title: "Tagline",
            type: "string",
            description: "Short intro text (e.g., 'Hi, I'm Daniella')",
        },
        {
            name: "heroTitle",
            title: "Hero Title",
            type: "text",
            description: "Main heading on the homepage",
        },
        {
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "text",
            description: "Description text below the hero title",
        },
        {
            name: "bio",
            title: "Bio",
            type: "text",
            description: "Full biography",
        },
        {
            name: "ctaText",
            title: "CTA Button Text",
            type: "string",
            description: "Text for the call-to-action button",
        },
        {
            name: "ctaLink",
            title: "CTA Button Link",
            type: "url",
            description: "Link for the call-to-action button",
        },
        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "platform", title: "Platform", type: "string" },
                        { name: "url", title: "URL", type: "url" },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "profileImage",
        },
    },
};
