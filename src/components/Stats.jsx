import { motion } from "framer-motion";

const stats = [
  { number: "4+", label: "Projects Completed" },
  { number: "15+", label: "Technologies" },
  { number: "Full Stack", label: "Development Focus" },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            className="stats-card"
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
