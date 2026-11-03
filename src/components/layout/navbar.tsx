"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const reduceMotion = useReducedMotion();

  // Reset URL hash and return to Hero on page refresh/load.
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    window.scrollTo(0, 0);
  }, []);

  // Detect scroll position and active section.
  useEffect(() => {
    const sectionIds = [
      "home",
      ...siteConfig.navigation.map((item) => item.href.replace("#", "")),
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);

      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 160) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scrolling when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close mobile menu with Escape key.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={[
        "navbar",
        isScrolled ? "navbar--scrolled" : "",
        isMenuOpen ? "navbar--menu-open" : "",
      ].join(" ")}
      style={{
        backgroundColor: isScrolled ? "#090908" : "transparent",
      }}
    >
      {/* Main Navbar */}
      <div className="navbar__container">
        <Link
          href="#home"
          className="navbar__brand"
          aria-label="Anggoro & Associates Home"
          onClick={closeMenu}
        >
          <Image
            src={siteConfig.assets.logo}
            alt="Anggoro & Associates"
            width={280}
            height={90}
            priority
            className="navbar__logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop" aria-label="Main navigation">
          {siteConfig.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "navbar__link",
                  isActive ? "navbar__link--active" : "",
                ].join(" ")}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
                <span className="navbar__link-indicator" />
              </Link>
            );
          })}

          <Link
            href={siteConfig.consultation.href}
            className="navbar__consultation"
          >
            {siteConfig.consultation.label}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={[
            "navbar__toggle",
            isMenuOpen ? "navbar__toggle--active" : "",
          ].join(" ")}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Full-screen Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar__mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
          >
            <motion.nav
              id="mobile-navigation"
              className="navbar__mobile"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="navbar__mobile-links">
                {siteConfig.navigation.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.div
                      key={item.href}
                      className="navbar__mobile-item"
                      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        delay: reduceMotion ? 0 : index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className={[
                          "navbar__mobile-link",
                          isActive ? "navbar__mobile-link--active" : "",
                        ].join(" ")}
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        <span className="navbar__mobile-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="navbar__mobile-action"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : 0.3,
                }}
              >
                <Link
                  href={siteConfig.consultation.href}
                  className="navbar__mobile-cta"
                  onClick={closeMenu}
                >
                  Request a Consultation
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
