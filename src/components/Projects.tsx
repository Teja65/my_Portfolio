import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section section--muted">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Selected work — live demos and source code on GitHub.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__header">
                <h3>{project.title}</h3>
                <div className="project-card__links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
              <ul className="project-card__tech">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
