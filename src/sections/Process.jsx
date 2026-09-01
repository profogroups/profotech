import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Research & Strategy",
      desc: "We dive deep into your business objectives, analyze user needs, map technical requirements, and define clear product metrics before writing a single line of code.",
    },
    {
      num: "02",
      title: "DESIGN",
      subtitle: "UI/UX & Identity",
      desc: "We translate strategy into detailed user flows, high-fidelity wireframes, premium typography layouts, and functional prototypes, creating an intuitive product design system.",
    },
    {
      num: "03",
      title: "BUILD",
      subtitle: "Development & Integration",
      desc: "Our engineering team develops scalable frontends, clean APIs, secure backend structures, and automated tests, ensuring a robust, maintainable foundation.",
    },
    {
      num: "04",
      title: "LAUNCH",
      subtitle: "Testing & Deployment",
      desc: "We perform rigorous quality assurance checks across screen sizes, run speed benchmarks, optimize search visibility settings, and deploy to server architectures.",
    },
    {
      num: "05",
      title: "GROW",
      subtitle: "Optimization & Support",
      desc: "Post-launch, we support your product team by monitoring performance, optimizing funnel conversions, updating features, and tracking analytical metrics to scale growth.",
    },
  ];

  return (
    <section className="process-section section-padding border-b" id="process">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="process-header">
            <span className="text-uppercase-meta">[ METHODOLOGY ]</span>
            <h2 className="title-section process-title">FROM IDEA TO IMPACT.</h2>
          </div>
        </Reveal>

        {/* Process Split Grid */}
        <div className="process-grid-container">
          {/* Left Sticky Column (Desktop Only) */}
          <div className="process-sticky-col">
            <div className="sticky-display-card">
              <span className="sticky-number text-uppercase-meta">
                Step {steps[activeStep].num}
              </span>
              <motion.h3
                key={steps[activeStep].title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="sticky-title"
              >
                {steps[activeStep].title}
              </motion.h3>
              <motion.span
                key={steps[activeStep].subtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="sticky-subtitle text-uppercase-meta"
              >
                {steps[activeStep].subtitle}
              </motion.span>
              <motion.p
                key={steps[activeStep].desc}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="sticky-desc"
              >
                {steps[activeStep].desc}
              </motion.p>
            </div>
          </div>

          {/* Right Scrollable Column */}
          <div className="process-scroll-col">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.num}
                  className={`process-scroll-item border-b ${isActive ? "scroll-item-active" : ""}`}
                  viewport={{ once: false, margin: "-30% 0px -40% 0px" }}
                  onViewportEnter={() => setActiveStep(index)}
                >
                  {/* Small Screen Layout Content */}
                  <div className="scroll-item-header">
                    <span className="scroll-item-num">{step.num}</span>
                    <div className="scroll-item-titles">
                      <h3 className="scroll-item-title">{step.title}</h3>
                      <span className="scroll-item-subtitle text-uppercase-meta">{step.subtitle}</span>
                    </div>
                  </div>
                  <p className="scroll-item-desc-mobile">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
