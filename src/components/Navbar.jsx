import React from "react";

export default function Navbar() {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav style={{ width: "100%" }}>
      <div className="logo">Zaw Ye Htut</div>
      <div className="menu" aria-label="Main navigation">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`}>
            {it.label}
          </a>
        ))}
        <a className="cta" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
