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
    <footer className="bg-[#1B5E20] text-white py-12 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#4FC3F7]"></div>
              <span className="text-lg sm:text-xl font-bold">ArdhiDigital</span>
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
              {services.map((service, i) => (
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
              <div>6825 Kibwerege</div>
              <div>Kinondoni, DAR ES SALAAM</div>
              <div>elizephanigodwini@rocketmail.com</div>
              <div>+255 717 396 886</div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm opacity-80 mb-4 sm:mb-0">
            © {new Date().getFullYear()} ArdhiDigital Solutions. All rights
            reserved.
          </div>
          <div className="flex gap-2 sm:gap-4">
            {[
              {
                name: "Twitter",
                icon: faXTwitter,
                url: "https://x.com/kentrisk",
              },
              {
                name: "LinkedIn",
                icon: faLinkedin,
                url: "https://linkedin.com/company/kentrisk",
              },
              {
                name: "Facebook",
                icon: faFacebook,
                url: "https://facebook.com/kentrisk",
              },
              {
                name: "Instagram",
                icon: faInstagram,
                url: "https://instagram.com/kentrisk",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center"
                whileHover={{
                  backgroundColor: "rgba(79, 195, 247, 0.3)",
                  scale: 1.1,
                }}
                aria-label={social.name}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
