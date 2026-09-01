import React from "react";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function FinalCTA() {
  const officeEmail = "hello@profotech.com"; // Configurable placeholder email

  return (
    <section className="final-cta-section section-padding border-b">
      <div className="container final-cta-container">
        <Reveal>
          <span className="text-uppercase-meta">[ INITIATION ]</span>
          <h2 className="title-large final-cta-title">
            HAVE AN IDEA?
            <br />
            LET'S BUILD IT.
          </h2>
        </Reveal>

        <div className="final-cta-footer-grid">
          <Reveal delay={0.15}>
            <p className="final-cta-subtext">
              Tell us what you're building. We'll help you turn the idea into something real, secure, and ready to scale.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="final-cta-actions">
              <Button to="/contact" variant="primary" cursorText="OPEN">
                Start a Project
              </Button>
              <a
                href={`mailto:${officeEmail}`}
                className="link-editorial final-email-link"
                data-cursor="true"
                data-cursor-text="EMAIL"
              >
                {officeEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
