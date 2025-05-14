"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedTitleProps {
    text: string;
    className?: string;
}

export default function AnimatedTitle({ text, className = "" }: AnimatedTitleProps) {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // Stop observing once in view
                }
            },
            {
                threshold: 0.1, // Start animation when 10% of element is visible
            }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        setShowCursor(true);
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                setShowCursor(false);
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [text, isInView]);

    return (
        <span ref={titleRef} className={className}>
            {displayText}
            {showCursor && (
                <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-blink" />
            )}
        </span>
    );
}
