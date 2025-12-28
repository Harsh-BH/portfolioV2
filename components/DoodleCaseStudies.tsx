"use client";

import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: i * 0.2, type: "spring", duration: 2, bounce: 0 },
            opacity: { delay: i * 0.2, duration: 0.4 }
        }
    })
};

const fadeIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" }
    })
};

export const DoodleCaseStudies = () => {
    return (
        <>
            {/* LEFT SIDE DOODLES - Technical/Geometric Theme */}
            <div className="absolute -left-56 top-10 w-52 h-full pointer-events-none z-0 hidden 2xl:block">
                <motion.svg
                    viewBox="0 0 220 1100"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Elegant code bracket { */}
                    <motion.path
                        d="M 140 30 C 100 30, 100 60, 100 90 
                           L 100 180 C 100 200, 80 210, 60 210 
                           C 80 210, 100 220, 100 240 
                           L 100 330 C 100 360, 100 390, 140 390"
                        variants={draw}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-violet-600 dark:stroke-violet-400/50"
                        strokeWidth="3.5"
                    />

                    {/* Circuit board pattern */}
                    <motion.path
                        d="M 60 480 L 110 480 L 110 530 L 160 530 L 160 580 L 110 580 L 110 630 L 60 630"
                        variants={draw}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-cyan-600 dark:stroke-cyan-400/50"
                        strokeWidth="2.5"
                    />
                    {/* Circuit nodes */}
                    <motion.circle cx="110" cy="530" r="8" className="fill-cyan-500 dark:fill-cyan-400/60"
                        variants={fadeIn} custom={1.3} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="110" cy="580" r="8" className="fill-cyan-500 dark:fill-cyan-400/60"
                        variants={fadeIn} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Hexagon */}
                    <motion.path
                        d="M 110 720 L 150 745 L 150 795 L 110 820 L 70 795 L 70 745 Z"
                        variants={draw}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-600 dark:stroke-amber-400/50"
                        strokeWidth="3"
                    />
                    <motion.circle cx="110" cy="770" r="6" className="fill-amber-500 dark:fill-amber-400/60"
                        variants={fadeIn} custom={2.3} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Plus symbols */}
                    <motion.path
                        d="M 60 900 L 60 960 M 30 930 L 90 930"
                        variants={draw}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-emerald-600 dark:stroke-emerald-400/50"
                        strokeWidth="4"
                    />
                    <motion.path
                        d="M 140 950 L 140 990 M 120 970 L 160 970"
                        variants={draw}
                        custom={3.3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-emerald-500 dark:stroke-emerald-400/40"
                        strokeWidth="3"
                    />

                    {/* Decorative dots trail */}
                    <motion.circle cx="170" cy="1020" r="5" className="fill-gray-600 dark:fill-gray-500/50"
                        variants={fadeIn} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="170" cy="1050" r="5" className="fill-gray-600 dark:fill-gray-500/50"
                        variants={fadeIn} custom={4.1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="170" cy="1080" r="5" className="fill-gray-600 dark:fill-gray-500/50"
                        variants={fadeIn} custom={4.2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                </motion.svg>
            </div>

            {/* RIGHT SIDE DOODLES */}
            <div className="absolute -right-56 top-10 w-52 h-full pointer-events-none z-0 hidden 2xl:block">
                <motion.svg
                    viewBox="0 0 220 1100"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Gear/Cog */}
                    <motion.path
                        d="M 100 50 L 100 30 L 120 30 L 120 50
                           M 140 70 L 160 55 L 175 75 L 155 90
                           M 155 120 L 175 135 L 160 155 L 140 140
                           M 120 160 L 120 180 L 100 180 L 100 160
                           M 80 140 L 60 155 L 45 135 L 65 120
                           M 65 90 L 45 75 L 60 55 L 80 70"
                        variants={draw}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-blue-600 dark:stroke-blue-400/50"
                        strokeWidth="2.5"
                    />
                    <motion.circle cx="110" cy="105" r="30"
                        variants={draw} custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-blue-600 dark:stroke-blue-400/50" strokeWidth="2.5" />
                    <motion.circle cx="110" cy="105" r="12" className="fill-blue-500/50 dark:fill-blue-400/30"
                        variants={fadeIn} custom={0.7} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Chart/Graph */}
                    <motion.path
                        d="M 40 320 L 40 420 L 180 420"
                        variants={draw}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-600 dark:stroke-gray-500/50"
                        strokeWidth="3"
                    />
                    <motion.path
                        d="M 55 400 L 80 360 L 110 380 L 140 320 L 165 340"
                        variants={draw}
                        custom={1.5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-emerald-600 dark:stroke-emerald-400/50"
                        strokeWidth="3.5"
                    />
                    {/* Graph points */}
                    <motion.circle cx="80" cy="360" r="5" className="fill-emerald-500 dark:fill-emerald-400/60"
                        variants={fadeIn} custom={1.7} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="140" cy="320" r="5" className="fill-emerald-500 dark:fill-emerald-400/60"
                        variants={fadeIn} custom={1.9} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Lightning bolt */}
                    <motion.path
                        d="M 130 500 L 95 560 L 120 560 L 85 630 L 115 565 L 90 565 L 130 500"
                        variants={draw}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-600 dark:stroke-amber-400/50"
                        strokeWidth="3"
                    />

                    {/* Code bracket } */}
                    <motion.path
                        d="M 60 720 C 100 720, 100 750, 100 780 
                           L 100 870 C 100 890, 120 900, 140 900 
                           C 120 900, 100 910, 100 930 
                           L 100 1020 C 100 1050, 100 1080, 60 1080"
                        variants={draw}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-violet-600 dark:stroke-violet-400/50"
                        strokeWidth="3.5"
                    />
                </motion.svg>
            </div>
        </>
    );
};
