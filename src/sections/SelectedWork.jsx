import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function SelectedWork() {
  return (
    <section className="work-section section-padding border-b" id="work">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="work-header border-b">
            <span className="text-uppercase-meta">[ PORTFOLIO ]</span>
            <h2 className="title-section work-title">SELECTED WORK</h2>
            <p className="work-intro">
              A selection of products, platforms, and digital experiences we've built.
            </p>
          </div>
        </Reveal>

        {/* Editorial Project List */}
        <div className="work-projects-list">
          {projects.map((project, index) => {
            const displayIndex = String(index + 1).padStart(2, "0");
            
            return (
              <div key={project.id} className="project-item border-b">
                <Reveal>
                  <div className="project-item-grid">
                    {/* Left text column */}
                    <div className="project-item-text">
                      <span className="project-item-num text-uppercase-meta">
                        {displayIndex} /
                      </span>
                      <h3 className="project-item-title">{project.title}</h3>
                      <p className="project-item-subtitle">{project.subtitle}</p>
                      
                      <div className="project-item-details">
                        <span className="project-meta-label text-uppercase-meta">Industry</span>
                        <p className="project-meta-value">{project.industry}</p>
                        
                        <span className="project-meta-label text-uppercase-meta">Platform</span>
                        <p className="project-meta-value">{project.category}</p>
                        
                        <span className="project-meta-label text-uppercase-meta">Role</span>
                        <p className="project-meta-value">{project.role}</p>
                      </div>

                      <div className="project-item-cta-wrapper">
                        <Button to={`/work/${project.slug}`} variant="secondary" cursorText="VIEW">
                          View Case Study
                        </Button>
                      </div>
                    </div>

                    {/* Right image column */}
                    <div className="project-item-image-col">
                      <Link
                        to={`/work/${project.slug}`}
                        className="project-image-link"
                        data-cursor="true"
                        data-cursor-text="VIEW"
                      >
                        <div className="project-image-container">
                          <motion.img
                            src={project.image}
                            alt={`${project.title} Case Study Preview`}
                            className="project-image"
                            loading="lazy"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* View All Projects Footer */}
        <Reveal>
          <div className="work-section-footer">
            <Button to="/work" variant="primary" arrow={true} cursorText="OPEN">
              View All Case Studies
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
