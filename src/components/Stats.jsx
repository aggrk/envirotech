/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-[#2E7D32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
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
            { value: "100+", label: "Clients Served" },
            { value: "98%", label: "Regulatory Compliance Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-4 sm:p-6"
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg opacity-90 max-w-[160px] sm:max-w-[200px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
