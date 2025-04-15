/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-40 h-40 rounded-full bg-[#4FC3F7]/10 blur-2xl sm:w-64 sm:h-64 sm:top-20 sm:left-10"></div>
        <div className="absolute bottom-5 right-5 w-48 h-48 rounded-full bg-[#2E7D32]/10 blur-2xl sm:w-80 sm:h-80 sm:bottom-10 sm:right-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E7D32] mb-4">
            Let's Build{" "}
            <span className="text-[#4FC3F7]">Sustainable Solutions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're ready to start a project or just exploring options,
            we're here to help.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0 space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-6 flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                How to Reach Us
              </h2>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full">
                    <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                      Email Us
                    </h3>
                    <div className="flex flex-col">
                      <a
                        href="mailto:elizephanigodwini@rocketmail.com"
                        className="text-[#4FC3F7] hover:underline text-sm sm:text-base"
                      >
                        elizephanigodwini@rocketmail.com
                      </a>
                      <a
                        href="mailto:kennedy.phinias.com"
                        className="text-[#4FC3F7] hover:underline text-sm sm:text-base"
                      >
                        kennedy.phinias@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full">
                    <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                      Call Us
                    </h3>
                    <div className="flex flex-col">
                      <a
                        href="tel:+255717396886"
                        className="text-[#4FC3F7] hover:underline text-sm sm:text-base"
                      >
                        +255717 396 886
                      </a>
                      <a
                        href="tel:+255626689808"
                        className="text-[#4FC3F7] hover:underline text-sm sm:text-base"
                      >
                        +255626 689 808
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full">
                    <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                      Visit Us
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      6825 Kibwerege
                      <br />
                      Kinondoni, DAR ES SALAAM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                      Response Time
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      We typically respond within{" "}
                      <span className="font-semibold">24 hours</span> during
                      business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-6">
                Our Process
              </h2>
              <div className="space-y-4">
                {[
                  "1. Initial consultation to understand your needs",
                  "2. Custom solution proposal within 3 business days",
                  "3. Collaborative refinement of approach",
                  "4. Project kickoff with dedicated team",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#4FC3F7]/10 p-1 rounded-full mt-1">
                      <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#4FC3F7]" />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
