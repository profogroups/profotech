import React, { useState } from "react";
import { courses } from "../data/courses";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <PageTransition>
      <div className="courses-page-container section-padding">
        <div className="container">
          {/* Page Header */}
          <Reveal>
            <div className="page-header border-b">
              <span className="text-uppercase-meta">[ ACADEMY CATALOG ]</span>
              <h1 className="title-large page-title">OUR COURSES.</h1>
              <p className="page-intro">
                Practical engineering training designed by developers. We teach building real projects, reading codebases, and shipping real software.
              </p>
            </div>
          </Reveal>

          {/* Interactive Courses Split Layout */}
          <div className="courses-page-split">
            {/* Left: Interactive Course Selector Column */}
            <div className="courses-page-selector border-r">
              <span className="text-uppercase-meta selector-meta-title">Available Modules</span>
              <div className="selector-list">
                {courses.map((course) => {
                  const isSelected = selectedCourse.id === course.id;
                  return (
                    <button
                      key={course.id}
                      onClick={() => setSelectedCourse(course)}
                      className={`selector-item border-b ${isSelected ? "selector-item-active" : ""}`}
                    >
                      <div className="selector-item-header">
                        <span className="selector-duration">{course.duration}</span>
                        <span className="selector-level text-uppercase-meta">{course.level}</span>
                      </div>
                      <h3 className="selector-title">{course.title}</h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Active Course Detail Card View */}
            <div className="courses-page-detail-view">
              <Reveal key={selectedCourse.id}>
                <div className="course-detail-view-card">
                  <div className="view-card-header border-b">
                    <span className="text-uppercase-meta duration-flag">{selectedCourse.duration}</span>
                    <span className="flag-divider">/</span>
                    <span className="text-uppercase-meta format-flag">{selectedCourse.format}</span>
                  </div>

                  <div className="view-card-body">
                    <h2 className="view-card-title">{selectedCourse.title}</h2>
                    <p className="view-card-desc">{selectedCourse.description}</p>

                    {/* Syllabus Breakdown */}
                    <div className="view-card-syllabus">
                      <span className="text-uppercase-meta section-label-meta">Curriculum modules</span>
                      <ul className="syllabus-detail-view-list">
                        {selectedCourse.syllabus.map((subject, idx) => (
                          <li key={idx} className="syllabus-detail-view-item">
                            <span className="syllabus-num">0{idx + 1} //</span>
                            <p className="syllabus-text">{subject}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mentorship features */}
                    <div className="view-card-features">
                      <span className="text-uppercase-meta section-label-meta">What's Included</span>
                      <ul className="features-detail-view-list">
                        {selectedCourse.features.map((feature, idx) => (
                          <li key={idx} className="feature-detail-view-item">
                            <span className="feature-bullet border">✓</span>
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="view-card-footer border-t">
                    <div className="footer-details">
                      <span className="footer-meta text-uppercase-meta">Format</span>
                      <span className="footer-value">{selectedCourse.format}</span>
                    </div>
                    <Button to="/contact" variant="primary" arrow={true} cursorText="ENROLL">
                      Apply For Cohort
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
