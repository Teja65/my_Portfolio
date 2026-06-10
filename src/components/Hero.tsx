import { useState } from "react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__title">{personalInfo.title}</p>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn--outline" href={personalInfo.resumePath} download>
              Download Resume
            </a>
          </div>

          <div className="hero__social">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          {!imgError ? (
            <img
              className="hero__photo"
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="hero__photo hero__photo--placeholder" aria-hidden>
              {initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
