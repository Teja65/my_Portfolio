import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">
          Technologies and tools I work with across the stack.
        </p>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__card">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
