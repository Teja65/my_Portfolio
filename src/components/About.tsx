import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__card">
          <p>{personalInfo.about}</p>
          <ul className="about__meta">
            <li>
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <span>Focus</span>
              <strong>Full Stack · MERN · JavaScript</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
