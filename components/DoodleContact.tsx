"use client";

import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: i * 0.15, type: "spring", duration: 1.5, bounce: 0 },
            opacity: { delay: i * 0.15, duration: 0.3 }
        }
    })
};

const fadeIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" }
    })
};

export const DoodleContact = () => {
    return (
        <>
            {/* LEFT SIDE DOODLES */}
            <div className="absolute left-8 md:left-16 lg:left-24 xl:left-32 top-1/2 -translate-y-1/2 w-44 md:w-60 h-[450px] pointer-events-none z-0 hidden lg:block">
                <motion.svg
                    viewBox="0 0 250 500"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Elegant curved arrow */}
                    <motion.path
                        d="M 40 80 C 80 60, 140 100, 200 80 C 220 75, 235 90, 230 110"
                        variants={draw}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-700 dark:stroke-gray-400/50"
                        strokeWidth="3"
                    />
                    <motion.path
                        d="M 230 110 L 218 95 M 230 110 L 242 100"
                        variants={draw}
                        custom={0.4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-700 dark:stroke-gray-400/50"
                        strokeWidth="3"
                    />

                    {/* Beautiful multi-petal flower */}
                    <motion.path
                        d="M 80 200 C 60 180, 70 155, 80 170 C 90 155, 100 180, 80 200
                           M 80 200 C 100 190, 115 195, 100 200 C 115 205, 100 210, 80 200
                           M 80 200 C 100 220, 90 245, 80 230 C 70 245, 60 220, 80 200
                           M 80 200 C 60 210, 45 205, 60 200 C 45 195, 60 190, 80 200"
                        variants={draw}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-pink-500 dark:stroke-pink-400/50"
                        strokeWidth="2.5"
                    />
                    <motion.circle cx="80" cy="200" r="10"
                        className="fill-amber-500 dark:fill-amber-400/60"
                        variants={fadeIn} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Starburst */}
                    <motion.path
                        d="M 180 280 L 180 240 M 180 280 L 180 320
                           M 180 280 L 145 280 M 180 280 L 215 280
                           M 180 280 L 155 255 M 180 280 L 205 305
                           M 180 280 L 205 255 M 180 280 L 155 305"
                        variants={draw}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-500 dark:stroke-amber-400/50"
                        strokeWidth="3"
                    />

                    {/* Swirly flourish */}
                    <motion.path
                        d="M 30 380 C 60 350, 100 380, 80 410 C 60 440, 100 460, 140 430 C 160 410, 180 430, 200 420"
                        variants={draw}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-600 dark:stroke-gray-500/50"
                        strokeWidth="2.5"
                    />

                    {/* Decorative dots */}
                    <motion.circle cx="200" cy="170" r="6" className="fill-cyan-500 dark:fill-cyan-400/50"
                        variants={fadeIn} custom={2.5} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="220" cy="190" r="4" className="fill-cyan-600 dark:fill-cyan-400/40"
                        variants={fadeIn} custom={2.7} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="210" cy="210" r="5" className="fill-cyan-500 dark:fill-cyan-400/50"
                        variants={fadeIn} custom={2.9} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                </motion.svg>
            </div>

            {/* RIGHT SIDE DOODLES */}
            <div className="absolute right-8 md:right-16 lg:right-24 xl:right-32 top-1/2 -translate-y-1/2 w-44 md:w-60 h-[450px] pointer-events-none z-0 hidden lg:block">
                <motion.svg
                    viewBox="0 0 250 500"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Elegant curved arrow (mirror) */}
                    <motion.path
                        d="M 210 80 C 170 60, 110 100, 50 80 C 30 75, 15 90, 20 110"
                        variants={draw}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-700 dark:stroke-gray-400/50"
                        strokeWidth="3"
                    />
                    <motion.path
                        d="M 20 110 L 32 95 M 20 110 L 8 100"
                        variants={draw}
                        custom={0.4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-700 dark:stroke-gray-400/50"
                        strokeWidth="3"
                    />

                    {/* Floating circles */}
                    <motion.circle cx="180" cy="160" r="25"
                        variants={draw} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-violet-500 dark:stroke-violet-400/50" strokeWidth="2.5" />
                    <motion.circle cx="200" cy="210" r="15"
                        variants={draw} custom={1.3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-violet-600 dark:stroke-violet-400/40" strokeWidth="2" />
                    <motion.circle cx="165" cy="220" r="8"
                        variants={draw} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-violet-500 dark:stroke-violet-400/50" strokeWidth="2" />

                    {/* Beautiful flower */}
                    <motion.path
                        d="M 70 320 C 50 300, 60 275, 70 290 C 80 275, 90 300, 70 320
                           M 70 320 C 90 310, 105 315, 90 320 C 105 325, 90 330, 70 320
                           M 70 320 C 90 340, 80 365, 70 350 C 60 365, 50 340, 70 320
                           M 70 320 C 50 330, 35 325, 50 320 C 35 315, 50 310, 70 320"
                        variants={draw}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-rose-500 dark:stroke-rose-400/50"
                        strokeWidth="2.5"
                    />
                    <motion.circle cx="70" cy="320" r="10"
                        className="fill-amber-500 dark:fill-amber-400/60"
                        variants={fadeIn} custom={2.5} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Flowing wave */}
                    <motion.path
                        d="M 20 420 Q 80 380, 140 420 Q 200 460, 240 420"
                        variants={draw}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-cyan-500 dark:stroke-cyan-400/50"
                        strokeWidth="3"
                    />

                    {/* Small sparkle */}
                    <motion.path
                        d="M 50 180 L 50 160 M 40 170 L 60 170"
                        variants={draw}
                        custom={1.8}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-500 dark:stroke-amber-400/50"
                        strokeWidth="2.5"
                    />
                </motion.svg>
            </div>
        </>
    );
};
