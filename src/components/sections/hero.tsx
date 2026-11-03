"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { MouseEvent } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion || !sectionRef.current) return;

    const bounds = sectionRef.current.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    sectionRef.current.style.setProperty("--pointer-x", `${x * -3}px`);

    sectionRef.current.style.setProperty("--pointer-y", `${y * -2}px`);
  }

  function handlePointerLeave() {
    sectionRef.current?.style.setProperty("--pointer-x", "0px");
    sectionRef.current?.style.setProperty("--pointer-y", "0px");
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      {/* Cinematic Ambient Background */}
      <motion.div
        className="hero__background"
        style={{
          backgroundImage: `url("${siteConfig.assets.hero}")`,
        }}
        initial={false}
        animate={
          reduceMotion
            ? { x: 0, y: 0 }
            : {
                x: [0, -9, -4, 7, 0],
                y: [0, 4, -3, 3, 0],
              }
        }
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      />

      <div className="hero__overlay" />

      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={itemVariants}>
            ANGGORO & ASSOCIATES
          </motion.p>

          <motion.h1 className="hero__title" variants={itemVariants}>
            A Law Firm
            <br />
            <em>Built on Integrity.</em>
          </motion.h1>

          <motion.p className="hero__description" variants={itemVariants}>
            Professional legal counsel and solutions, guided by integrity,
            commitment, and a clear understanding of our clients&apos; needs.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
            >
              <Link
                href={siteConfig.consultation.href}
                className="hero__button"
              >
                Request a Consultation
              </Link>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? undefined : { x: 3 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
            >
              <Link href="#about" className="hero__secondary-link">
                Discover Our Firm
                <span className="hero__secondary-line" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
