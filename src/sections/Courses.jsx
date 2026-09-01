import React from "react";
import { courses } from "../data/courses";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function Courses() {
  // Show first 2 or 3 courses on home landing, with a CTA to view all
  const landingCourses = courses.slice(0, 3);

  return (
    <section className="courses-section section-padding border-b" id="courses">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="courses-header-grid">
            <div>
              <span className="text-uppercase-meta">[ TRAINING ACADEMY ]</span>
              <h2 className="title-section courses-title">LEARN. BUILD. BECOME.</h2>
            </div>
            <div className="courses-header-right">
              <p className="courses-intro">
                Practical technology education built around real projects, modern tools, and production workflows. Designed by working engineers.
              </p>
              <Button to="/courses" variant="secondary" arrow={true} cursorText="OPEN">
                Explore All Courses
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Courses Grid */}
        <div className="courses-grid">
          {landingCourses.map((course) => (
            <Reveal key={course.id}>
              <div className="course-card border">
                <div className="course-card-header border-b">
                  <span className="text-uppercase-meta course-meta-duration">
                    {course.duration}
                  </span>
                  <span className="course-meta-divider">/</span>
                  <span className="text-uppercase-meta course-meta-level">
                    {course.level}
                  </span>
                </div>
                
                <div className="course-card-body">
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-desc">{course.description}</p>
                  
                  {/* Key Module Highlight */}
                  <div className="course-syllabus-preview">
                    <span className="text-uppercase-meta syllabus-preview-title">
                      Core Subjects Included
                    </span>
                    <ul className="syllabus-preview-list">
                      {course.syllabus.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="syllabus-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="course-card-footer border-t">
                  <span className="course-format-text">{course.format}</span>
                  <Button to={`/courses`} variant="secondary" arrow={true} className="course-card-btn" cursorText="EXPLORE">
                    View
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
