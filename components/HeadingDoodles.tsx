"use client";

import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 0.6,
        transition: { duration: 1.5, ease: "easeOut" }
    }
};

// Arrow pointing down with slight curve
export const ArrowDoodle = ({ className = "" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 60 80"
        className={`w-8 h-12 ${className}`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.path
            d="M 30 5 Q 25 25, 30 45 Q 35 60, 30 75"
            variants={draw}
            className="stroke-gray-400 dark:stroke-gray-500"
            strokeWidth="2"
        />
        <motion.path
            d="M 20 65 L 30 75 L 40 65"
            variants={draw}
            className="stroke-gray-400 dark:stroke-gray-500"
            strokeWidth="2"
        />
    </motion.svg>
);

// Sparkle/star decoration
export const SparkleDoodle = ({ className = "", color = "amber" }: { className?: string; color?: string }) => {
    const colorClasses = {
        amber: "stroke-amber-400/70 dark:stroke-amber-400/70",
        pink: "stroke-pink-400/70 dark:stroke-pink-400/70",
        cyan: "stroke-cyan-400/70 dark:stroke-cyan-400/70",
        violet: "stroke-violet-400/70 dark:stroke-violet-400/70",
    };

    return (
        <motion.svg
            viewBox="0 0 40 40"
            className={`w-6 h-6 ${className}`}
            fill="none"
            strokeLinecap="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.path
                d="M 20 5 L 20 35 M 5 20 L 35 20 M 10 10 L 30 30 M 10 30 L 30 10"
                variants={draw}
                className={colorClasses[color as keyof typeof colorClasses] || colorClasses.amber}
                strokeWidth="2"
            />
        </motion.svg>
    );
};

// Curved underline
export const UnderlineDoodle = ({ className = "" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 200 20"
        className={`w-32 h-4 ${className}`}
        fill="none"
        strokeLinecap="round"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.path
            d="M 5 10 Q 50 18, 100 10 Q 150 2, 195 10"
            variants={draw}
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth="2"
        />
    </motion.svg>
);

// Small flower doodle
export const FlowerDoodle = ({ className = "" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 40 40"
        className={`w-6 h-6 ${className}`}
        fill="none"
        strokeLinecap="round"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.path
            d="M 20 8 Q 15 15, 20 20 Q 25 15, 20 8 
               M 32 20 Q 25 15, 20 20 Q 25 25, 32 20
               M 20 32 Q 25 25, 20 20 Q 15 25, 20 32
               M 8 20 Q 15 25, 20 20 Q 15 15, 8 20"
            variants={draw}
            className="stroke-pink-400/70 dark:stroke-pink-400/70"
            strokeWidth="1.5"
        />
        <motion.circle
            cx="20" cy="20" r="4"
            className="fill-amber-400/70"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.7, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            viewport={{ once: true }}
        />
    </motion.svg>
);

// Swirl/flourish decoration
export const SwirlDoodle = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
    <motion.svg
        viewBox="0 0 60 30"
        className={`w-10 h-5 ${flip ? "scale-x-[-1]" : ""} ${className}`}
        fill="none"
        strokeLinecap="round"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.path
            d="M 5 25 Q 20 5, 40 15 Q 55 22, 55 10"
            variants={draw}
            className="stroke-gray-400/60 dark:stroke-gray-500/60"
            strokeWidth="2"
        />
    </motion.svg>
);

// Bracket doodle for "toolkit"
export const BracketDoodle = ({ className = "", side = "left" }: { className?: string; side?: "left" | "right" }) => (
    <motion.svg
        viewBox="0 0 30 60"
        className={`w-4 h-10 ${className}`}
        fill="none"
        strokeLinecap="round"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        {side === "left" ? (
            <motion.path
                d="M 25 5 Q 10 5, 10 20 L 10 25 Q 10 30, 5 30 Q 10 30, 10 35 L 10 40 Q 10 55, 25 55"
                variants={draw}
                className="stroke-violet-400/60 dark:stroke-violet-400/60"
                strokeWidth="2"
            />
        ) : (
            <motion.path
                d="M 5 5 Q 20 5, 20 20 L 20 25 Q 20 30, 25 30 Q 20 30, 20 35 L 20 40 Q 20 55, 5 55"
                variants={draw}
                className="stroke-violet-400/60 dark:stroke-violet-400/60"
                strokeWidth="2"
            />
        )}
    </motion.svg>
);
