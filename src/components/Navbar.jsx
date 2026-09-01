import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "Services", path: "/services" },
    { label: "Courses", path: "/courses" },
    { label: "About", path: "/about" },
  ];

  const menuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" data-cursor-text="HOME">
            <img src="/logo.png" alt="Profotech Logo" className="navbar-logo-img" />
            <span>PROFOTECH</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <Button to="/contact" variant="primary" cursorText="OPEN">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? "line-open" : ""}`} />
            <span className={`hamburger-line ${isMobileMenuOpen ? "line-open" : ""}`} />
            <span className={`hamburger-line ${isMobileMenuOpen ? "line-open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="navbar-mobile-overlay"
          >
            <div className="container mobile-overlay-container">
              <div className="mobile-nav-links">
                {navItems.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Link to={item.path} className="mobile-nav-link">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="mobile-cta-wrapper">
                  <Button to="/contact" variant="primary" arrow={true}>
                    Start a Project
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
