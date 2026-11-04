"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 1200 - elapsed);

      window.setTimeout(() => {
        setIsLeaving(true);

        window.setTimeout(() => {
          setIsVisible(false);
        }, 700);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${isLeaving ? "loading-screen--leaving" : ""}`}
      aria-label="Loading Anggoro & Associates"
    >
      <div className="loading-screen__content">
        <img
          src="/images/brand/logo-anggoro.png"
          alt="Anggoro & Associates"
          className="loading-screen__logo"
        />

        <div className="loading-screen__progress">
          <span />
        </div>

        <p className="loading-screen__text">LOADING</p>
      </div>
    </div>
  );
}
