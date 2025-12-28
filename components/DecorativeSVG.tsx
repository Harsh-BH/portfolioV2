"use client";

import { motion, useReducedMotion } from "framer-motion";

// Blue flower SVG component - 8-petal design
export function BlueFlower({ className = "" }: { className?: string }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                    className="fill-sky-400 dark:fill-sky-600"
                />
                <circle
                    className="fill-blue-800 dark:fill-blue-900"
                    cx="50"
                    cy="50"
                    r="12"
                />
            </svg>
        </motion.div>
    );
}

// Red flower SVG component - 8-petal design
export function RedFlower({ className = "" }: { className?: string }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                    className="fill-red-500 dark:fill-red-700"
                />
                <circle
                    className="fill-gray-100 dark:fill-gray-400"
                    cx="50"
                    cy="50"
                    r="12"
                />
            </svg>
        </motion.div>
    );
}


// Generic flower for color boxes in project section
export function FlowerIcon({
    fillColor = "#1e3a8a",
    centerColor = "#fbbf24",
    className = "",
}: {
    fillColor?: string;
    centerColor?: string;
    className?: string;
}) {
    return (
        <svg
            className={className}
            fill="none"
            height="60"
            viewBox="0 0 100 100"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M50 20C55 10 70 10 75 20C85 20 90 35 80 45C90 55 85 70 75 75C70 85 55 85 50 75C45 85 30 85 25 75C15 70 10 55 20 45C10 35 15 20 25 20C30 10 45 10 50 20Z"
                fill={fillColor}
            />
            <circle cx="50" cy="50" fill={centerColor} r="10" />
        </svg>
    );
}

// Hero crown/head icon
export function HeroIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            height="40"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="40"
            aria-hidden="true"
        >
            <path d="M22 17h-2.917a5.001 5.001 0 0 0-4.667-3.083h-.832a5.001 5.001 0 0 0-4.667 3.083H6a3.5 3.5 0 0 1-3.5-3.5V13a9.5 9.5 0 1 1 19 0v.5a3.5 3.5 0 0 1-3.5 3.5Z" />
            <path d="M6 17a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5" />
        </svg>
    );
}

// Digital home/camera icon
export function CameraIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            height="48"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="48"
            aria-hidden="true"
        >
            <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m0 0v3.75m0-3.75H9m3 0h3.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path d="M12 21V12" />
            <path d="M9 16.5l3-1.5" />
            <path d="M15 16.5l-3-1.5" />
            <rect height="16" rx="2" stroke="currentColor" width="14" x="5" y="4" />
            <circle cx="12" cy="11" r="3" />
        </svg>
    );
}
