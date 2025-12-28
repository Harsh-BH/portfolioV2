"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Color presets for the cursor
const colorPresets = [
    { name: "Sunny", petal: "#FBBF24", center: "#EC4899" },
    { name: "Ocean", petal: "#3B82F6", center: "#1E3A8A" },
    { name: "Rose", petal: "#EC4899", center: "#FBBF24" },
    { name: "Fire", petal: "#EF4444", center: "#FBBF24" },
    { name: "Sky", petal: "#7DD3FC", center: "#3B82F6" },
    { name: "Purple", petal: "#8B5CF6", center: "#EC4899" },
    { name: "Mint", petal: "#10B981", center: "#FFFFFF" },
];

export function FlowerCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colorPresets[0]);
    const shouldReduceMotion = useReducedMotion();

    // Use motion values for smooth animation
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring config (fixed - no slider needed)
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (shouldReduceMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [shouldReduceMotion, cursorX, cursorY]);

    if (shouldReduceMotion) return null;

    return (
        <>
            {/* Settings Panel - Top Left */}
            <div className="fixed top-4 left-4 z-[9998]" style={{ cursor: 'default' }}>
                <motion.button
                    onClick={() => setShowSettings(!showSettings)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                    style={{ cursor: 'pointer' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    aria-label="Cursor color"
                >
                    <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 100 100"
                        animate={{ rotate: showSettings ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <path
                            d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                            fill={selectedColor.petal}
                        />
                        <circle cx="50" cy="50" r="12" fill={selectedColor.center} />
                    </motion.svg>
                </motion.button>

                <AnimatePresence>
                    {showSettings && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute top-14 left-0 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 pointer-events-auto"
                            style={{ cursor: 'default' }}
                        >
                            <h3 className="font-display text-sm text-gray-900 dark:text-white mb-3">
                                Cursor Color
                            </h3>

                            {/* Color Selection */}
                            <div className="grid grid-cols-7 gap-1.5">
                                {colorPresets.map((color) => (
                                    <motion.button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-5 h-5 rounded-full ${selectedColor.name === color.name
                                                ? "ring-2 ring-offset-2 ring-gray-400"
                                                : ""
                                            }`}
                                        style={{ backgroundColor: color.petal, cursor: 'pointer' }}
                                        title={color.name}
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Flower Cursor */}
            {isVisible && (
                <motion.div
                    className="fixed pointer-events-none z-[9999]"
                    style={{
                        left: 0,
                        top: 0,
                        x: smoothX,
                        y: smoothY,
                    }}
                >
                    <motion.svg
                        width="32"
                        height="32"
                        viewBox="0 0 100 100"
                        className="drop-shadow-md"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <path
                            d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                            fill={selectedColor.petal}
                        />
                        <circle cx="50" cy="50" r="12" fill={selectedColor.center} />
                    </motion.svg>
                </motion.div>
            )}
        </>
    );
}
