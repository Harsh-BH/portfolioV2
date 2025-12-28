// Site-wide constants and configuration

export const siteConfig = {
    name: "Harsh Bhatt",
    title: "Harsh Bhatt - Full Stack Developer & AI/ML Engineer",
    description:
        "B.Tech (Hons.) in Chemical Engineering at IIT Kharagpur. Full Stack Developer, AI/ML enthusiast, and Competitive Programmer. Building innovative solutions with Next.js, React, Python, and Quantum Computing.",
    url: "https://harshbhatt.dev", // Update with actual domain
    ogImage: "/og-image.jpg",
    creator: "Harsh Bhatt",
    keywords: [
        "Full Stack Developer",
        "AI/ML Engineer",
        "IIT Kharagpur",
        "Next.js",
        "React",
        "Python",
        "Machine Learning",
        "Quantum Computing",
        "Competitive Programming",
    ],
};

export const navLinks = [
    { href: "#projects", label: "projects" },
    { href: "#experience", label: "experience" },
];

// Animation variants for Framer Motion
export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
