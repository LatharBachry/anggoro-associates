"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* OFFICE IMAGE */}
        <motion.div
          className="about__visual"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="about__image-wrapper">
            <Image
              src="/images/about/about-office.png"
              alt="Anggoro & Associates law firm office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="about__image"
            />

            <div className="about__image-overlay" />

            <div className="about__image-caption">
              <span>ANGGORO & ASSOCIATES</span>
              <span>COUNSELLOR AT LAW</span>
            </div>
          </div>
        </motion.div>

        {/* FIRM INTRODUCTION */}
        <motion.div
          className="about__content"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about__eyebrow">ABOUT THE FIRM</span>

          <h2 className="about__title">
            Legal Expertise.
            <em>Built on Integrity.</em>
          </h2>

          <div className="about__description">
            <p className="about__intro">
              Founded in 2008 by Dhana Anggoro, Anggoro & Associates is an
              Indonesian law firm providing legal counsel and representation to
              local and international clients, including those from Australia,
              Thailand, and Singapore.
            </p>

            <p>
              With a strong understanding of Indonesia&apos;s legal and business
              environment, the firm advises and represents clients in corporate
              and commercial matters, including business transactions, meetings,
              negotiations, and legal consultations.
            </p>

            <p>
              Its areas of practice include Joint Ventures, Foreign Investment
              (PMA), Mergers and Acquisitions, and Sale and Purchase Agreements.
              Each engagement is approached with professional commitment,
              tailored to the individual needs and interests of every client.
            </p>
          </div>

          <div className="about__signature">
            <span>ANGGORO & ASSOCIATES</span>
            <span>INDONESIAN LAW FIRM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
