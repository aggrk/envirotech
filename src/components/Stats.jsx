/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-[#2E7D32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { value: "12+", label: "Years Experience" },
            { value: "300+", label: "Clients Served" },
            { value: "850K", label: "Tons CO₂ Reduced" },
            { value: "98%", label: "Regulatory Compliance Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-4 sm:p-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
