"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Parallax() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="parallax">
      <div className="parallax__background">
        <div className="parallax__image" />
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
