"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionWrapper, HoverScale } from "@/components/MotionWrapper";
import { FlowerDoodle, SparkleDoodle, SwirlDoodle, UnderlineDoodle } from "@/components/HeadingDoodles";
import { DoodleContact } from "@/components/DoodleContact";

// Decorative flower for contact card corners
const ContactFlower = ({ className = "" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={`w-20 h-20 ${className}`}
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        whileInView={{ opacity: 0.15, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
    >
        <path
            d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
            fill="currentColor"
            className="text-white"
        />
        <circle cx="50" cy="50" r="12" fill="currentColor" className="text-white/50" />
    </motion.svg>
);

// Sparkle burst decoration
const SparklesBurst = ({ className = "" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 60 60"
        className={`w-8 h-8 ${className}`}
        fill="none"
        strokeLinecap="round"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
    >
        <path d="M30 10 L30 50 M10 30 L50 30 M15 15 L45 45 M15 45 L45 15"
            stroke="currentColor" strokeWidth="2" className="text-white" />
    </motion.svg>
);

// Heart doodle
const HeartDoodle = ({ className = "" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 50 50"
        className={`w-6 h-6 ${className}`}
        fill="none"
        strokeLinecap="round"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
    >
        <path
            d="M25 40 C25 40, 5 25, 5 15 C5 5, 15 5, 25 15 C35 5, 45 5, 45 15 C45 25, 25 40, 25 40"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white"
        />
    </motion.svg>
);

export function Contact() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="contact" className="w-full px-4 md:px-8 pt-20 pb-0 relative">
            {/* Side doodles to fill the spaces */}
            <DoodleContact />

            {/* Get in touch card */}
            <MotionWrapper className="max-w-2xl mx-auto mb-20">
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    {/* Decorative flowers in corners */}
                    <ContactFlower className="absolute -top-6 -left-6 rotate-[-20deg]" />
                    <ContactFlower className="absolute -top-6 -right-6 rotate-[20deg]" />
                    <ContactFlower className="absolute -bottom-6 -left-6 rotate-[200deg]" />
                    <ContactFlower className="absolute -bottom-6 -right-6 rotate-[160deg]" />

                    {/* Sparkles scattered in card */}
                    <SparklesBurst className="absolute top-10 left-10" />
                    <SparklesBurst className="absolute top-10 right-10" />
                    <SparklesBurst className="absolute bottom-20 left-16" />
                    <SparklesBurst className="absolute bottom-20 right-16" />

                    {/* Heart accent */}
                    <HeartDoodle className="absolute top-1/3 left-8 hidden md:block" />
                    <HeartDoodle className="absolute top-1/3 right-8 hidden md:block" />

                    {/* Main content */}
                    <div className="relative z-10">
                        {/* Flower icon instead of code brackets */}
                        <motion.div
                            className="mb-4"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <svg
                                viewBox="0 0 100 100"
                                className="w-10 h-10 mx-auto"
                            >
                                <path
                                    d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                                    fill="white"
                                    opacity="0.9"
                                />
                                <circle cx="50" cy="50" r="10" fill="white" opacity="0.5" />
                            </svg>
                        </motion.div>

                        <p className="text-white/80 text-sm mb-4">Got a wild idea? Let&apos;s make it real.</p>

                        {/* Heading with swirls */}
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <SwirlDoodle className="hidden md:block opacity-30 text-white" />
                            <h2 className="font-display text-4xl md:text-6xl font-medium">
                                Let&apos;s build magic
                            </h2>
                            <SwirlDoodle flip className="hidden md:block opacity-30 text-white" />
                        </div>

                        {/* Social links with flower bullets */}
                        <div className="flex flex-wrap justify-center gap-3">
                            <HoverScale scale={1.05}>
                                <a
                                    href="https://github.com/harsh21112005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10 flex items-center gap-2"
                                >
                                    <FlowerDoodle className="opacity-70" />
                                    GitHub
                                </a>
                            </HoverScale>
                            <HoverScale scale={1.05}>
                                <a
                                    href="https://linkedin.com/in/harshbhatt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10 flex items-center gap-2"
                                >
                                    <FlowerDoodle className="opacity-70" />
                                    LinkedIn
                                </a>
                            </HoverScale>
                            <HoverScale scale={1.05}>
                                <a
                                    href="https://codeforces.com/profile/harsh21112005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10 flex items-center gap-2"
                                >
                                    <FlowerDoodle className="opacity-70" />
                                    Codeforces
                                </a>
                            </HoverScale>
                            <HoverScale scale={1.05}>
                                <a
                                    href="mailto:harsh@example.com"
                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10 flex items-center gap-2"
                                >
                                    <FlowerDoodle className="opacity-70" />
                                    Email
                                </a>
                            </HoverScale>
                        </div>
                    </div>
                </div>
            </MotionWrapper>
        </section>
    );
}
