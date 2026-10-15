import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Lalit<span>Saini</span>
      </a>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <a
          href="#about"
          className={active === "about" ? "active-link" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active-link" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active-link" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#services"
          className={active === "services" ? "active-link" : ""}
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active-link" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
      </nav>

      <div className="nav-icons">
        <a href="https://github.com/lalitsaini27"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/lalit-saini-254534362/"><FaLinkedin /></a>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;