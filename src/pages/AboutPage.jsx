import React from "react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function AboutPage() {
  const values = [
    {
      title: "CLARITY FIRST",
      desc: "We prioritize clean, readable layouts and codebases. If a solution is overly complex, we iterate until it is straightforward and maintainable.",
    },
    {
      title: "METICULOUS PRECISION",
      desc: "From typography line heights to database indices, we believe details distinguish professional products from temporary solutions.",
    },
    {
      title: "PERFORMANCE DRIVEN",
      desc: "Our products load fast, respond immediately, and scale with minimal system overhead. We minimize bundle sizes and maximize runtime efficiency.",
    },
    {
      title: "PRACTICAL EDUCATION",
      desc: "We don't keep our expertise locked away. We active-train aspiring developers with project-centered courses based on modern coding standards.",
    },
  ];

  return (
    <PageTransition>
      <div className="about-page-container section-padding">
        <div className="container">
          {/* Page Header */}
          <Reveal>
            <div className="page-header border-b">
              <span className="text-uppercase-meta">[ PROFILE ]</span>
              <h1 className="title-large page-title">ABOUT STUDIO.</h1>
              <p className="page-intro">
                We are a distributed digital product studio and engineering collective designing software that drives businesses forward.
              </p>
            </div>
          </Reveal>

          {/* Philosophy Section split */}
          <div className="about-page-details-grid border-b">
            <div className="details-grid-left">
              <Reveal>
                <h2 className="editorial-large-text">
                  WE BELIEVE THAT SOFTWARE SHOULD BE AN ASSET, NOT A COMPLEX LIABILITY.
                </h2>
              </Reveal>
            </div>

            <div className="details-grid-right">
              <Reveal delay={0.15}>
                <div className="details-text-block">
                  <p>
                    Profotech was founded in 2026 as a direct response to over-engineered software systems and boilerplate design templates. We wanted to build a company that treats digital engineering as a craft, focusing on typography, whitespace, code quality, and performance.
                  </p>
                  <p>
                    Our operations combine two primary wings: our Product Studio, which collaborates with startups and established enterprises to deploy production applications, and our Academy, which trains developers using practical, project-based curriculums.
                  </p>
                  <p>
                    This dual structure keeps us sharp. Every technique we teach in our courses is used daily on client projects, and every architectural lesson we learn in production is integrated straight back into our classes.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Core Values grid */}
          <div className="about-values-section">
            <Reveal>
              <div className="values-header">
                <span className="text-uppercase-meta">[ OPERATING PRINCIPLES ]</span>
                <h2 className="title-section values-title">OUR PILLARS</h2>
              </div>
            </Reveal>

            <div className="values-grid">
              {values.map((val, idx) => (
                <Reveal key={val.title} delay={idx * 0.1}>
                  <div className="value-card border">
                    <span className="value-card-num text-uppercase-meta">0{idx + 1}</span>
                    <h3 className="value-card-title">{val.title}</h3>
                    <p className="value-card-desc">{val.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="about-team-section border-t">
            <Reveal>
              <div className="team-header">
                <span className="text-uppercase-meta">[ PARTNERS ]</span>
                <h2 className="title-section team-title">OUR TEAM</h2>
              </div>
            </Reveal>

            <div className="team-grid">
              {[
                { name: "Abdul Saleem T A", role: "Product Studio Partner" },
                { name: "Mohamed Riffan", role: "Creative & Engineering Partner" },
                { name: "Mohamed Jafar", role: "Operations & Academy Partner" },
              ].map((member, idx) => (
                <Reveal key={member.name} delay={idx * 0.1}>
                  <div className="team-card border">
                    <span className="team-num text-uppercase-meta">0{idx + 1}</span>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role text-uppercase-meta">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* About Page bottom Call to Action */}
          <Reveal>
            <div className="about-page-footer">
              <span className="text-uppercase-meta">Collaborate with us</span>
              <h2 className="about-footer-heading">HAVE A CHALLENGE YOU NEED RESOLVED?</h2>
              <Button to="/contact" variant="primary" arrow={true} cursorText="OPEN">
                Initiate Project Spec
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
}