"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { FlowerBloom, FlowerMedal, flowerThemes } from "@/components/Flower";
import { DoodleBackground } from "@/components/DoodleBackground";

export function Works() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            className="w-full px-4 md:px-8 pb-20 max-w-7xl mx-auto relative"
        >
            {/* Animated doodle decorations */}
            <DoodleBackground />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {/* Card 1: ScanX */}
                <StaggerItem className="lg:row-span-2">
                    <motion.a
                        href="https://scan-x.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer h-full min-h-[420px] flex flex-col justify-between block 
                            bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10
                            border border-blue-500/20 
                            hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                            transition-all duration-500"
                        whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Corner glow effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

                        {/* Decorative flower bloom */}
                        <FlowerBloom
                            petalColor={flowerThemes.blue.petal}
                            centerColor={flowerThemes.blue.center}
                            className="-right-16 -top-16"
                        />

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                                DeepFake Detection
                            </span>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="font-display text-4xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                ScanX
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                                Blockchain-powered AI platform detecting deepfakes with 99.65% accuracy
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {["React", "AI", "Web3"].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 text-xs bg-gray-900/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Hover arrow */}
                        <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-blue-500">→</span>
                        </div>
                    </motion.a>
                </StaggerItem>

                {/* Card 2: Gold Medal */}
                <StaggerItem>
                    <motion.div
                        className="group relative overflow-hidden rounded-3xl p-6 cursor-pointer h-full min-h-[200px] flex flex-col justify-center items-center text-center
                            bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-orange-500/10
                            border border-amber-500/20
                            hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]
                            transition-all duration-500"
                        whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-colors" />

                        {/* Golden flower bloom background */}
                        <FlowerBloom
                            petalColor={flowerThemes.amber.petal}
                            centerColor={flowerThemes.amber.center}
                            className="-right-12 -top-12"
                        />

                        {/* Golden flower medal replacing 🥇 emoji */}
                        <FlowerMedal type="gold" className="mb-3" />
                        <h3 className="font-display text-2xl text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            Gold Medal
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Inter IIT Tech Meet 13.0</p>

                        <span className="mt-3 px-4 py-1.5 text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full border border-amber-500/30">
                            MAE 112.9
                        </span>
                    </motion.div>
                </StaggerItem>

                {/* Card 3: wiZe */}
                <StaggerItem>
                    <motion.a
                        href="https://wize.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-3xl p-6 cursor-pointer h-full min-h-[200px] flex flex-col justify-center items-center text-center block
                            bg-gradient-to-br from-cyan-500/10 via-transparent to-sky-500/10
                            border border-cyan-500/20
                            hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
                            transition-all duration-500"
                        whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors" />

                        {/* Decorative flower bloom */}
                        <FlowerBloom
                            petalColor={flowerThemes.cyan.petal}
                            centerColor={flowerThemes.cyan.center}
                            className="-left-12 -top-12"
                        />

                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-display text-xl mb-3 shadow-lg shadow-cyan-500/25 relative z-10">
                            W
                        </div>
                        <h3 className="font-display text-xl text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            wiZe
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Full Stack Developer</p>

                        <span className="mt-3 px-4 py-1.5 text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-500/30">
                            7.3K+ users
                        </span>
                    </motion.a>
                </StaggerItem>

                {/* Card 4: Quantum Research */}
                <StaggerItem className="lg:col-span-2">
                    <motion.div
                        className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer h-full min-h-[220px] flex items-center
                            bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-pink-500/10
                            border border-fuchsia-500/20
                            hover:border-fuchsia-500/50 hover:shadow-[0_0_40px_rgba(217,70,239,0.15)]
                            transition-all duration-500"
                        whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="absolute -top-20 -right-20 w-48 h-48 bg-fuchsia-500/15 rounded-full blur-3xl group-hover:bg-fuchsia-500/25 transition-colors" />
                        <div className="absolute -bottom-10 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

                        {/* Decorative flower bloom */}
                        <FlowerBloom
                            petalColor={flowerThemes.fuchsia.petal}
                            centerColor={flowerThemes.fuchsia.center}
                            className="-right-16 -top-16"
                        />

                        <div className="relative z-10 max-w-md">
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full backdrop-blur-sm">
                                Research Intern
                            </span>
                            <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                                Deakin University
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                Quantum classifier achieving 100% accuracy using amplitude encoding
                            </p>
                            <div className="flex gap-2">
                                {["IBM Quantum", "QML"].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 text-xs bg-fuchsia-500/10 text-fuchsia-500 rounded-full border border-fuchsia-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </StaggerItem>

                {/* Card 5: TradeGAN */}
                <StaggerItem className="lg:col-span-2">
                    <motion.div
                        className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer h-full min-h-[240px] flex items-center
                            bg-gradient-to-br from-rose-500/10 via-red-500/5 to-orange-500/10
                            border border-rose-500/20
                            hover:border-rose-500/50 hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]
                            transition-all duration-500"
                        whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="absolute -top-20 -left-20 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl group-hover:bg-rose-500/25 transition-colors" />
                        <div className="absolute -bottom-10 left-40 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />

                        {/* Decorative flower bloom */}
                        <FlowerBloom
                            petalColor={flowerThemes.rose.petal}
                            centerColor={flowerThemes.rose.center}
                            className="-left-16 -top-16"
                        />

                        <div className="relative z-10 max-w-lg">
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-full backdrop-blur-sm">
                                Deep Learning
                            </span>
                            <h3 className="font-display text-4xl text-gray-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                TradeGAN
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                GAN-based probabilistic forecasting. Sharpe Ratio 2.09 → 3.18
                            </p>
                            <div className="flex gap-3">
                                <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-orange-500/20 text-rose-500 rounded-full border border-rose-500/30">
                                    2.88× PnL gain
                                </span>
                                <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-orange-500/20 text-rose-500 rounded-full border border-rose-500/30">
                                    85% accuracy
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </StaggerItem>

                {/* Card 6: CV Genie */}
                <StaggerItem>
                    <motion.a
                        href="https://cv-genie.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-3xl p-7 cursor-pointer h-full min-h-[240px] flex flex-col justify-between block
                            bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10
                            border border-violet-500/20
                            hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
                            transition-all duration-500"
                        whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-colors" />

                        {/* Decorative flower bloom */}
                        <FlowerBloom
                            petalColor={flowerThemes.violet.petal}
                            centerColor={flowerThemes.violet.center}
                            className="-right-12 -top-12"
                        />

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/30 rounded-full backdrop-blur-sm">
                                Hackathon
                            </span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                CV Genie
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                AI-powered CV analysis with real-time feedback
                            </p>
                            <span className="inline-block mt-4 px-3 py-1.5 text-xs bg-violet-500/10 text-violet-500 rounded-full border border-violet-500/30">
                                15+ APIs
                            </span>
                        </div>

                        {/* Hover arrow */}
                        <div className="absolute bottom-7 right-7 w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-violet-500">→</span>
                        </div>
                    </motion.a>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}
