import { motion } from "framer-motion";

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-image">
        <img src="/img2.png" alt="Lalit Saini" />
      </div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>About Me</h2>

        <p>
          Hi, I'm <span>Lalit Saini</span>, a passionate Full Stack Developer
          focused on building modern, responsive and scalable web applications.
        </p>

        <p>
          I work with React, Django, Python and MySQL to create complete
          end-to-end solutions. I enjoy learning new technologies and turning
          ideas into real-world products.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>4+</h3>
            <p>Projects</p>
          </div>

          <div className="about-card">
            <h3>Full Stack</h3>
            <p>Developer</p>
          </div>

          <div className="about-card">
            <h3>React + Django</h3>
            <p>Specialized</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;