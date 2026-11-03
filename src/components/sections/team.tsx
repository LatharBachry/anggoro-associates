"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type SocialPlatform = "linkedin" | "email" | "instagram" | "facebook";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  profile: string;
  expertise: string[];
  social: Record<SocialPlatform, string>;
};

const teamMembers: TeamMember[] = [
  {
    id: "01",
    name: "Dhana Anggoro, S.H., C.L.A., CSPP",
    role: "Advocate & Managing Partner",
    image: "/images/team/team-member-01.jpg",
    alt: "Dhana Anggoro",
    profile:
      "Mr. Dhana Anggoro is Counsellor and Founder of Anggoro & Associates. He holds an Advocate Licence from PERADI (Indonesian Bar Association), is a Certified Legal Auditor from the Indonesian National Certification Authority (Badan Nasional Sertifikasi Profesi), and a Certified Strategic Planning Professional. His professional experience spans corporate matters and various industries, including Oil and Gas, Mining, Aviation, HR, and MICE, as well as dispute settlement and litigation. His organizational and social advocacy experience includes youth development, public health, Pro Bono Legal Aid, and community legal education.",
    expertise: [
      "Corporate and commercial law",
      "Oil and gas, mining, and aviation",
      "Dispute settlement and litigation",
      "Legal audit and strategic planning",
    ],
    social: {
      linkedin: "#",
      email: "mailto:dhana.anggoro@anggoro-associates.com",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    id: "02",
    name: "Anom Tri Harta, S.H.",
    role: "Advocate, Non-Equity Partner",
    image: "/images/team/team-member-02.jpg",
    alt: "Anom Tri Harta",
    profile:
      "Anom Tri Harta has a long tenure at Anggoro Law Firm, progressing from Legal Junior to Advocate. A member of PERADI (Indonesian Bar Association), he has assisted and handled cases under various corporate schemes, developing his knowledge and experience across different legal areas with Anggoro & Associates, Law Firm.",
    expertise: [
      "Legal advisory and assistance",
      "Corporate legal matters",
      "Legal case handling",
      "Legal research and documentation",
    ],
    social: {
      linkedin: "#",
      email: "mailto:dhana.anggoro@anggoro-associates.com",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    id: "03",
    name: "Albertho Marthin Silitonga, S.H.",
    role: "Advocate, Of Counsel",
    image: "/images/team/team-member-03.jpg",
    alt: "Albertho Marthin Silitonga",
    profile:
      "Albertho is a long-time colleague of Anggoro Law Firm and a member of PERADI (Indonesian Bar Association). He has handled cases through various cooperation schemes, particularly litigation involving private and criminal law. He continues to develop his knowledge and experience across different legal areas while providing legal services with Anggoro & Associates, Law Firm.",
    expertise: [
      "Civil and commercial litigation",
      "Criminal law matters",
      "Dispute resolution",
      "Legal representation",
    ],
    social: {
      linkedin: "#",
      email: "mailto:dhana.anggoro@anggoro-associates.com",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    id: "04",
    name: "Rizka E. Fardina, S.H.",
    role: "Advocate, Of Counsel",
    image: "/images/team/team-member-04.jpg",
    alt: "Rizka E. Fardina",
    profile:
      "Rizka E. Fardina is a member of PERADI (Indonesian Bar Association). Her professional background includes tenure at national corporations and over eight years at a prominent Jakarta law firm. She has provided strategic legal counsel to domestic companies and Foreign Direct Investment (PMA) entities across various sectors, including advertising, chemical raw materials, joint ventures, and mining. Her experience includes legal due diligence, legal opinions, employment matters, and negotiating complex agreements with brand owners, talent, and agencies. Her practice also covers mergers and acquisitions, bankruptcy and insolvency, and family law.",
    expertise: [
      "Foreign Direct Investment (PMA)",
      "Legal due diligence and legal opinions",
      "Employment and commercial agreements",
      "Mergers and acquisitions",
      "Bankruptcy, insolvency, and family law",
    ],
    social: {
      linkedin: "#",
      email: "mailto:dhana.anggoro@anggoro-associates.com",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    id: "05",
    name: "Dr. Hidayatullah, S.E., S.H., M.H., M.Kom., M.Si., Akt.",
    role: "Professional Accountant",
    image: "/images/team/team-member-05.jpg",
    alt: "Dr. Hidayatullah",
    profile:
      "Mr. Hidayatullah is a professional accountant and a lecturer at several universities. He has been teaching since 2005 in auditing and accounting, and has been a professional consultant since 2007. He understands the areas of accounting, auditing, taxation, and information technology.",
    expertise: [
      "Accounting and auditing",
      "Taxation",
      "Professional consulting",
      "Information technology",
    ],
    social: {
      linkedin: "#",
      email: "mailto:dhana.anggoro@anggoro-associates.com",
      instagram: "#",
      facebook: "#",
    },
  },
];

function SocialIcon({ type }: { type: SocialPlatform }) {
  switch (type) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
      );

    case "email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 7v10h15V7L12 12.2ZM5.7 7l6.3 4.4L18.3 7H5.7Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      );

    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 21v-8h2.8l.42-3.1H13.5V7.92c0-.9.25-1.52 1.56-1.52h1.67V3.63c-.29-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.26V9.9H7.35V13h2.78v8h3.37Z" />
        </svg>
      );
  }
}

function ProfileModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="team-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        className="team-modal__card"
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} professional profile`}
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.985 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          className="team-modal__close"
          onClick={onClose}
          aria-label="Close profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="team-modal__header">
          <div className="team-modal__portrait">
            <Image
              src={member.image}
              alt={member.alt}
              fill
              sizes="120px"
              className="team-modal__portrait-image"
            />
          </div>

          <div className="team-modal__identity">
            <span className="team-modal__eyebrow">PROFESSIONAL PROFILE</span>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>

        <div className="team-modal__divider" />

        <div className="team-modal__section">
          <span className="team-modal__section-title">PROFILE</span>
          <p className="team-modal__description">{member.profile}</p>
        </div>

        <div className="team-modal__section">
          <span className="team-modal__section-title">AREAS OF EXPERTISE</span>

          <ul className="team-modal__expertise">
            {member.expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="team-modal__divider team-modal__divider--bottom" />

        <div className="team-modal__actions">
          <a
            href={member.social.linkedin}
            className="team-modal__action team-modal__action--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW LINKEDIN PROFILE
          </a>

          <a
            href={member.social.email}
            className="team-modal__action team-modal__action--secondary"
          >
            CONTACT BY EMAIL
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const reduceMotion = useReducedMotion();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="team">
      <div className="team__container">
        <motion.div
          className="team__header"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="team__eyebrow">
            <span />
            THE PEOPLE BEHIND OUR FIRM
          </div>

          <div className="team__heading">
            <h2 className="team__title">
              Our <em>People.</em>
            </h2>

            <p className="team__description">
              A team of legal professionals and trusted associates, bringing
              together experience, knowledge, and dedication to serving our
              clients.
            </p>
          </div>
        </motion.div>

        <div className="team__grid">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              className="team__member"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="team__photo"
                role="button"
                tabIndex={0}
                aria-label={`View professional profile of ${member.name}`}
                onClick={() => setSelectedMember(member)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedMember(member);
                  }
                }}
              >
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 20vw"
                  className="team__image"
                />

                <div className="team__photo-overlay" />

                <div className="team__card-content">
                  <span className="team__role">{member.role}</span>
                  <h3 className="team__name">{member.name}</h3>

                  <span className="team__profile-link">
                    VIEW PROFESSIONAL PROFILE
                    <span className="team__profile-line" />
                  </span>
                </div>
              </div>

              <div className="team__social">
                {(["linkedin", "email", "instagram", "facebook"] as const).map(
                  (platform) => (
                    <a
                      key={platform}
                      href={member.social[platform]}
                      className="team__social-link"
                      aria-label={`${platform} contact for ${member.name}`}
                      target={platform === "email" ? undefined : "_blank"}
                      rel={
                        platform === "email" ? undefined : "noopener noreferrer"
                      }
                    >
                      <SocialIcon type={platform} />
                    </a>
                  ),
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <ProfileModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
