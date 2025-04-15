/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#4FC3F7]/10 via-white to-[#AED581]/10 pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background patterns (scaled for responsiveness) */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle, #2E7D32 1px, transparent 1px),
            radial-gradient(circle, #4FC3F7 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 60px 60px", // Smaller pattern for mobile
        }}
      />

      {/* Floating shapes (hidden on small screens, scaled for larger) */}
      <motion.div
        className="hidden sm:block absolute top-1/4 left-4 sm:left-10 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-full bg-[#4FC3F7]/20 blur-2xl"
        animate={{
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/3 right-4 sm:right-10 w-40 sm:w-48 lg:w-64 h-40 sm:h-48 lg:h-64 rounded-full bg-[#AED581]/20 blur-2xl"
        animate={{
          y: [20, -20, 20],
          x: [15, -15, 15],
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Responsive headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#2E7D32] leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">Comprehensive</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] via-[#4FC3F7] to-[#2E7D32] animate-gradient">
              Environmental & Tech Solutions
            </span>
          </motion.h1>

          {/* Responsive subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto md:mx-0 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We combine{" "}
            <span className="font-bold text-[#2E7D32]">
              ecological expertise
            </span>{" "}
            and
            <span className="font-bold text-[#4FC3F7]">
              {" "}
              digital innovation
            </span>{" "}
            to build a sustainable future.
          </motion.p>

          {/* Responsive stats grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              {
                value: "30+",
                label: "Projects",
                bg: "bg-white",
                text: "text-[#2E7D32]",
                shadow: "shadow-md",
              },
              {
                value: "95%",
                label: "Satisfaction",
                bg: "bg-[#2E7D32]",
                text: "text-white",
                shadow: "shadow-md shadow-[#2E7D32]/20",
              },
              {
                value: "12+",
                label: "Years",
                bg: "bg-[#4FC3F7]",
                text: "text-white",
                shadow: "shadow-md shadow-[#4FC3F7]/20",
              },
              {
                value: "360°",
                label: "Solutions",
                bg: "bg-[#AED581]",
                text: "text-white",
                shadow: "shadow-md shadow-[#AED581]/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${item.bg} ${item.text} ${item.shadow} p-3 sm:p-4 rounded-lg border border-white/20`}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: `0 8px 20px ${item.shadow.split("/")[0]}/30`,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + index * 0.1,
                }}
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm opacity-90">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Responsive CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              className="relative bg-[#2E7D32] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg overflow-hidden group"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore Services</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] to-[#4FC3F7] opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.button
              className="border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg relative group"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(46, 125, 50, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get a Consultation</span>
              <motion.span
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#2E7D32] rounded-lg"
                initial={{ borderWidth: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}
