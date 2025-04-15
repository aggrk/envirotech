/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Environmental Impact Assessment",
    "Environmental Auditing",
    "Wastewater Treatment Solutions",
    "Hydrological Modeling",
    "Custom Software Development",
    "Other Inquiry",
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name, value) => {
    if (!value.trim()) return `${name} is required`;
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Invalid email address";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate before submission
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      if (formData.service) formDataToSend.append("service", formData.service);

      const response = await fetch("https://formspree.io/f/xanqrjzy", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStep(3); // Show success message
        setFormData({
          name: "",
          email: "",
          message: "",
          service: "",
        });
        setErrors({});
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full lg:w-1/2 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white"
    >
      <AnimatePresence mode="wait">
        {formStep === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <div className="bg-[#2E7D32]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChatBubbleLeftRightIcon className="h-6 w-6 sm:h-8 sm:w-8 text-[#2E7D32]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-4">
              How can we help you?
            </h2>
            <p className="text-slate-600 mb-6 text-sm sm:text-base">
              Select the type of inquiry that best matches your needs
            </p>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    setFormData({ ...formData, service });
                    setFormStep(1);
                  }}
                  className="p-3 sm:p-4 border border-slate-200 rounded-xl hover:border-[#4FC3F7] hover:bg-[#4FC3F7]/5 transition-all text-left cursor-pointer"
                >
                  <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                    {service}
                  </h3>
                </button>
              ))}
            </div>
            <button
              onClick={() => setFormStep(1)}
              className="mt-4 sm:mt-6 text-[#4FC3F7] hover:underline font-medium text-sm sm:text-base"
            >
              Not sure? Let's chat generally
            </button>
          </motion.div>
        )}

        {formStep === 1 && (
          <motion.form
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              onClick={() => setFormStep(0)}
              className="flex items-center gap-1 text-slate-500 hover:text-[#4FC3F7] mb-4 sm:mb-6 cursor-pointer text-sm sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-4 sm:mb-6">
              Tell us more
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-[#4FC3F7] outline-none transition text-sm sm:text-base"
                  // required
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-[#4FC3F7] outline-none transition text-sm sm:text-base"
                  // required
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {formData.service && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                    Service Interest
                  </label>
                  <div className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 bg-slate-50 text-sm sm:text-base">
                    {formData.service}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-[#4FC3F7] outline-none transition text-sm sm:text-base"
                ></textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "cursor-pointer"
                } text-sm sm:text-base`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
            </div>
          </motion.form>
        )}

        {formStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-6 sm:py-8"
          >
            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-4">
              Message Sent!
            </h2>
            <p className="text-slate-600 mb-6 text-sm sm:text-base">
              Thank you for reaching out. We've received your message and will
              get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setFormStep(0);
                setFormData({
                  name: "",
                  email: "",
                  message: "",
                  service: "",
                });
              }}
              className="text-[#4FC3F7] font-medium hover:underline text-sm sm:text-base cursor-pointer"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
