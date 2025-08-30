import React from "react";
import profile from "../assets/profile.jpg";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";


export default function Hero() {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <img src={profile} alt="Zaw Ye Htut" className="profile-pic" />
      <div>
        <h1 className="headline">Digital Marketing & Content Creator</h1>
        <div className="tagline">
          Results-driven Social Media Specialist & Facebook Ads Expert with over 4 years of experience
        </div>
        <p style={{ marginTop: 12, color: "var(--muted)" }}>
          Passionately promoting brands, marketing strategies, and data-driven decision-making to enhance engagement and
          conversions.
        </p>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <a href="https://facebook.com" aria-label="facebook" target="_blank" rel="noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://linkedin.com" aria-label="linkedin" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
            </a>
            <a href="https://telegram.com" aria-label="telegram" target="_blank" rel="noreferrer">
                <FaTelegramPlane />
            </a>
            </div>
        </div>
    </div>
  );
}
