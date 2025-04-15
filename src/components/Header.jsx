/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = ["Home", "Services", "Projects", "About"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileNavigate = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`sticky top-0 z-50 ${
        isScrolled ? "bg-white/95 shadow-md" : "bg-white/90"
      } backdrop-blur-md transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 rounded-full bg-[#2E7D32]"></div>
          <span className="text-xl font-bold text-[#2E7D32]">ArdhiDigital</span>
        </motion.div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-green-800 font-medium text-sm lg:text-base ${
                    isActive ? "text-green-800" : ""
                  }`
                }
              >
                {item}
                {({ isActive }) =>
                  isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-800"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )
                }
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className="p-4 flex flex-col items-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={i}
                  className="w-full text-center"
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.2, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-3 w-full text-gray-700 hover:text-green-800 transition-colors duration-300 font-medium ${
                        isActive ? "text-green-800" : ""
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                className="w-full mt-2"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: NAV_ITEMS.length * 0.1 + 0.1 }}
              >
                <button
                  className="w-full bg-green-800 text-white px-4 py-3 rounded-lg font-medium"
                  onClick={() => handleMobileNavigate("/contact")}
                >
                  Get in Touch
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
