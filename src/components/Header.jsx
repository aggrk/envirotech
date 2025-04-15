/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = ["Home", "Services", "Projects", "About"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();

  // Animation variants
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
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto py-3 overflow-x-hidden">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-8 h-8 rounded-full bg-[#2E7D32]"></div>
            <span className="text-xl font-bold text-[#2E7D32]">
              ArdhiDigital
            </span>
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
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-[#2E7D32] font-medium text-sm lg:text-base transition-colors ${
                      isActive ? "text-[#2E7D32] font-semibold" : ""
                    }`
                  }
                >
                  {item}
                  {({ isActive }) =>
                    isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2E7D32]"
                        layoutId="activeNavItem"
                        transition={{ duration: 0.3 }}
                      />
                    )
                  }
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              className="bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-sm lg:text-base cursor-pointer hover:bg-[#1B5E20] transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(46, 125, 50, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50"
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        exit="exit"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-[#455A64] hover:text-[#2E7D32]"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${
                      isActive ? "text-[#2E7D32]" : "text-gray-800"
                    } hover:text-[#2E7D32] transition-colors`
                  }
                  onClick={toggleMobileMenu}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-auto pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => {
                navigate("/contact");
                toggleMobileMenu();
              }}
              className="w-full bg-[#2E7D32] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#1B5E20] transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Overlay */}
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
