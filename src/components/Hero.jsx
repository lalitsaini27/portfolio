import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";

function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 18;
      const y = (window.innerHeight / 2 - e.clientY) / 18;

      card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
    };

    const handleLeave = () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="hero section" id="home">
      <div className="hero-content">

        <motion.div
         className="availability-badge"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
        >
         <span></span> Available For Freelance Work
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Lalit Saini
        </motion.h1>

        <h2>
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Developer",
              "Django Developer",
              "Frontend Designer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>

        <p className="hero-text">
          Building modern, responsive and scalable web applications using
          React, Django, Python and MySQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn ghost">Contact Me</a>
        </div>

        <div className="hero-stack">
          <span>React</span>
          <span>Django</span>
          <span>Python</span>
          <span>MySQL</span>
        </div>

        <div className="hero-social">
          <a href="https://github.com/lalitsaini27"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/lalit-saini-254534362/"><FaLinkedin /></a>
          <a href="mailto:lalit95188@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="model-card" ref={cardRef}>
          <div className="floating-code code-1">React</div>
          <div className="floating-code code-2">Django</div>
          <div className="floating-code code-3">MySQL</div>
          <div className="floating-code code-4">Python</div>
          <div className="floating-code code-5">Figma</div>
          <div className="floating-code code-6">GitHub</div>
          <div className="floating-code code-7">REST API</div>

          <div className="developer-model">
            <img src="/img1.png" alt="3D Developer" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;