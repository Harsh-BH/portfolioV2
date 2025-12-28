"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionWrapper } from "@/components/MotionWrapper";
import { FlowerMedal, FlowerIcon, flowerThemes, FlowerBloom } from "@/components/Flower";
import { DoodleCaseStudies } from "@/components/DoodleCaseStudies";
import { BracketDoodle, SparkleDoodle, UnderlineDoodle } from "@/components/HeadingDoodles";

export function CaseStudies() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="experience" className="w-full px-4 md:px-8 py-20 max-w-6xl mx-auto relative">
            {/* Animated doodle decorations */}
            <DoodleCaseStudies />

            {/* Section header */}
            <MotionWrapper className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <BracketDoodle side="left" className="hidden md:block" />
                    <div className="flex items-center gap-2">
                        <SparkleDoodle color="violet" className="hidden md:block" />
                        <h2 className="font-display text-5xl md:text-6xl text-gray-900 dark:text-white">
                            The toolkit I wield
                        </h2>
                        <SparkleDoodle color="amber" className="hidden md:block" />
                    </div>
                    <BracketDoodle side="right" className="hidden md:block" />
                </div>
                <UnderlineDoodle className="mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-lg font-light max-w-xl mx-auto">
                    Languages I speak fluently, and the battles I&apos;ve won
                </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left column */}
                <div className="md:col-span-5 flex flex-col gap-6">
                    {/* Programming Languages */}
                    <MotionWrapper delay={0.1}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-gray-500/5 via-transparent to-gray-500/5
                                border border-gray-300/30 dark:border-gray-700/30
                                hover:border-gray-400/50 dark:hover:border-gray-600/50 
                                hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <h3 className="font-display text-xl text-gray-900 dark:text-white mb-4">
                                Programming Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { name: "C++", gradient: "from-blue-500/20 to-blue-600/20", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30" },
                                    { name: "Python", gradient: "from-emerald-500/20 to-teal-500/20", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/30" },
                                    { name: "TypeScript", gradient: "from-sky-500/20 to-blue-500/20", text: "text-sky-600 dark:text-sky-400", border: "border-sky-500/30" },
                                    { name: "JavaScript", gradient: "from-amber-500/20 to-yellow-500/20", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30" },
                                    { name: "Java", gradient: "from-orange-500/20 to-red-500/20", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/30" },
                                    { name: "Solidity", gradient: "from-violet-500/20 to-purple-500/20", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/30" },
                                    { name: "Rust", gradient: "from-rose-500/20 to-red-500/20", text: "text-rose-600 dark:text-rose-400", border: "border-rose-500/30" },
                                    { name: "SQL", gradient: "from-cyan-500/20 to-blue-500/20", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30" },
                                ].map((lang) => (
                                    <span
                                        key={lang.name}
                                        className={`px-4 py-2 bg-gradient-to-r ${lang.gradient} ${lang.text} rounded-full text-sm font-medium border ${lang.border}`}
                                    >
                                        {lang.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </MotionWrapper>

                    {/* Competitive Programming */}
                    <MotionWrapper delay={0.2}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-violet-500/10
                                border border-blue-500/20
                                hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-colors" />

                            {/* Decorative flower bloom */}
                            <FlowerBloom
                                petalColor={flowerThemes.blue.petal}
                                centerColor={flowerThemes.blue.center}
                                className="-right-16 -top-16"
                            />

                            <h3 className="font-display text-xl text-blue-600 dark:text-blue-400 mb-4">
                                Competitive Programming
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                                    <span className="text-gray-600 dark:text-gray-400">Codeforces</span>
                                    <span className="font-display text-blue-600 dark:text-blue-400">1606 <span className="text-gray-500 text-sm">(Expert)</span></span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                                    <span className="text-gray-600 dark:text-gray-400">AtCoder</span>
                                    <span className="font-display text-blue-600 dark:text-blue-400">1418</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-600 dark:text-gray-400">JEE Advanced</span>
                                    <span className="font-display text-blue-600 dark:text-blue-400">AIR 4944</span>
                                </div>
                            </div>
                        </motion.div>
                    </MotionWrapper>

                    {/* Frameworks */}
                    <MotionWrapper delay={0.3}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-gray-500/5 via-transparent to-gray-500/5
                                border border-gray-300/30 dark:border-gray-700/30
                                hover:border-gray-400/50 dark:hover:border-gray-600/50 
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <h3 className="font-display text-xl text-gray-900 dark:text-white mb-4">
                                Frameworks & Libraries
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Node.js", "Express", "PyTorch", "TensorFlow", "LangChain", "HuggingFace"].map((fw) => (
                                    <span
                                        key={fw}
                                        className="px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-full text-sm border border-gray-200/50 dark:border-gray-700/50"
                                    >
                                        {fw}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </MotionWrapper>

                    {/* Tools */}
                    <MotionWrapper delay={0.4}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-gray-500/5 via-transparent to-gray-500/5
                                border border-gray-300/30 dark:border-gray-700/30
                                hover:border-gray-400/50 dark:hover:border-gray-600/50 
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <h3 className="font-display text-xl text-gray-900 dark:text-white mb-4">
                                Tools & Platforms
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Docker", "Git", "AWS", "Firebase", "Vercel", "PostgreSQL", "MongoDB", "Hardhat"].map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-full text-sm border border-gray-200/50 dark:border-gray-700/50"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </MotionWrapper>
                </div>

                {/* Right column */}
                <div className="md:col-span-7 flex flex-col gap-6">
                    {/* Education */}
                    <MotionWrapper delay={0.1}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-rose-500/10 via-red-500/5 to-orange-500/10
                                border border-rose-500/20
                                hover:border-rose-500/50 hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/15 rounded-full blur-2xl group-hover:bg-rose-500/25 transition-colors" />

                            {/* Decorative flower bloom */}
                            <FlowerBloom
                                petalColor={flowerThemes.rose.petal}
                                centerColor={flowerThemes.rose.center}
                                className="-right-16 -top-16"
                            />

                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-full">
                                Education
                            </span>
                            <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                IIT Kharagpur
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">B.Tech (Hons.) in Chemical Engineering</p>
                            <p className="text-gray-500 text-sm mt-1">2023 - 2027 • CGPA: 8.63/10</p>
                        </motion.div>
                    </MotionWrapper>

                    {/* Awards */}
                    <MotionWrapper delay={0.2}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-orange-500/10
                                border border-amber-500/20
                                hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl group-hover:bg-amber-500/25 transition-colors" />

                            {/* Decorative flower bloom */}
                            <FlowerBloom
                                petalColor={flowerThemes.amber.petal}
                                centerColor={flowerThemes.amber.center}
                                className="-left-16 -top-16"
                            />

                            <h3 className="font-display text-xl text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2">
                                <FlowerIcon petalColor={flowerThemes.amber.petal} centerColor={flowerThemes.amber.center} />
                                Awards & Hackathons
                            </h3>
                            <div className="space-y-2">
                                {[
                                    { type: "gold" as const, text: "Gold - Inter IIT Tech Meet 13.0", highlight: true },
                                    { type: "gold" as const, text: "Global Creative Prize - WalletConnect", highlight: false },
                                    { type: "gold" as const, text: "Quadratic Prize - Coinbase", highlight: false },
                                    { type: "silver" as const, text: "Top 3 - ScrollHacks Hackathon", highlight: false },
                                ].map((award, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors
                                            ${award.highlight
                                                ? "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30"
                                                : "bg-amber-500/5 border border-amber-500/10 hover:bg-amber-500/10"
                                            }`}
                                    >
                                        <FlowerMedal type={award.type} className="flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{award.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </MotionWrapper>

                    {/* Clubs */}
                    <MotionWrapper delay={0.3}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-blue-500/10
                                border border-cyan-500/20
                                hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-colors" />

                            {/* Decorative flower bloom */}
                            <FlowerBloom
                                petalColor={flowerThemes.cyan.petal}
                                centerColor={flowerThemes.cyan.center}
                                className="-right-16 -bottom-16"
                            />

                            <h3 className="font-display text-xl text-cyan-600 dark:text-cyan-400 mb-4">
                                Clubs & Societies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Quant Club", "Blockchain Society", "Film Society", "Pravah", "Comedy Club"].map((club) => (
                                    <span
                                        key={club}
                                        className="px-4 py-2 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                                    >
                                        {club}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </MotionWrapper>

                    {/* Cultural */}
                    <MotionWrapper delay={0.4}>
                        <motion.div
                            className="group relative overflow-hidden rounded-3xl p-7
                                bg-gradient-to-br from-fuchsia-500/10 via-pink-500/5 to-rose-500/10
                                border border-fuchsia-500/20
                                hover:border-fuchsia-500/50 hover:shadow-[0_0_40px_rgba(217,70,239,0.15)]
                                transition-all duration-500"
                            whileHover={shouldReduceMotion ? {} : { y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute -top-10 -right-10 w-28 h-28 bg-fuchsia-500/15 rounded-full blur-2xl group-hover:bg-fuchsia-500/25 transition-colors" />

                            {/* Decorative flower bloom */}
                            <FlowerBloom
                                petalColor={flowerThemes.fuchsia.petal}
                                centerColor={flowerThemes.fuchsia.center}
                                className="-right-16 -top-16"
                            />

                            <h3 className="font-display text-xl text-fuchsia-600 dark:text-fuchsia-400 mb-4 flex items-center gap-2">
                                <FlowerIcon petalColor={flowerThemes.fuchsia.petal} centerColor={flowerThemes.fuchsia.center} />
                                Cultural Achievements
                            </h3>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { text: "Inter-IIT Street Play", medal: "gold" as const },
                                    { text: "Spring Fest Street Play", medal: "gold" as const },
                                    { text: "Short Film Making", medal: "silver" as const },
                                    { text: "Standup Comedy", medal: "silver" as const },
                                ].map((achievement, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-2.5 bg-fuchsia-500/10 rounded-xl text-gray-700 dark:text-gray-300 text-sm border border-fuchsia-500/20"
                                    >
                                        <FlowerMedal type={achievement.medal} className="flex-shrink-0" />
                                        <span>{achievement.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
