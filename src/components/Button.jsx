import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  arrow = true,
  className = "",
  cursorText = "",
  ...props
}) {
  const isLink = !!to;
  
  const classNames = `btn btn-${variant} ${className}`;
  const cursorProps = cursorText ? { "data-cursor": "true", "data-cursor-text": cursorText } : {};

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn-arrow" style={{ display: "inline-block" }}>
          →
        </span>
      )}
    </>
  );

  if (isLink) {
    return (
      <Link to={to} className={classNames} {...cursorProps} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames} {...cursorProps} {...props}>
      {content}
    </button>
  );
}
