import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function ContactPage() {
  const officeEmail = "hello@profotech.com";
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    interest: "Development",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  const interests = [
    "Development",
    "Design",
    "Marketing",
    "Education & Training",
    "Consulting",
  ];

  return (
    <PageTransition>
      <div className="contact-page-container section-padding">
        <div className="container">
          {/* Page Header */}
          <Reveal>
            <div className="page-header border-b">
              <span className="text-uppercase-meta">[ INQUIRY ]</span>
              <h1 className="title-large page-title">CONTACT US.</h1>
              <p className="page-intro">
                Tell us what you're building, or how we can help you train your engineering team. Let's create something real.
              </p>
            </div>
          </Reveal>

          {/* Form & Sidebar Grid */}
          <div className="contact-grid">
            {/* Left: Contact Form */}
            <div className="contact-form-col">
              <Reveal>
                {isSubmitted ? (
                  <div className="contact-success-card border">
                    <span className="success-bullet">✓</span>
                    <h2 className="success-heading">SPECIFICATION RECEIVED.</h2>
                    <p className="success-text">
                      Thank you for contacting Profotech. An engineering representative will review your project requirements and respond at <strong>{formState.email}</strong> within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="secondary" arrow={false}>
                      Submit another inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    {/* Name input */}
                    <div className="form-group border-b">
                      <label htmlFor="name" className="text-uppercase-meta form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Jean-Luc Picard"
                        value={formState.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    {/* Email input */}
                    <div className="form-group border-b">
                      <label htmlFor="email" className="text-uppercase-meta form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="jean-luc@starfleet.org"
                        value={formState.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    {/* Organization input */}
                    <div className="form-group border-b">
                      <label htmlFor="org" className="text-uppercase-meta form-label">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="org"
                        id="org"
                        placeholder="Enterprise LLC"
                        value={formState.org}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    {/* Interest Select */}
                    <div className="form-group border-b">
                      <span className="text-uppercase-meta form-label">Primary Interest</span>
                      <div className="interests-selector-grid">
                        {interests.map((interest) => {
                          const isSelected = formState.interest === interest;
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => setFormState({ ...formState, interest })}
                              className={`interest-tag-btn border ${isSelected ? "interest-active" : ""}`}
                            >
                              {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="form-group border-b">
                      <label htmlFor="message" className="text-uppercase-meta form-label">
                        Brief Project Specs
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        placeholder="Describe your goals, tech stack preferences, and timelines..."
                        value={formState.message}
                        onChange={handleChange}
                        className="form-textarea"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="form-submit-wrapper">
                      <Button type="submit" variant="primary" arrow={true} cursorText="SEND">
                        Send Specification
                      </Button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Right: Technical Support Details & Emails */}
            <div className="contact-sidebar-col">
              <Reveal delay={0.15}>
                <div className="contact-sidebar-card border">
                  <span className="text-uppercase-meta sidebar-label">Direct Correspondence</span>
                  <p className="sidebar-detail-text">
                    For general questions, collaborations, or educational enrollments, please email us directly:
                  </p>
                  <a
                    href={`mailto:${officeEmail}`}
                    className="link-editorial sidebar-email"
                    data-cursor="true"
                    data-cursor-text="EMAIL"
                  >
                    {officeEmail}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="contact-sidebar-card border">
                  <span className="text-uppercase-meta sidebar-label">Studio Hours</span>
                  <p className="sidebar-detail-text">
                    Monday — Friday
                    <br />
                    09:00 — 18:00 (GMT+2)
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
