"use client";

import { motion, useReducedMotion } from "framer-motion";

function FlowerShape({ petalColor, centerColor }: { petalColor: string; centerColor: string }) {
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
            <path
                d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                fill={petalColor}
            />
            <circle cx="50" cy="50" r="12" fill={centerColor} />
        </svg>
    );
}

// Pre-generated flower pattern (10 columns x 5 rows)
const flowerPattern = [
    // Row 1
    { petal: "#EC4899", center: "#FBBF24" },
    { petal: "#FBBF24", center: "#3B82F6" },
    { petal: "#3B82F6", center: "#1E3A8A" },
    { petal: "#EC4899", center: "#FFFFFF" },
    { petal: "#EF4444", center: "#FBBF24" },
    { petal: "#FBBF24", center: "#EC4899" },
    { petal: "#7DD3FC", center: "#3B82F6" },
    { petal: "#EC4899", center: "#FFFFFF" },
    { petal: "#EF4444", center: "#3B82F6" },
    { petal: "#3B82F6", center: "#1E3A8A" },
    // Row 2
    { petal: "#7DD3FC", center: "#EF4444" },
    { petal: "#EC4899", center: "#FBBF24" },
    { petal: "#EF4444", center: "#7DD3FC" },
    { petal: "#FBBF24", center: "#EC4899" },
    { petal: "#3B82F6", center: "#FFFFFF" },
    { petal: "#7DD3FC", center: "#3B82F6" },
    { petal: "#EF4444", center: "#FBBF24" },
    { petal: "#FBBF24", center: "#3B82F6" },
    { petal: "#EC4899", center: "#FBBF24" },
    { petal: "#3B82F6", center: "#1E3A8A" },
    // Row 3
    { petal: "#EF4444", center: "#7DD3FC" },
    { petal: "#FBBF24", center: "#EC4899" },
    { petal: "#3B82F6", center: "#FFFFFF" },
    { petal: "#EC4899", center: "#3B82F6" },
    { petal: "#3B82F6", center: "#1E3A8A" },
    { petal: "#7DD3FC", center: "#FFFFFF" },
    { petal: "#EF4444", center: "#FBBF24" },
    { petal: "#FBBF24", center: "#3B82F6" },
    { petal: "#EC4899", center: "#FFFFFF" },
    { petal: "#3B82F6", center: "#EF4444" },
    // Row 4
    { petal: "#EC4899", center: "#FBBF24" },
    { petal: "#EF4444", center: "#3B82F6" },
    { petal: "#FBBF24", center: "#FFFFFF" },
    { petal: "#3B82F6", center: "#1E3A8A" },
    { petal: "#EC4899", center: "#FBBF24" },
    { petal: "#EF4444", center: "#7DD3FC" },
    { petal: "#7DD3FC", center: "#EC4899" },
    { petal: "#FBBF24", center: "#EF4444" },
    { petal: "#3B82F6", center: "#FFFFFF" },
    { petal: "#EC4899", center: "#3B82F6" },
    // Row 5
    { petal: "#FBBF24", center: "#3B82F6" },
    { petal: "#EC4899", center: "#FBBF24" },
    { petal: "#EF4444", center: "#FBBF24" },
    { petal: "#3B82F6", center: "#FFFFFF" },
    { petal: "#7DD3FC", center: "#EF4444" },
    { petal: "#EC4899", center: "#FFFFFF" },
    { petal: "#FBBF24", center: "#EC4899" },
    { petal: "#EF4444", center: "#7DD3FC" },
    { petal: "#7DD3FC", center: "#3B82F6" },
    { petal: "#3B82F6", center: "#1E3A8A" },
];

export function FlowerGarden() {
    const shouldReduceMotion = useReducedMotion();
    const cols = 10;

    // Calculate center positions to skip (for text area)
    const centerPositions = [24, 25];

    return (
        <section className="w-full py-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Flower grid */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-0 relative">
                {flowerPattern.map((flower, index) => {
                    const isCenter = centerPositions.includes(index);

                    if (isCenter) {
                        return (
                            <div key={index} className="aspect-square p-1 md:p-2" />
                        );
                    }

                    return (
                        <motion.div
                            key={index}
                            className="aspect-square p-1 md:p-2"
                            initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            whileHover={{
                                rotate: 360,
                                scale: 1.2,
                                transition: { duration: 0.5, ease: "easeOut" }
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                delay: (index % cols) * 0.03 + Math.floor(index / cols) * 0.1,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200,
                            }}
                        >
                            <FlowerShape petalColor={flower.petal} centerColor={flower.center} />
                        </motion.div>
                    );
                })}

                {/* Center quote overlay */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className="text-center text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium">
                        The best code is invisible—<br />
                        it just works.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
