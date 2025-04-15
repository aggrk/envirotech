/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "../utils/data";
import * as Icons from "@heroicons/react/24/outline";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  // Group services by category
  const serviceCategories = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            Our Services
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#455A64]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive <span className="text-[#2E7D32]">Solutions</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            We provide integrated environmental and technology services to help
            organizations achieve sustainability goals and regulatory
            compliance.
          </motion.p>
        </motion.div>

        {Object.entries(serviceCategories).map(
          ([category, categoryServices]) => (
            <div key={category} className="mb-12 sm:mb-16">
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-6 sm:mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {category} Services
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, i) => {
                  const Icon = Icons[service.icon];
                  if (!Icon) {
                    console.error(`Icon ${service.icon} not found`);
                    return null;
                  }
                  return (
                    <motion.div
                      key={i}
                      className={`p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-md border border-transparent transition-all duration-300 ${
                        hoveredService === service.title
                          ? "border-[#2E7D32] shadow-lg"
                          : ""
                      }`}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onMouseEnter={() => setHoveredService(service.title)}
                      onMouseLeave={() => setHoveredService(null)}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      // transition={{ delay: i * 0.1 + 0.4 }}
                    >
                      <div
                        className={`${
                          service.color === "blue"
                            ? "bg-[#4FC3F7]/10"
                            : "bg-[#2E7D32]/10"
                        } w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                      >
                        <Icon className="text-[#2E7D32] h-6 w-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#2E7D32] mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      <motion.a
                        href="#"
                        className="text-[#4FC3F7] font-medium inline-flex items-center text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
