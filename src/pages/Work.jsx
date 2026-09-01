import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function Work() {
  return (
    <PageTransition>
      <div className="work-page-container section-padding">
        <div className="container">
          {/* Page Header */}
          <Reveal>
            <div className="page-header border-b">
              <span className="text-uppercase-meta">[ CASE STUDIES ]</span>
              <h1 className="title-large page-title">OUR WORK.</h1>
              <p className="page-intro">
                We design and build modern software, digital interfaces, and high-performance products. Explore our technical details and results.
              </p>
            </div>
          </Reveal>

          {/* Asymmetrical Grid of Projects */}
          <div className="work-catalog-grid">
            {projects.map((project, idx) => {
              const displayIndex = String(idx + 1).padStart(2, "0");
              return (
                <Reveal key={project.id} delay={idx * 0.1}>
                  <div className="catalog-card">
                    <Link
                      to={`/work/${project.slug}`}
                      className="catalog-image-link"
                      data-cursor="true"
                      data-cursor-text="VIEW"
                    >
                      <div className="catalog-image-container">
                        <motion.img
                          src={project.image}
                          alt={`${project.title} Preview`}
                          className="catalog-image"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </Link>

                    <div className="catalog-card-details">
                      <div className="catalog-card-header">
                        <span className="catalog-card-index">{displayIndex}</span>
                        <h2 className="catalog-card-title">
                          <Link to={`/work/${project.slug}`} className="catalog-title-link">
                            {project.title}
                          </Link>
                        </h2>
                      </div>
                      <p className="catalog-card-desc">{project.subtitle}</p>
                      
                      <div className="catalog-tags">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="catalog-tag border">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="catalog-card-cta">
                        <Button to={`/work/${project.slug}`} variant="secondary" cursorText="VIEW">
                          View details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
