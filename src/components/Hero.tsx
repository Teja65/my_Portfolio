import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__title">{personalInfo.title}</p>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <Link className="btn btn--primary" to="/projects">
              View Projects
            </Link>
            <a
              className="btn btn--outline"
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
            >
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
      </div>
    </section>
  );
}
