/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#4FC3F7] via-white to-[#AED581] pt-20 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, #2E7D32 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 order-2 md:order-1"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#2E7D32] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">Comprehensive </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7]">
              Environmental & Tech Solutions for a Better Tomorrow
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From Environmental Impact Assessments and Sustainable Wastewater
            Systems to Custom Web & Mobile Applications - we combine ecological
            expertise and digital innovation to shape a greener, smarter future.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              className="bg-[#2E7D32] text-white hover:bg-[#1B5E20] px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg font-medium text-base sm:text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(46, 125, 50, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Explore Our Services
            </motion.button>

            <motion.button
              className="border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-base sm:text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(46, 125, 50, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 relative order-1 md:order-2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt="Modern eco-tech solutions combining nature and technology"
            className="w-full h-auto rounded-2xl shadow-2xl border-4 sm:border-8 border-white"
          />
          <motion.div
            className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-3 sm:p-4 rounded-xl shadow-lg border text-xs sm:text-base"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <div className="text-xl sm:text-2xl font-bold text-[#2E7D32]">
              150+
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Successful Projects
            </div>
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-[#2E7D32] text-white p-3 sm:p-4 rounded-xl shadow-lg text-xs sm:text-base"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <div className="text-xl sm:text-2xl font-bold">95%</div>
            <div className="text-xs sm:text-sm">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
