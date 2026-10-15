import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>Lalit<span>Saini</span></h3>
      <p>Full Stack Developer | React | Django | MySQL</p>

      <div className="footer-icons">
        <a href="https://github.com/lalitsaini27"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/lalit-saini-254534362/"><FaLinkedin /></a>
        <a href="mailto:lalit95188@gmail.com"><FaEnvelope /></a>
      </div>

      <small>© 2026 Lalit Saini. All Rights Reserved.</small>
    </footer>
  );
}

export default Footer;