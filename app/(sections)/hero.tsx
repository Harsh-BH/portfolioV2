"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BlueFlower, RedFlower, HeroIcon, CameraIcon } from "@/components/DecorativeSVG";
import { HoverScale } from "@/components/MotionWrapper";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main className="relative w-full min-h-[90vh] flex flex-col items-center pt-10 pb-20 overflow-hidden">
            {/* Left decorative flower */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-90 z-0 hidden lg:block">
                <BlueFlower className="w-full h-full" />
            </div>

            {/* Right decorative flower */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-90 z-0 hidden lg:block">
                <RedFlower className="w-full h-full" />
            </div>

            {/* Hero content */}
            <motion.div
                className="relative z-10 flex flex-col items-center max-w-3xl px-6 text-center mt-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Crown icon */}
                <motion.div className="mb-4 text-primary" variants={itemVariants}>
                    <HeroIcon />
                </motion.div>

                {/* Intro text */}
                <motion.p
                    className="text-sm font-medium uppercase tracking-wide text-gray-700 dark:text-gray-300 mb-4"
                    variants={itemVariants}
                >
                    Hi, I&apos;m Harsh Bhatt
                </motion.p>

                {/* Main heading */}
                <motion.h1
                    className="text-5xl md:text-7xl font-display text-gray-900 dark:text-white mb-8 leading-tight"
                    variants={itemVariants}
                >
                    I build things that<br />
                    think, learn & scale <br />
                    <span className="italic font-light">beautifully</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
                    variants={itemVariants}
                >
                    From quantum circuits to neural networks, I craft code that pushes boundaries. Currently exploring the intersection of AI and the impossible at IIT Kharagpur.
                </motion.p>

                {/* Divider */}
                <motion.div
                    className="w-full max-w-md border-t border-dashed border-gray-300 dark:border-gray-700 mb-10"
                    variants={itemVariants}
                />

                {/* CTA Button */}
                <motion.div variants={itemVariants}>
                    <HoverScale>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform duration-200"
                        >
                            Get in touch
                        </a>
                    </HoverScale>
                </motion.div>
            </motion.div>

            {/* Digital home section */}
            <motion.div
                className="mt-24 md:mt-32 flex flex-col items-center relative z-10"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
            >
                <motion.div
                    className="text-primary mb-4 cursor-pointer"
                    whileHover={shouldReduceMotion ? {} : { rotate: 12 }}
                    transition={{ duration: 0.3 }}
                >
                    <CameraIcon />
                </motion.div>
                <h2 className="font-display text-3xl md:text-4xl text-gray-800 dark:text-gray-200">
                    Step into my digital home
                </h2>
            </motion.div>
        </main>
    );
}
