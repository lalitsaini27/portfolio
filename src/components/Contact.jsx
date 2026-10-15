import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let&apos;s Work Together
        </motion.h2>

        <div className="contact-container">
          <motion.div
            className="contact-main"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="contact-badge">Available for Projects</span>
            <h3>Have an idea? Let&apos;s build it.</h3>
            <p>
              I can help you build modern websites, full-stack web apps,
              responsive UI, Django backend and deployment-ready projects.
            </p>

            <div className="contact-actions">
              <a href="mailto:lalit95188@gmail.com" className="btn primary">
                <FaEnvelope /> Send Email
              </a>
              <a href="tel:9518828806" className="btn ghost">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <a href="mailto:lalit95188@gmail.com" className="contact-row">
              <FaEnvelope />
              <div>
                <span>Email</span>
                <p>lalit95188@gmail.com</p>
              </div>
            </a>

            <a href="tel:9518828806" className="contact-row">
              <FaPhoneAlt />
              <div>
                <span>Phone</span>
                <p>9518828806</p>
              </div>
            </a>

            <a
              href="https://github.com/lalitsaini27"
              target="_blank"
              rel="noreferrer"
              className="contact-row"
            >
              <FaGithub />
              <div>
                <span>GitHub</span>
                <p>https://github.com/lalitsaini27</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/lalit-saini-254534362/"
              target="_blank"
              rel="noreferrer"
              className="contact-row"
            >
              <FaLinkedin />
              <div>
                <span>LinkedIn</span>
                <p>https://www.linkedin.com/in/lalit-saini-254534362/</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/919518828806"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Contact;