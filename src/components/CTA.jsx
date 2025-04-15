/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Enhance Your Environmental Performance?
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Our team of environmental and technology experts is ready to help you
          navigate regulations, implement sustainable solutions, and leverage
          technology for better environmental outcomes.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-white text-[#2E7D32] hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg font-medium text-sm sm:text-base md:text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Request Consultation
          </motion.button>
          <motion.button
            className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-sm sm:text-base md:text-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
