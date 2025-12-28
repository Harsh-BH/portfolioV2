"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <nav className="w-full py-8 px-6 flex justify-center items-center relative z-50">
            <div className="flex items-center gap-12 text-primary font-medium text-lg">
                <Link
                    href="#projects"
                    className="hover:text-red-600 transition-colors focus-visible:ring-offset-0"
                >
                    projects
                </Link>

                {/* Logo with scribble hover effect */}
                <Link
                    href="/"
                    className="text-2xl font-display text-primary scribble-hover flex flex-col items-center leading-tight"
                    aria-label="Go to homepage"
                >
                    <motion.span
                        className="block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        H a r s h
                    </motion.span>
                    <motion.span
                        className="block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        B h a t t
                    </motion.span>
                </Link>

                <Link
                    href="#experience"
                    className="hover:text-red-600 transition-colors focus-visible:ring-offset-0"
                >
                    experience
                </Link>
            </div>

            {/* Theme toggle positioned absolutely on the right */}
            <div className="absolute right-6 top-8">
                <ThemeToggle />
            </div>
        </nav>
    );
}

