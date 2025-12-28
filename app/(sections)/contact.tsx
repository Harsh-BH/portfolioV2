"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionWrapper, HoverScale } from "@/components/MotionWrapper";

export function Contact() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="contact" className="w-full px-4 md:px-8 pt-20 pb-0">
            {/* Get in touch card */}
            <MotionWrapper className="max-w-2xl mx-auto mb-20">
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    {/* Code icon */}
                    <motion.div
                        className="mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <svg
                            className="w-8 h-8 mx-auto opacity-90"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2v-2H8v-5a2 2 0 0 0-2-2 2 2 0 0 0 2-2V5h2V3H8zm8 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5h-2V3h2z" />
                        </svg>
                    </motion.div>

                    <p className="text-white/80 text-sm mb-4">Got a wild idea? Let&apos;s make it real.</p>

                    <h2 className="font-display text-4xl md:text-6xl font-medium mb-8">
                        Let&apos;s build magic
                    </h2>

                    {/* Social links */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <HoverScale scale={1.05}>
                            <a
                                href="https://github.com/harsh21112005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10"
                            >
                                GitHub
                            </a>
                        </HoverScale>
                        <HoverScale scale={1.05}>
                            <a
                                href="https://linkedin.com/in/harshbhatt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10"
                            >
                                LinkedIn
                            </a>
                        </HoverScale>
                        <HoverScale scale={1.05}>
                            <a
                                href="https://codeforces.com/profile/harsh21112005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10"
                            >
                                Codeforces
                            </a>
                        </HoverScale>
                        <HoverScale scale={1.05}>
                            <a
                                href="mailto:harsh@example.com"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-white/10"
                            >
                                Email
                            </a>
                        </HoverScale>
                    </div>
                </div>
            </MotionWrapper>
        </section>
    );
}
