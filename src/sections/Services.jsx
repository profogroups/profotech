import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";
import Reveal from "../components/Reveal";

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="services-section section-padding border-b" id="services">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="services-header-grid">
            <div>
              <span className="text-uppercase-meta">[ WHAT WE DO ]</span>
              <h2 className="title-section services-title">
                WE TURN IDEAS INTO DIGITAL PRODUCTS.
              </h2>
            </div>
            <div className="services-header-right">
              <p className="services-intro">
                From strategy and design to development and growth, we help businesses create technology that works.
              </p>
              <Link to="/services" className="link-editorial services-header-link">
                Explore Detailed Offerings
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Interactive Rows */}
        <div className="services-rows-container border-t">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            
            return (
              <div
                key={service.id}
                className="service-row border-b"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="true"
                data-cursor-text="EXPLORE"
              >
                <div className="service-row-main">
                  {/* Left Metadata & Title */}
                  <div className="service-row-left">
                    <span className="service-row-number">{service.id}</span>
                    <h3 className="service-row-name">{service.title}</h3>
                  </div>

                  {/* Center Description */}
                  <div className="service-row-center">
                    <p className="service-row-desc">{service.description}</p>
                  </div>

                  {/* Right Arrow */}
                  <div className="service-row-right">
                    <motion.span
                      animate={{
                        rotate: isHovered ? 45 : 0,
                        color: isHovered ? "var(--color-accent)" : "var(--color-text)",
                      }}
                      className="service-row-arrow"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Expanded Capabilities Drawers */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="service-row-drawer"
                >
                  <div className="service-drawer-content">
                    <div className="service-drawer-capabilities">
                      <span className="text-uppercase-meta drawer-meta">Capabilities</span>
                      <div className="capabilities-tags-grid">
                        {service.capabilities.map((tag) => (
                          <span key={tag} className="capability-tag border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="service-drawer-info">
                      <span className="text-uppercase-meta drawer-meta">Approach</span>
                      <p className="drawer-details-text">{service.details}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
