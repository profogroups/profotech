import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find project matching the route parameter slug
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Scroll to top on project load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <PageTransition>
        <div className="project-detail-container section-padding">
          <div className="container text-center" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <span className="text-uppercase-meta">[ ERROR 404 ]</span>
            <h1 className="title-section" style={{ margin: "1.5rem 0" }}>CASE STUDY NOT FOUND</h1>
            <p style={{ marginBottom: "2rem" }}>
              The requested case study does not exist or has been relocated.
            </p>
            <Button to="/work" variant="primary" arrow={true}>
              Return to Work
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Next project logic for continuous user flow
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <PageTransition>
      <article className="project-detail-container section-padding">
        <div className="container">
          {/* Back button link */}
          <Reveal>
            <Link to="/work" className="link-editorial back-work-link">
              ← Back to Selected Work
            </Link>
          </Reveal>

          {/* Project Title Header */}
          <div className="project-detail-header">
            <Reveal>
              <span className="text-uppercase-meta">[ CASE STUDY // {project.year} ]</span>
              <h1 className="title-large project-detail-title">{project.title}</h1>
              <p className="project-detail-subtitle">{project.subtitle}</p>
            </Reveal>
          </div>

          {/* Project Details Grid (Metadata) */}
          <Reveal delay={0.15}>
            <div className="project-meta-grid border-t border-b">
              <div className="meta-cell">
                <span className="text-uppercase-meta meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>
              <div className="meta-cell">
                <span className="text-uppercase-meta meta-label">Industry</span>
                <span className="meta-value">{project.industry}</span>
              </div>
              <div className="meta-cell">
                <span className="text-uppercase-meta meta-label">Platform</span>
                <span className="meta-value">{project.category}</span>
              </div>
              <div className="meta-cell">
                <span className="text-uppercase-meta meta-label">Studio Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>
          </Reveal>

          {/* Large Hero Image */}
          <Reveal delay={0.2}>
            <div className="project-detail-hero-image border">
              <img
                src={project.image}
                alt={`${project.title} Case Study Visual`}
                loading="eager"
              />
            </div>
          </Reveal>

          {/* Core Case Study Body */}
          <div className="project-detail-body-grid">
            {/* Left Column: Challenge & Solution */}
            <div className="detail-body-left">
              <Reveal>
                <div className="body-block">
                  <span className="text-uppercase-meta block-title-label">[ 01 / THE CHALLENGE ]</span>
                  <h2 className="block-heading">THE PROBLEM WE FACED</h2>
                  <p className="block-text">{project.challenge}</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="body-block">
                  <span className="text-uppercase-meta block-title-label">[ 02 / THE SOLUTION ]</span>
                  <h2 className="block-heading">HOW WE ARCHITECTED IT</h2>
                  <p className="block-text">{project.solution}</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="body-block">
                  <span className="text-uppercase-meta block-title-label">[ 03 / CORE FEATURES ]</span>
                  <h2 className="block-heading">TECHNICAL CAPABILITIES</h2>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item-detail">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Technologies & Metrics */}
            <div className="detail-body-right">
              <Reveal delay={0.15}>
                <div className="sidebar-block border">
                  <span className="text-uppercase-meta block-title-label">Tech Stack Used</span>
                  <div className="sidebar-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="sidebar-tag border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {project.results && project.results.length > 0 && (
                <Reveal delay={0.2}>
                  <div className="sidebar-block border sidebar-metrics-block">
                    <span className="text-uppercase-meta block-title-label">Key Results</span>
                    <ul className="metrics-list">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="metric-item">
                          <span className="metric-bullet">—</span>
                          <span className="metric-text">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          {/* Next Project Footer CTA */}
          <div className="next-project-footer border-t">
            <Reveal>
              <div className="next-project-inner">
                <div className="next-project-meta">
                  <span className="text-uppercase-meta">Next Case Study</span>
                  <h3 className="next-project-title">
                    <Link to={`/work/${nextProject.slug}`} className="next-title-link">
                      {nextProject.title}
                    </Link>
                  </h3>
                </div>
                <Button to={`/work/${nextProject.slug}`} variant="primary" arrow={true} cursorText="VIEW">
                  Next Project
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
