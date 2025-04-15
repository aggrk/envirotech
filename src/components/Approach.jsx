/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Approach() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#455A64]">
              Our <span className="text-[#2E7D32]">Methodology</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8">
              We follow a rigorous, science-based approach to deliver solutions
              that are both environmentally effective and economically viable.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Assessment & Analysis",
                  description:
                    "Comprehensive data collection and evaluation to understand your unique challenges and opportunities.",
                },
                {
                  title: "Solution Design",
                  description:
                    "Customized approaches that integrate environmental best practices with technological innovation.",
                },
                {
                  title: "Implementation & Support",
                  description:
                    "Seamless execution with ongoing monitoring and optimization to ensure long-term success.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.4 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#2E7D32]/10 flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2E7D32]"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#455A64] text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team analyzing environmental data"
                className="rounded-xl sm:rounded-2xl shadow-xl w-full"
              />
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-[#4FC3F7] text-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg max-w-xs text-xs sm:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-semibold mb-1 sm:mb-2">Data-Driven</div>
                <p>
                  Our decisions are grounded in robust data analysis and
                  scientific research
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
