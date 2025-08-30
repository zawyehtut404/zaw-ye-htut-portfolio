import React from "react";

const skillData = [
  { title: "Social Media Management", bullets: ["Facebook", "TikTok", "Instagram", "Telegram"] },
  { title: "Facebook Ads & Digital Marketing", bullets: ["Ad Setup", "Audience Targeting", "Campaign Optimization"] },
  { title: "Content Creation & Graphic Design", bullets: ["Canva", "Photoshop (training)"] },
  { title: "Facebook Unlocking & Reports", bullets: ["Account recovery", "Security reports"] },
];

export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div className="cards">
        {skillData.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <ul>
              {s.bullets.map((b) => (
                <li key={b} style={{ color: "var(--muted)" }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
