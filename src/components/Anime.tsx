'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Children, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface animeProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTextAnime: React.FC<animeProps> = ({ children, className }) => {

    const headerRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {

        if (!headerRef.current) return;

        const splitHeader = SplitText.create(headerRef.current, { type: "words, lines", mask: "lines" });

        gsap.from(splitHeader.lines, {
            // opacity: 0,
            y: 80,
            duration: 1.3,
            ease: "expo.out",
            stagger: 0.1,
        })

    }, [])

    return (
        <h1 ref={headerRef} className={className}>
            {children}
        </h1>
    )
}

export const MarqueeAnime: React.FC<animeProps> = ({ children, className }) => {

    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!marqueeRef.current) return;

        gsap.to(marqueeRef.current, {
            ease: "none",
            xPercent: -10,
            duration: 10,
            repeat: -1
        })
    }, [])

    return (
        <p className={`whitespace-nowrap ${className || ""}`} ref={marqueeRef}>
            {children}
        </p>
    )
}

export const SectionParallax: React.FC<animeProps> = ({ children, className }) => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

       gsap.to(sectionRef.current, {
           yPercent: -10,
           scrollTrigger: {
               trigger: sectionRef.current,
               scrub: true,
               start: "top bottom",
               end: ""
           }
       })
    }, [])

    return (
        <section className={className} ref={sectionRef}>
            {children}
        </section>
    )
}

export const ImageParallax: React.FC<animeProps> = ({ children,className }) => {

    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!imageRef.current) return;

        gsap.to(imageRef.current, {
            yPercent: -7,
            scrollTrigger: {
                trigger: imageRef.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            }
        })

    }, [])

    return (
        <div className={className} ref={imageRef}>
            {children}
        </div>
    )
}

