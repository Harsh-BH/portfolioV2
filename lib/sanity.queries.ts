import { groq } from "next-sanity";

// Profile query
export const profileQuery = groq`
  *[_type == "profile"][0] {
    name,
    tagline,
    bio,
    heroTitle,
    heroSubtitle,
    ctaText,
    ctaLink,
    "profileImage": profileImage.asset->url
  }
`;

// All projects query
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    category,
    tags,
    description,
    year,
    featured,
    "thumbnail": thumbnail.asset->url,
    "images": images[].asset->url
  }
`;

// Featured projects query
export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    category,
    tags,
    description,
    year,
    "thumbnail": thumbnail.asset->url
  }
`;

// Single project query
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    tags,
    description,
    longDescription,
    year,
    client,
    role,
    duration,
    "thumbnail": thumbnail.asset->url,
    "images": images[].asset->url,
    externalLink
  }
`;

// TypeScript interfaces for query results
export interface Profile {
    name: string;
    tagline: string;
    bio: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    ctaLink: string;
    profileImage: string;
}

export interface Project {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    tags: string[];
    description: string;
    year: string;
    featured: boolean;
    thumbnail: string;
    images?: string[];
}

export interface ProjectDetails extends Project {
    longDescription: string;
    client: string;
    role: string;
    duration: string;
    externalLink?: string;
}
