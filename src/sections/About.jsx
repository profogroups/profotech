import React from "react";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function About() {
  return (
    <section className="about-section section-padding border-b" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Metadata & Large Statement */}
          <div className="about-left">
            <Reveal>
              <span className="text-uppercase-meta">[ OUR PHILOSOPHY ]</span>
              <h2 className="title-section about-title">
                TECHNOLOGY SHOULD DO MORE THAN WORK.
              </h2>
            </Reveal>
          </div>

          {/* Right Supporting details */}
          <div className="about-right">
            <Reveal delay={0.15}>
              <p className="about-highlight">
                It should help businesses grow, simplify complex problems, and create better experiences for the people who use them.
              </p>
            </Reveal>
            
            <Reveal delay={0.25}>
              <div className="about-description">
                <p>
                  Profotech is a technology and digital services company focused on designing, developing, and growing digital products for businesses and organizations.
                </p>
                <p>
                  We combine software development, creative design, digital marketing, and practical engineering education to help ideas move smoothly from concept to execution. Led by partners Abdul Saleem T A, Mohamed Riffan, and Mohammed Jaffer, we build software that drives businesses forward.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="about-cta-wrapper">
                <Button to="/about" variant="secondary" arrow={true} cursorText="OPEN">
                  Learn About Our Team
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
