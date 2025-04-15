/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { services } from "../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white py-12 px-4 sm:px-6 w-full overflow-hidden">
      {/* Container with max-width matching your layout */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4FC3F7]"></div>
              <span className="text-xl sm:text-2xl font-bold">
                ArdhiDigital
              </span>
            </div>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Integrating environmental expertise with technological innovation
              for sustainable solutions.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-5">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {service.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["About Us", "Our Team", "Careers", "Newsroom"].map(
                (item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-5">
              Contact
            </h3>
            <address className="not-italic text-sm sm:text-base opacity-80 space-y-2 sm:space-y-3 leading-relaxed">
              <div>6825 Kibwerege</div>
              <div>Kinondoni, DAR ES SALAAM</div>
              <div>elizephanigodwini@rocketmail.com</div>
              <div>+255 717 396 886</div>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm sm:text-base opacity-80 text-center sm:text-left">
            © {new Date().getFullYear()} ArdhiDigital Solutions. All rights
            reserved.
          </div>
          <div className="flex gap-3 sm:gap-4">
            {[
              { name: "Twitter", icon: faXTwitter, url: "#" },
              { name: "LinkedIn", icon: faLinkedin, url: "#" },
              { name: "Facebook", icon: faFacebook, url: "#" },
              { name: "Instagram", icon: faInstagram, url: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4FC3F7]/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={social.icon} className="text-lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
