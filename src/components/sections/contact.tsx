"use client";

import { motion, useReducedMotion } from "framer-motion";

type IconName = "map-pin" | "phone" | "mail" | "instagram" | "navigation";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
        </svg>
      );

    case "navigation":
      return (
        <svg {...common}>
          <path d="m3 11 18-8-8 18-2-8-8-2Z" />
          <path d="m11 13 5-5" />
        </svg>
      );
  }
}

const mapUrl = "https://maps.app.goo.gl/kn7HqExJJ15jxH8V8";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=-6.2742084,106.9753903&z=17&output=embed";

const phones = [
  { label: "+62 812 9101 9997", href: "tel:+6281291019997" },
  { label: "+62 859 3980 0429", href: "tel:+6285939800429" },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.header className="contact__header" {...reveal}>
          <div className="contact__eyebrow">
            <span />
            GET IN TOUCH
          </div>

          <h2 className="contact__title">
            Let&apos;s Start a <em>Conversation.</em>
          </h2>

          <p className="contact__intro">
            For legal enquiries and professional assistance, please reach out to
            our office. We look forward to hearing from you.
          </p>
        </motion.header>

        <div className="contact__layout">
          {/* OFFICE INFORMATION */}

          <motion.div className="contact__details" {...reveal}>
            <div className="contact__section-heading">
              <span className="contact__section-label">OUR OFFICE</span>
              <h3>We&apos;re Here to Help.</h3>
            </div>

            <div className="contact__info-list">
              {/* ADDRESS */}

              <article className="contact__info contact__info--address">
                <div className="contact__icon-circle">
                  <Icon name="map-pin" />
                </div>

                <div className="contact__info-content">
                  <span className="contact__label">OFFICE ADDRESS</span>

                  <p>
                    Grand Galaxy City, Blok RSK 3 No.37, Kelurahan Jakasetia,
                    Kecamatan Bekasi Selatan, Kota Bekasi, Jawa Barat.
                  </p>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__text-link"
                  >
                    Get directions
                  </a>
                </div>
              </article>

              {/* PHONE */}

              <article className="contact__info">
                <div className="contact__icon-circle">
                  <Icon name="phone" />
                </div>

                <div className="contact__info-content">
                  <span className="contact__label">PHONE NUMBER</span>

                  <div className="contact__phone-list">
                    {phones.map((phone) => (
                      <a href={phone.href} key={phone.href}>
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>

              {/* INSTAGRAM */}

              <article className="contact__info">
                <div className="contact__icon-circle">
                  <Icon name="instagram" />
                </div>

                <div className="contact__info-content">
                  <span className="contact__label">CONNECT WITH US</span>

                  <p>@Anggorolaw</p>

                  <a
                    href="https://www.instagram.com/anggorolawfirm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__text-link"
                  >
                    anggorolawfirm
                  </a>
                </div>
              </article>

              {/* EMAIL — BELOW INSTAGRAM */}

              <article className="contact__info">
                <div className="contact__icon-circle">
                  <Icon name="mail" />
                </div>

                <div className="contact__info-content">
                  <span className="contact__label">EMAIL ADDRESS</span>

                  <a
                    className="contact__email"
                    href="mailto:Office@anggorolaw.com"
                  >
                    Office@anggorolaw.com
                  </a>
                </div>
              </article>
            </div>

            <a
              href="https://wa.me/6281291019997"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__office-cta"
            >
              Contact Our Office
            </a>
          </motion.div>

          {/* GOOGLE MAPS */}

          <motion.div className="contact__location" {...reveal}>
            <div className="contact__map-heading">
              <div className="contact__section-heading">
                <span className="contact__section-label">FIND US</span>
                <h3>Our Location</h3>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-action"
                aria-label="Open location in Google Maps"
              >
                <Icon name="navigation" />
              </a>
            </div>

            <div className="contact__map-frame">
              <iframe
                src={mapEmbedUrl}
                title="Anggoro & Associates office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="contact__map-caption">
              <div>
                <strong>Grand Galaxy City, Bekasi</strong>
                <span>Bekasi Selatan, West Java, Indonesia</span>
              </div>

              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                View Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
