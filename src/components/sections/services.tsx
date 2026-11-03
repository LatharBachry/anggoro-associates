"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type LegalService = {
  title: string;
  description: string;
  icon: "document" | "building" | "message" | "handshake" | "briefcase";
};

type PracticeArea = {
  title: string;
  image: string;
  description: string;
  details: string[];
};

const legalServices: LegalService[] = [
  {
    title: "Legal Due Diligence",
    description:
      "A careful review of legal documents, corporate records, contracts, and potential liabilities to help clients understand risks before making important business decisions.",
    icon: "document",
  },
  {
    title: "Shareholders Restructuring",
    description:
      "Legal assistance in reviewing and restructuring shareholding arrangements, ownership structures, and corporate interests.",
    icon: "building",
  },
  {
    title: "Legal Opinions & Consultations",
    description:
      "Professional legal opinions and consultations to help clients understand their rights, obligations, and available legal options.",
    icon: "message",
  },
  {
    title: "Foreign Investment Company Incorporation",
    description:
      "Legal assistance for foreign investors establishing a company and conducting business in Indonesia, including relevant incorporation requirements and permits.",
    icon: "building",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Legal counsel throughout mergers, acquisitions, and related corporate transactions.",
    icon: "handshake",
  },
  {
    title: "Immigration & Manpower",
    description:
      "Legal assistance concerning immigration requirements, employment matters, and applicable manpower regulations.",
    icon: "document",
  },
  {
    title: "Joint Venture",
    description:
      "Legal support in structuring joint ventures, partnerships, and business cooperation arrangements.",
    icon: "handshake",
  },
  {
    title: "Formalities Handling & Submission",
    description:
      "Assistance with corporate documentation, regulatory formalities, and relevant administrative submissions.",
    icon: "document",
  },
  {
    title: "Shares Sale & Purchase",
    description:
      "Legal assistance in share sale and purchase transactions, including the preparation and review of related agreements.",
    icon: "briefcase",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Legal assistance relating to the protection, registration, and management of intellectual property rights.",
    icon: "document",
  },
];

