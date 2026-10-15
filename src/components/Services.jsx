import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    text: "Modern, responsive and animated user interfaces using React, JavaScript and CSS.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    text: "Secure backend systems with Django, REST APIs, authentication and database handling.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    text: "Websites that look clean and professional on mobile, tablet and desktop.",
  },
  {
    icon: <FaRocket />,
    title: "Website Deployment",
    text: "Deploying projects on Vercel, Netlify or server with basic setup guidance.",
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        What I Can Do
      </motion.h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <motion.div
            className="service-box"
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span>0{index + 1}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;