import React from "react";
import { technologyGroups, allTechnologiesMarquee } from "../data/technologies";
import Reveal from "../components/Reveal";

export default function Technologies() {
  // Duplicate list to ensure seamless marquee looping
  const marqueeItems = [...allTechnologiesMarquee, ...allTechnologiesMarquee];

  return (
    <section className="tech-section section-padding border-b" id="technologies">
      {/* Section Header */}
      <div className="container">
        <Reveal>
          <div className="tech-header">
            <span className="text-uppercase-meta">[ ENGINE ]</span>
            <h2 className="title-section tech-title">BUILT WITH THE RIGHT TECHNOLOGY.</h2>
          </div>
        </Reveal>
      </div>

      {/* Marquee Ticker */}
      <div className="tech-marquee-container border-t border-b">
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
                <span className="marquee-divider">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Category List */}
      <div className="container tech-categories-container">
        <Reveal>
          <div className="tech-grid">
            {technologyGroups.map((group) => (
              <div key={group.category} className="tech-group-card border">
                <span className="text-uppercase-meta tech-group-title">
                  {group.category}
                </span>
                <div className="tech-group-items">
                  {group.items.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
