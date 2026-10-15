import { useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { projects } from "../data";

function Projects() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.25,
    });
  }, []);

  return (
    <section className="section projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >

            <img src={project.image} alt={project.title} className="project-image"/>

            <span className="project-number">0{index + 1}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;