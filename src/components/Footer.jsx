/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { services } from "../utils/data";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#4FC3F7]"></div>
              <span className="text-lg sm:text-xl font-bold">EnviroTech</span>
            </div>
            <p className="text-xs sm:text-sm opacity-80">
              Integrating environmental expertise with technological innovation
              for sustainable solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Services
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {services.slice(0, 5).map((service, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm opacity-80 hover:opacity-100"
                  >
                    {service.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {["About Us", "Our Team", "Careers", "Newsroom"].map(
                (item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm opacity-80 hover:opacity-100"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Contact
            </h3>
            <address className="not-italic text-xs sm:text-sm opacity-80 space-y-1 sm:space-y-2">
              <div>123 Greenway Blvd</div>
              <div>EcoCity, EC 12345</div>
              <div>info@envirotech.example</div>
              <div>+1 (555) 123-4567</div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm opacity-80 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} EnviroTech Solutions. All rights
            reserved.
          </div>
          <div className="flex gap-2 sm:gap-4">
            {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
              (social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-xs sm:text-sm"
                  whileHover={{
                    backgroundColor: "rgba(79, 195, 247, 0.3)",
                    scale: 1.1,
                  }}
                >
                  {social}
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
