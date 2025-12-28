import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#EF4444",
                secondary: "#000000",
                "background-light": "#EAEAEA",
                "background-dark": "#1a1a1a",
                "flower-blue": "#7DD3FC",
                "flower-blue-center": "#0000aa",
                "flower-red": "#EF4444",
            },
            fontFamily: {
                display: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "spin-slow-reverse": "spin 50s linear infinite reverse",
                scribble: "scribble 0.3s infinite",
            },
            keyframes: {
                scribble: {
                    "0%": { transform: "translate(0, 0) rotate(0deg)" },
                    "25%": { transform: "translate(1px, 1px) rotate(1deg)" },
                    "50%": { transform: "translate(-1px, -1px) rotate(-1deg)" },
                    "75%": { transform: "translate(-1px, 1px) rotate(0deg)" },
                    "100%": { transform: "translate(0, 0) rotate(0deg)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
