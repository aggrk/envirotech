/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { caseStudies } from "../utils/data";

export default function CaseStudy() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full mb-3 sm:mb-4 text-xs sm:text-sm font-medium"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Work
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#455A64]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Impactful <span className="text-[#2E7D32]">Case Studies</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Explore how we've helped organizations solve complex environmental
            challenges with innovative solutions.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Case Study Selector */}
          <motion.div
            className="lg:w-1/3 space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                className={`p-4 sm:p-6 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                  activeCaseStudy === i
                    ? "bg-[#2E7D32] text-white shadow-lg"
                    : "bg-white shadow-md hover:shadow-lg"
                }`}
                onClick={() => setActiveCaseStudy(i)}
                whileHover={{ scale: activeCaseStudy === i ? 1 : 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  {study.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    activeCaseStudy === i ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {study.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {study.services.map((service, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-1 rounded-full ${
                        activeCaseStudy === i
                          ? "bg-white/20"
                          : "bg-[#2E7D32]/10 text-[#2E7D32]"
                      }`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Case Study Display */}
          <motion.div
            className="lg:w-2/3 bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
            key={activeCaseStudy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-48 sm:h-64 md:h-80 w-full overflow-hidden">
              <motion.img
                src={caseStudies[activeCaseStudy].image}
                alt={caseStudies[activeCaseStudy].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-3 sm:mb-4">
                {caseStudies[activeCaseStudy].title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base mb-4 sm:mb-6">
                {caseStudies[activeCaseStudy].description}
              </p>
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-[#455A64] text-base sm:text-lg">
                  Key Results:
                </h4>
                <ul className="space-y-2">
                  {caseStudies[activeCaseStudy].results.map((result, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E7D32] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700 text-sm sm:text-base">
                        {result}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.button
                className="mt-6 sm:mt-8 border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium text-sm sm:text-base"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(46, 125, 50, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Read Full Case Study
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Metrics Section Below Case Studies */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "90%", label: "Client Retention" },
            { value: "850K", label: "Tons CO₂ Reduced" },
            { value: "25+", label: "Technology Solutions" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm flex flex-col items-center justify-center text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                  },
                },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#2E7D32] mb-1 sm:mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
