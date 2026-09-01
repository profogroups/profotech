import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksMain = [
    { label: "Work", path: "/work" },
    { label: "Services", path: "/services" },
    { label: "Courses", path: "/courses" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const linksServices = [
    { label: "Development", path: "/services" },
    { label: "Design", path: "/services" },
    { label: "Marketing", path: "/services" },
    { label: "Education", path: "/courses" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", disabled: true },
    { label: "LinkedIn", href: "#", disabled: true },
    { label: "GitHub", href: "#", disabled: true },
  ];

  return (
    <footer className="footer border-t">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            PROFOTECH
          </Link>
          <p className="footer-desc">
            We design and build digital products, technology architectures, and growth platforms for businesses ready to move forward.
          </p>
        </div>

        {/* Links Column 1: Studio */}
        <div className="footer-links-col">
          <span className="text-uppercase-meta footer-col-title">Studio</span>
          <ul className="footer-links-list">
            {linksMain.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="link-editorial footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2: Services */}
        <div className="footer-links-col">
          <span className="text-uppercase-meta footer-col-title">Offerings</span>
          <ul className="footer-links-list">
            {linksServices.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="link-editorial footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 3: Socials */}
        <div className="footer-links-col">
          <span className="text-uppercase-meta footer-col-title">Connect</span>
          <ul className="footer-links-list">
            {socialLinks.map((item) => (
              <li key={item.label}>
                {item.disabled ? (
                  <span className="footer-link-disabled" title="Link pending official release">
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-editorial footer-link">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Metadata */}
      <div className="container footer-bottom border-t">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} Profotech. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="#" className="link-editorial footer-bottom-link">
              Privacy Policy
            </Link>
            <Link to="#" className="link-editorial footer-bottom-link">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
