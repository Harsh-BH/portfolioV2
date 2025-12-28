"use client";

import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: i * 0.25, type: "spring", duration: 2, bounce: 0 },
            opacity: { delay: i * 0.25, duration: 0.5 }
        }
    })
};

const fadeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.25, duration: 0.5, ease: "easeOut" }
    })
};

export const DoodleBackground = () => {
    return (
        <>
            {/* LEFT SIDE DOODLES */}
            <div className="absolute -left-52 top-10 w-48 h-full pointer-events-none z-0 hidden 2xl:block">
                <motion.svg
                    viewBox="0 0 200 900"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Organic flowing vine with natural curves */}
                    <motion.path
                        d="M 100 30 
                           C 60 80, 140 130, 90 200 
                           C 50 260, 150 300, 100 370 
                           C 60 430, 130 490, 85 560 
                           C 50 620, 140 680, 95 750 
                           C 60 810, 120 850, 100 900"
                        variants={draw}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-500 dark:stroke-gray-600/60"
                        strokeWidth="2"
                    />

                    {/* Small leaves on vine */}
                    <motion.path
                        d="M 95 180 Q 70 160, 60 180 Q 75 190, 95 180"
                        variants={draw}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-emerald-600 dark:stroke-emerald-500/50"
                        strokeWidth="2"
                    />
                    <motion.path
                        d="M 105 350 Q 130 330, 140 355 Q 120 360, 105 350"
                        variants={draw}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-emerald-600 dark:stroke-emerald-500/50"
                        strokeWidth="2"
                    />
                    <motion.path
                        d="M 90 540 Q 60 525, 55 550 Q 70 555, 90 540"
                        variants={draw}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-emerald-600 dark:stroke-emerald-500/50"
                        strokeWidth="2"
                    />

                    {/* Soft flower - more organic petals */}
                    <motion.path
                        d="M 45 110 Q 35 90, 55 85 Q 70 100, 55 115 Q 40 130, 45 110 Z"
                        variants={draw}
                        custom={1.5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-pink-600 dark:stroke-pink-400/50"
                        strokeWidth="2.5"
                    />
                    <motion.circle cx="52" cy="102" r="6"
                        className="fill-amber-500 dark:fill-amber-400/60"
                        variants={fadeIn} custom={1.8} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Gentle sparkle/star */}
                    <motion.path
                        d="M 150 280 L 150 300 M 140 290 L 160 290 M 144 284 L 156 296 M 144 296 L 156 284"
                        variants={draw}
                        custom={2.5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-600 dark:stroke-amber-400/50"
                        strokeWidth="2.5"
                    />

                    {/* Soft swirl */}
                    <motion.path
                        d="M 40 450 C 80 440, 90 480, 50 490 C 20 498, 25 450, 55 440"
                        variants={draw}
                        custom={3.5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-500 dark:stroke-gray-600/60"
                        strokeWidth="2"
                    />

                    {/* Scattered dots - like seeds or pollen */}
                    <motion.circle cx="160" cy="420" r="5" className="fill-blue-600 dark:fill-blue-400/50"
                        variants={fadeIn} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="145" cy="438" r="3.5" className="fill-blue-500 dark:fill-blue-400/40"
                        variants={fadeIn} custom={4.2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="170" cy="450" r="4" className="fill-blue-600 dark:fill-blue-400/50"
                        variants={fadeIn} custom={4.4} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Gentle curved arrow */}
                    <motion.path
                        d="M 60 680 Q 100 660, 140 690"
                        variants={draw}
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-violet-600 dark:stroke-violet-400/50"
                        strokeWidth="2.5"
                    />
                    <motion.path
                        d="M 140 690 L 130 682 M 140 690 L 134 700"
                        variants={draw}
                        custom={5.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-violet-600 dark:stroke-violet-400/50"
                        strokeWidth="2.5"
                    />

                    {/* Small sparkle at bottom */}
                    <motion.path
                        d="M 130 800 L 130 830 M 115 815 L 145 815"
                        variants={draw}
                        custom={6}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-rose-600 dark:stroke-rose-400/50"
                        strokeWidth="2"
                    />
                </motion.svg>
            </div>

            {/* RIGHT SIDE DOODLES */}
            <div className="absolute -right-52 top-10 w-48 h-full pointer-events-none z-0 hidden 2xl:block">
                <motion.svg
                    viewBox="0 0 200 900"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Floating bubbles/circles */}
                    <motion.circle cx="140" cy="60" r="18"
                        variants={draw} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-cyan-600 dark:stroke-cyan-400/50" strokeWidth="2" />
                    <motion.circle cx="165" cy="100" r="10"
                        variants={draw} custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-cyan-500 dark:stroke-cyan-400/40" strokeWidth="2" />
                    <motion.circle cx="125" cy="115" r="6"
                        variants={draw} custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="stroke-cyan-600 dark:stroke-cyan-400/50" strokeWidth="2" />

                    {/* Organic looping line */}
                    <motion.path
                        d="M 60 180 
                           C 120 160, 140 220, 80 240 
                           C 30 260, 50 320, 100 300
                           C 150 280, 160 350, 100 370"
                        variants={draw}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-500 dark:stroke-gray-600/60"
                        strokeWidth="2"
                    />

                    {/* Soft 4-petal flower */}
                    <motion.path
                        d="M 50 450 Q 35 430, 50 415 Q 65 430, 50 450
                           M 50 450 Q 65 435, 80 450 Q 65 465, 50 450
                           M 50 450 Q 65 465, 50 485 Q 35 465, 50 450
                           M 50 450 Q 35 465, 20 450 Q 35 435, 50 450"
                        variants={draw}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-rose-600 dark:stroke-rose-400/50"
                        strokeWidth="2.5"
                    />
                    <motion.circle cx="50" cy="450" r="8"
                        className="fill-amber-500 dark:fill-amber-400/60"
                        variants={fadeIn} custom={3.3} initial="hidden" whileInView="visible" viewport={{ once: true }} />

                    {/* Gentle sparkle */}
                    <motion.path
                        d="M 150 520 L 150 545 M 137 532 L 163 532"
                        variants={draw}
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-600 dark:stroke-amber-400/50"
                        strokeWidth="3"
                    />
                    <motion.path
                        d="M 142 524 L 158 540 M 142 540 L 158 524"
                        variants={draw}
                        custom={4.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-amber-500 dark:stroke-amber-400/40"
                        strokeWidth="2"
                    />

                    {/* Wavy decorative line */}
                    <motion.path
                        d="M 30 620 Q 60 600, 90 620 Q 120 640, 150 620 Q 180 600, 190 630"
                        variants={draw}
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-gray-500 dark:stroke-gray-600/60"
                        strokeWidth="2"
                    />

                    {/* Soft spiral */}
                    <motion.path
                        d="M 120 720 
                           C 150 720, 155 750, 125 755 
                           C 100 760, 95 730, 115 725
                           C 130 722, 135 740, 120 745"
                        variants={draw}
                        custom={6}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="stroke-violet-500 dark:stroke-violet-400/50"
                        strokeWidth="2"
                    />

                    {/* Scattered dots */}
                    <motion.circle cx="80" cy="820" r="6" className="fill-pink-600 dark:fill-pink-400/50"
                        variants={fadeIn} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="105" cy="838" r="4" className="fill-pink-500 dark:fill-pink-400/40"
                        variants={fadeIn} custom={7.2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.circle cx="60" cy="850" r="5" className="fill-pink-600 dark:fill-pink-400/50"
                        variants={fadeIn} custom={7.4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                </motion.svg>
            </div>
        </>
    );
};
