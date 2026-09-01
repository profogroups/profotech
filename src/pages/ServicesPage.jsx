import React from "react";
import { services } from "../data/services";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="services-page-container section-padding">
        <div className="container">
          {/* Page Header */}
          <Reveal>
            <div className="page-header border-b">
              <span className="text-uppercase-meta">[ CAPABILITIES ]</span>
              <h1 className="title-large page-title">OUR SERVICES.</h1>
              <p className="page-intro">
                We combine technical engineering with creative aesthetics to deliver systems, platforms, and experiences that scale businesses.
              </p>
            </div>
          </Reveal>

          {/* Detailed Services Listing */}
          <div className="services-detailed-list">
            {services.map((service, index) => {
              const displayIndex = String(index + 1).padStart(2, "0");
              return (
                <div key={service.id} className="service-detail-item border-b">
                  <Reveal>
                    <div className="service-detail-grid">
                      {/* Left: Identifier & Title */}
                      <div className="service-detail-left">
                        <span className="service-detail-num">{displayIndex} //</span>
                        <h2 className="service-detail-name">{service.title}</h2>
                        <p className="service-detail-desc-main">{service.description}</p>
                      </div>

                      {/* Right: Technical Capabilities list & approach details */}
                      <div className="service-detail-right">
                        <div className="capabilities-block">
                          <span className="text-uppercase-meta details-label">Service Capabilities</span>
                          <ul className="capabilities-detail-list">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="capability-detail-item border">
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="approach-block border">
                          <span className="text-uppercase-meta details-label">Our Approach</span>
                          <p className="approach-text">{service.details}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <Reveal>
            <div className="services-page-footer">
              <span className="text-uppercase-meta">Ready to build?</span>
              <h2 className="services-footer-heading">LET'S ALIGN ON YOUR SPECIFICATIONS.</h2>
              <Button to="/contact" variant="primary" arrow={true} cursorText="OPEN">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
}
