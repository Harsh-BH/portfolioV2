"use client";

import { motion } from "framer-motion";

interface FlowerProps {
    petalColor?: string;
    centerColor?: string;
    className?: string;
    /** Size variant for different use cases */
    variant?: "bloom" | "icon" | "medal";
    /** For medal variant: gold, silver, bronze */
    medalType?: "gold" | "silver" | "bronze";
}

// Medal color presets
const medalColors = {
    gold: { petal: "#FBBF24", center: "#FCD34D" },
    silver: { petal: "#9CA3AF", center: "#D1D5DB" },
    bronze: { petal: "#D97706", center: "#F59E0B" },
};

// Theme color presets matching the portfolio's existing flower theme
export const flowerThemes = {
    amber: { petal: "#FBBF24", center: "#EC4899" },
    blue: { petal: "#3B82F6", center: "#1E3A8A" },
    cyan: { petal: "#06B6D4", center: "#0891B2" },
    rose: { petal: "#F43F5E", center: "#FBBF24" },
    purple: { petal: "#A855F7", center: "#EC4899" },
    violet: { petal: "#8B5CF6", center: "#A78BFA" },
    fuchsia: { petal: "#D946EF", center: "#F0ABFC" },
    sky: { petal: "#7DD3FC", center: "#3B82F6" },
};

/**
 * Reusable animated flower SVG component that matches the portfolio's organic theme.
 * Used as decorative backgrounds in Bento cards and as replacements for emojis.
 */
export function Flower({
    petalColor,
    centerColor,
    className = "",
    variant = "bloom",
    medalType,
}: FlowerProps) {
    // Determine colors based on variant and props
    let finalPetalColor = petalColor;
    let finalCenterColor = centerColor;

    if (medalType && medalColors[medalType]) {
        finalPetalColor = medalColors[medalType].petal;
        finalCenterColor = medalColors[medalType].center;
    }

    // Default colors if none provided
    finalPetalColor = finalPetalColor || "#FBBF24";
    finalCenterColor = finalCenterColor || "#EC4899";

    // Size classes based on variant
    const sizeClasses = {
        bloom: "w-48 h-48", // Large background decorative flower
        icon: "w-6 h-6",   // Small inline icon
        medal: "w-10 h-10", // Medium size for medal replacements
    };

    return (
        <motion.svg
            viewBox="0 0 100 100"
            className={`${sizeClasses[variant]} ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* 4-petal flower path matching the existing theme */}
            <path
                d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                fill={finalPetalColor}
            />
            {/* Center dot */}
            <circle cx="50" cy="50" r="12" fill={finalCenterColor} />
        </motion.svg>
    );
}

/**
 * Animated flower for use as a card background decoration.
 * Rotates and scales on hover.
 */
export function FlowerBloom({
    petalColor,
    centerColor,
    className = "",
}: Omit<FlowerProps, "variant">) {
    return (
        <motion.div
            variants={{
                rest: { rotate: 0, scale: 1 },
                hover: { rotate: 45, scale: 1.2 },
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className={`absolute pointer-events-none ${className}`}
        >
            <Flower
                petalColor={petalColor}
                centerColor={centerColor}
                variant="bloom"
                className="opacity-10"
            />
        </motion.div>
    );
}

/**
 * Small spinning flower icon for inline use (replacing emojis).
 */
export function FlowerIcon({
    petalColor,
    centerColor,
    className = "",
    spin = false,
}: Omit<FlowerProps, "variant"> & { spin?: boolean }) {
    return (
        <motion.div
            className={`inline-flex ${className}`}
            animate={spin ? { rotate: 360 } : {}}
            transition={spin ? { duration: 8, repeat: Infinity, ease: "linear" } : {}}
            whileHover={{ rotate: 180, scale: 1.1 }}
        >
            <Flower
                petalColor={petalColor}
                centerColor={centerColor}
                variant="icon"
            />
        </motion.div>
    );
}

/**
 * Medal flower - used to replace 🥇🥈🥉 emojis with themed flowers.
 */
export function FlowerMedal({
    type = "gold",
    className = "",
}: { type?: "gold" | "silver" | "bronze"; className?: string }) {
    return (
        <motion.div
            className={`inline-flex ${className}`}
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <Flower variant="medal" medalType={type} />
        </motion.div>
    );
}
