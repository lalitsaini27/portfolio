import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const faqs = [
  {
    q: "What technologies do you work with?",
    a: "I work with React, JavaScript, Python, Django, MySQL, Bootstrap, CSS and Figma.",
  },
  {
    q: "Do you build full-stack websites?",
    a: "Yes, I can build complete websites with frontend, backend, database and deployment setup.",
  },
  {
    q: "Can you make responsive websites?",
    a: "Yes, I create websites that work properly on mobile, tablet and desktop.",
  },
  {
    q: "Do you provide project updates later?",
    a: "Yes, I can help with bug fixing, content updates and feature improvements.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section faq" id="faq">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        FAQ
      </motion.h2>

      <div className="faq-box">
        {faqs.map((item, index) => (
          <div className="faq-item" key={item.q}>
            <button onClick={() => setOpen(open === index ? null : index)}>
              <span>{item.q}</span>
              <FaPlus className={open === index ? "rotate" : ""} />
            </button>

            {open === index && <p>{item.a}</p>}
          </div>
        ))}
      </div>

      
    </section>
  );
}

export default FAQ;