const practiceAreas: PracticeArea[] = [
  {
    title: "Corporate M&A",
    image: "/images/practice-areas/corporate-ma.jpg",
    description:
      "Corporate law, mergers and acquisitions, commercial transactions, banking, litigation, and arbitration.",
    details: [
      "We offer specialized services in corporate law and mergers and acquisitions (M&A), commercial transactions, banking, litigation, and arbitration.",
      "Each practice area is supported by experienced partners and associates, recognized for their expertise and track record in their respective fields of Indonesian law.",
    ],
  },
  {
    title: "Litigation & Alternative Dispute Resolution",
    image: "/images/practice-areas/litigation-adr.jpg",
    description:
      "Representation and dispute resolution for commercial, corporate, and contractual matters.",
    details: [
      "We have extensive experience in commercial litigation and Alternative Dispute Resolution. Our team handles various types of commercial disputes, particularly those concerning corporate and commercial transactions.",
      "Whether clients face legal complexities involving business contracts, corporate governance disputes, or other commercial disagreements, we work to protect their interests through appropriate legal representation and dispute resolution.",
    ],
  },
  {
    title: "Good Corporate Governance",
    image: "/images/practice-areas/corporate-governance.jpg",
    description:
      "Corporate compliance, transparency, accountability, risk management, and strategic structuring.",
    details: [
      "We assist companies in implementing Good Corporate Governance principles, including transparency, accountability, responsibility, independence, and fairness.",
      "Our work includes legal compliance, risk management, corporate structuring, disclosure, reporting, and corporate matters.",
      "Effective governance helps build stakeholder confidence, support long-term business sustainability, and prevent corporate misconduct.",
    ],
  },
  {
    title: "Mining, Energy & Natural Resources",
    image: "/images/practice-areas/mining-energy.jpg",
    description:
      "Legal advice for mining and energy projects, investment, licensing, agreements, and transactions.",
    details: [
      "Anggoro & Associates has been involved in important aspects of the mining industry, including coal, copper, gold, and hydropower projects.",
      "Our services include advising clients and arranging project-specific agreements, assisting with foreign investment company (PMA) incorporation and relevant permits, and providing legal advice throughout the process.",
      "We also assist with legal due diligence, share restructuring, mergers and acquisitions, and mining company working capital matters, including communication and coordination with relevant government institutions.",
    ],
  },
  {
    title: "Property & Hospitality Management",
    image: "/images/practice-areas/property-hospitality.jpg",
    description:
      "Legal support for property, warehouse, superblock, green environment, and hotel projects.",
    details: [
      "Our experience includes projects involving warehouses, superblocks, green environments, and hotels.",
      "We provide legal advice, due diligence, agreement preparation and review, as well as assistance with formalities and documentation handling.",
    ],
  },
  {
    title: "Aviation",
    image: "/images/practice-areas/aviation.jpg",
    description:
      "Legal assistance for aviation transactions, aircraft agreements, flight routes, and operational matters.",
    details: [
      "Our aviation-related services include mergers and acquisitions, flight route agreements, aircraft sale and purchase, lease agreements, and labour matters.",
      "We also assist with management restructuring relating to crew and operational requirements.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    image: "/images/practice-areas/intellectual-property.jpg",
    description:
      "Counselling and registration for patents, trademarks, copyrights, industrial designs, and computer programs.",
    details: [
      "We provide counselling, registration assistance, and formalities handling for various branches of intellectual property rights.",
      "Our services cover patents, trademarks, copyrights, industrial designs, and computer programs.",
    ],
  },
  {
    title: "MICE",
    image: "/images/practice-areas/mice.jpg",
    description:
      "Legal support for meetings, incentives, conferences, exhibitions, and event management.",
    details: [
      "We advise, draft, and accompany clients in connection with event management agreements, vendor agreements, crew and talent agreements, performing arts agreements, riders, and logistics agreements.",
      "Our services also include non-disclosure and exclusivity agreements.",
      "Where required, our team can monitor and remain on-site during events to assist with changes to agreements, formalities, permits, renegotiations, and extensions to event duration.",
    ],
  },
];

function ServiceIcon({ type }: { type: LegalService["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      {...common}
    >
      {type === "document" && (
        <>
          <path d="M7 3.5h7l4 4V20.5H7z" />
          <path d="M14 3.5v4h4M10 12h5M10 15.5h5" />
        </>
      )}

      {type === "building" && (
        <>
          <path d="M4 20.5h16M6 20.5V7l6-3.5L18 7v13.5" />
          <path d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01M11 20.5v-3h2v3" />
        </>
      )}

      {type === "message" && (
        <>
          <path d="M4 5.5h16v12H9l-5 3z" />
          <path d="M8 10h8M8 13.5h5" />
        </>
      )}

      {type === "handshake" && (
        <>
          <path d="m3 9 4-4 4 2 3-1 7 4-3 7-4 2-4-2-3 1-4-5z" />
          <path d="m7 5 3 4 3-1 4 3M8 15l3 2M11 13l4 3M14 11l4 3" />
        </>
      )}

      {type === "briefcase" && (
        <>
          <rect x="3.5" y="7.5" width="17" height="12" rx="1" />
          <path d="M9 7.5v-3h6v3M3.5 12h17M10 12v2h4v-2" />
        </>
      )}
    </svg>
  );
}

export default function Services() {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(
    null,
  );

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedPractice) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPractice(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPractice]);

  return (
    <section id="services" className="services">
      {/* LEGAL SERVICES */}
      <section className="services__legal">
        <div className="services__legal-layout">
          <div className="services__legal-visual">
            <div className="services__legal-heading">
              <span className="services__eyebrow">HOW WE CAN HELP</span>

              <h2 className="services__title">
                Legal <em>Services.</em>
              </h2>
            </div>

            <div className="services__legal-image">
              <Image
                src="/images/services/legal-advisory.png"
                alt="Legal consultation at Anggoro & Associates"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="services__image"
              />

              <div className="services__image-caption">
                <span>ANGGORO & ASSOCIATES</span>
                <span>COUNSELLOR AT LAW</span>
              </div>
            </div>
          </div>

          <div className="services__legal-content">
            <p className="services__legal-intro">
              Our legal services are tailored to the needs of each client,
              combining legal knowledge with a practical understanding of
              business.
            </p>

            <div className="services__legal-list">
              {legalServices.map((service, index) => (
                <motion.article
                  className="services__legal-item"
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : (index % 2) * 0.06,
                  }}
                >
                  <div className="services__legal-icon">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <div className="services__legal-item-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="services__practice">
        <div className="services__practice-container">
          <div className="services__practice-heading">
            <div>
              <span className="services__practice-eyebrow">OUR EXPERTISE</span>

              <h2 className="services__practice-title">
                Areas of <em>Practice.</em>
              </h2>
            </div>

            <p className="services__practice-intro">
              We also specialize in the following areas of law, serving both
              local and international clients.
            </p>
          </div>

          <div className="services__practice-grid">
            {practiceAreas.map((area, index) => (
              <motion.button
                type="button"
                className="services__practice-card"
                key={area.title}
                onClick={() => setSelectedPractice(area)}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : (index % 4) * 0.06,
                }}
                aria-label={`Read more about ${area.title}`}
              >
                <div className="services__practice-card-image">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    className="services__image"
                  />

                  <div className="services__practice-card-overlay" />

                  <h3>{area.title}</h3>

                  <span className="services__practice-card-more">
                    Explore practice
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREA DETAIL MODAL */}
      <AnimatePresence>
        {selectedPractice && (
          <motion.div
            className="practice-modal"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedPractice(null);
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <motion.div
              className="practice-modal__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="practice-modal-title"
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, scale: 0.98 }
              }
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
            >
              <div className="practice-modal__image">
                <Image
                  src={selectedPractice.image}
                  alt={selectedPractice.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="services__image"
                />

                <div className="practice-modal__image-overlay" />

                <span className="practice-modal__image-label">
                  ANGGORO & ASSOCIATES
                </span>
              </div>

              <div className="practice-modal__content">
                <button
                  type="button"
                  className="practice-modal__close"
                  onClick={() => setSelectedPractice(null)}
                  aria-label="Close practice area details"
                >
                  <span />
                  <span />
                </button>

                <span className="practice-modal__eyebrow">OUR PRACTICE</span>

                <h2 id="practice-modal-title">{selectedPractice.title}</h2>

                <div className="practice-modal__divider" />

                <div className="practice-modal__description">
                  {selectedPractice.details.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <button
                  type="button"
                  className="practice-modal__back"
                  onClick={() => setSelectedPractice(null)}
                >
                  Back to practice areas
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
