"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Parallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Both breakpoints use real scroll-linked movement.
  // Desktop is deliberately more restrained; mobile gets a stronger travel.
  const desktopBackgroundY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const mobileBackgroundY = useTransform(scrollYProgress, [0, 1], [-220, 220]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  return (
    <section ref={sectionRef} className="parallax">
      <div className="parallax__background">
        <motion.div
          className="parallax__image"
          style={{
            y: reduceMotion
              ? 0
              : isMobile
                ? mobileBackgroundY
                : desktopBackgroundY,
          }}
        />
        <div className="parallax__overlay" />
      </div>

      <div className="parallax__container">
        <motion.div
          className="parallax__content"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="parallax__eyebrow">ANGGORO & ASSOCIATES</span>

          <h2 className="parallax__title">
            Your Trusted Legal Advisor
            <br />
            <em>in Indonesia.</em>
          </h2>

          <p className="parallax__description">
            We provide clear guidance through the complexities of the Indonesian
            legal system, connecting local and international clients with
            reliable legal solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
