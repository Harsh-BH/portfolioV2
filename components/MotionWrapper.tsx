"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number | "some" | "all";
    as?: "div" | "section" | "article" | "span" | "li" | "ul";
}

// Default fade-in-up animation
const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export function MotionWrapper({
    children,
    variants = defaultVariants,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3,
    as = "div",
}: MotionWrapperProps) {
    const shouldReduceMotion = useReducedMotion();

    const Component = motion[as] as typeof motion.div;

    // If user prefers reduced motion, render without animations
    if (shouldReduceMotion) {
        const StaticComponent = as;
        return <StaticComponent className={className}>{children}</StaticComponent>;
    }

    return (
        <Component
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={variants}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </Component>
    );
}

// Stagger container for child animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
    once?: boolean;
}

const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
};

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    delayChildren = 0.1,
    once = true,
}: StaggerContainerProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            variants={staggerVariants}
            transition={{
                staggerChildren: staggerDelay,
                delayChildren,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item for use inside StaggerContainer
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

// Hover scale animation wrapper
interface HoverScaleProps {
    children: ReactNode;
    className?: string;
    scale?: number;
}

export function HoverScale({
    children,
    className = "",
    scale = 1.05,
}: HoverScaleProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
