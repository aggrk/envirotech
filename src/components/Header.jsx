/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = ["Home", "Services", "Projects", "About"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#2E7D32]"></div>
          <span className="text-xl font-bold text-[#2E7D32]">ArdhiDigital</span>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-[#455A64] hover:text-[#2E7D32] focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop menu */}
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
            className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm lg:text-base cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(46, 125, 50, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact Us"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-[#F1F8E9] to-white shadow-lg border-l border-[#2E7D32]/20 z-50"
        style={{ background: "linear-gradient(to bottom, #F1F8E9, #FFFFFF)" }} // Fallback CSS gradient
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button inside menu */}
          <div className="flex justify-end mb-6">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-[#455A64] hover:text-[#2E7D32] focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu links */}
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-800 font-medium text-lg hover:text-green-800"
              >
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-green-800" : "text-gray-800"
                  }
                  onClick={toggleMobileMenu}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile "Get in Touch" button */}
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink
              to="/contact"
              className="block bg-green-800 text-white px-6 py-3 rounded-lg text-center text-base font-medium"
              onClick={toggleMobileMenu}
            >
              Get in Touch
            </NavLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMobileMenu}
        />
      )}
    </motion.nav>
  );
}
