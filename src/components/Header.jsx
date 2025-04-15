/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = ["Home", "Services", "Projects", "About", "Contact"];

export default function Header() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#2E7D32]"></div>
          <span className="text-xl font-bold text-[#2E7D32]">EnviroTech</span>
        </motion.div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-md text-[#455A64] hover:text-[#2E7D32] focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {NAV_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="text-gray-700 hover:text-green-800 font-medium text-sm lg:text-base"
              whileHover={{ scale: 1.1, color: "#2E7D32" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "text-green-800" : "")}
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
          <motion.button
            className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm lg:text-base"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(46, 125, 50, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact Us"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
