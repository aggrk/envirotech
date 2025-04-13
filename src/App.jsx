import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const services = [
    {
      title: "Environmental Impact Assessment",
      description:
        "Comprehensive evaluations to identify potential environmental effects of proposed projects and developments.",
      icon: "📊",
      category: "Environmental",
    },
    {
      title: "Environmental Auditing",
      description:
        "Systematic reviews of organizational compliance with environmental regulations and best practices.",
      icon: "🔍",
      category: "Environmental",
    },
    {
      title: "Environmental Management Plan",
      description:
        "Strategic frameworks for minimizing environmental impact while achieving project objectives.",
      icon: "📝",
      category: "Environmental",
    },
    {
      title: "Building Services",
      description:
        "Sustainable design and implementation of mechanical, electrical, and plumbing systems for green buildings.",
      icon: "🏢",
      category: "Engineering",
    },
    {
      title: "Onsite Wastewater Treatment",
      description:
        "Custom sustainable solutions for wastewater management in areas without centralized systems.",
      icon: "💧",
      category: "Engineering",
    },
    {
      title: "Hydrological Modelling",
      description:
        "Advanced simulations to predict water movement and manage water resources effectively.",
      icon: "🌊",
      category: "Engineering",
    },
    {
      title: "Web Application Development",
      description:
        "Custom web solutions for environmental data management, visualization, and reporting.",
      icon: "🖥️",
      category: "IT Solutions",
    },
    {
      title: "Mobile Application Development",
      description:
        "iOS and Android apps for field data collection, monitoring, and environmental compliance.",
      icon: "📱",
      category: "IT Solutions",
    },
    {
      title: "System Maintenance",
      description:
        "Ongoing support and optimization for environmental management and monitoring systems.",
      icon: "⚙️",
      category: "IT Solutions",
    },
    {
      title: "Database Design & Management",
      description:
        "Structured data solutions for environmental monitoring, reporting, and analysis.",
      icon: "🗄️",
      category: "IT Solutions",
    },
  ];

  // Group services by category
  const serviceCategories = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const caseStudies = [
    {
      title: "Industrial EIA Compliance",
      description:
        "How we helped a manufacturing plant navigate complex environmental regulations while expanding operations.",
      results: [
        "100% compliance with all environmental regulations",
        "30% reduction in projected environmental impact",
        "Project approval in record time",
      ],
      image:
        "https://images.unsplash.com/photo-1581093450021-4a7360e9aab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      services: [
        "Environmental Impact Assessment",
        "Environmental Management Plan",
      ],
    },
    {
      title: "Smart Water Management System",
      description:
        "Development of a custom web and mobile solution for real-time water quality monitoring.",
      results: [
        "40% reduction in water testing costs",
        "Instant alerts for contamination events",
        "Automated regulatory reporting",
      ],
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      services: [
        "Web Application Development",
        "Hydrological Modelling",
        "Database Design & Management",
      ],
    },
    {
      title: "Sustainable Community Wastewater",
      description:
        "Implementation of an onsite treatment system for a remote community with sensitive ecosystems.",
      results: [
        "95% reduction in nutrient discharge",
        "60% lower energy consumption than conventional systems",
        "System lifespan of 25+ years",
      ],
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      services: ["Onsite Wastewater Treatment", "Environmental Auditing"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-[#2E7D32]"></div>
            <span className="text-xl font-bold text-[#2E7D32]">EnviroTech</span>
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item, i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#455A64] hover:text-[#2E7D32] font-medium"
                  whileHover={{ scale: 1.1, color: "#2E7D32" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
          <motion.button
            className="bg-[#2E7D32] text-white px-4 py-2 rounded-lg hidden md:block"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(46, 125, 50, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#4FC3F7] via-white to-[#AED581] pt-24 pb-32 px-8 md:px-20 overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle, #2E7D32 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-[#2E7D32] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Integrated</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7]">
                Eco-Tech Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-700 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Combining environmental expertise with cutting-edge technology to
              deliver sustainable solutions that meet regulatory requirements
              and drive operational efficiency.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-[#2E7D32] text-white hover:bg-[#1B5E20] px-8 py-4 rounded-xl shadow-lg font-medium text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 20px rgba(46, 125, 50, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Explore Our Services
              </motion.button>

              <motion.button
                className="border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 px-8 py-4 rounded-xl font-medium text-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(46, 125, 50, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Sustainable technology in nature"
              className="w-full h-auto rounded-2xl shadow-2xl border-8 border-white"
            />
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg border"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="text-2xl font-bold text-[#2E7D32]">150+</div>
              <div className="text-sm text-slate-600">Successful Projects</div>
            </motion.div>
            <motion.div
              className="absolute -top-8 -right-8 bg-[#2E7D32] text-white p-4 rounded-xl shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2E7D32] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              { value: "12+", label: "Years Experience" },
              { value: "300+", label: "Clients Served" },
              { value: "850K", label: "Tons CO₂ Reduced" },
              { value: "98%", label: "Regulatory Compliance Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full mb-4 text-sm font-medium"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#455A64]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive <span className="text-[#2E7D32]">Solutions</span>
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              We provide integrated environmental and technology services to
              help organizations achieve sustainability goals and regulatory
              compliance.
            </motion.p>
          </motion.div>

          {Object.entries(serviceCategories).map(
            ([category, categoryServices]) => (
              <div key={category} className="mb-16">
                <motion.h3
                  className="text-2xl font-bold text-[#2E7D32] mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {category} Services
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service, i) => (
                    <motion.div
                      key={i}
                      className={`p-8 bg-white rounded-2xl shadow-md border border-transparent transition-all duration-300 ${
                        hoveredService === service.title
                          ? "border-[#2E7D32] shadow-lg"
                          : ""
                      }`}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onMouseEnter={() => setHoveredService(service.title)}
                      onMouseLeave={() => setHoveredService(null)}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>
                      <motion.a
                        href="#"
                        className="text-[#4FC3F7] font-medium inline-flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#455A64]">
                Our <span className="text-[#2E7D32]">Methodology</span>
              </h2>
              <p className="text-slate-600 mb-8">
                We follow a rigorous, science-based approach to deliver
                solutions that are both environmentally effective and
                economically viable.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Assessment & Analysis",
                    description:
                      "Comprehensive data collection and evaluation to understand your unique challenges and opportunities.",
                  },
                  {
                    title: "Solution Design",
                    description:
                      "Customized approaches that integrate environmental best practices with technological innovation.",
                  },
                  {
                    title: "Implementation & Support",
                    description:
                      "Seamless execution with ongoing monitoring and optimization to ensure long-term success.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#2E7D32]/10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#2E7D32]"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#455A64]">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Team analyzing environmental data"
                  className="rounded-2xl shadow-xl w-full"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-[#4FC3F7] text-white p-6 rounded-xl shadow-lg max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-lg font-semibold mb-2">Data-Driven</div>
                  <p className="text-sm">
                    Our decisions are grounded in robust data analysis and
                    scientific research
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full mb-4 text-sm font-medium"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Work
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#455A64]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Impactful <span className="text-[#2E7D32]">Case Studies</span>
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Explore how we've helped organizations solve complex environmental
              challenges with innovative solutions.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Case Study Selector */}
            <motion.div
              className="lg:w-1/3 space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeCaseStudy === i
                      ? "bg-[#2E7D32] text-white shadow-lg"
                      : "bg-white shadow-md hover:shadow-lg"
                  }`}
                  onClick={() => setActiveCaseStudy(i)}
                  whileHover={{ scale: activeCaseStudy === i ? 1 : 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-lg mb-2">{study.title}</h3>
                  <p
                    className={`text-sm ${
                      activeCaseStudy === i ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    {study.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {study.services.map((service, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-1 rounded-full ${
                          activeCaseStudy === i
                            ? "bg-white/20"
                            : "bg-[#2E7D32]/10 text-[#2E7D32]"
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Active Case Study Display */}
            <motion.div
              className="lg:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden"
              key={activeCaseStudy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-64 md:h-80 w-full overflow-hidden">
                <motion.img
                  src={caseStudies[activeCaseStudy].image}
                  alt={caseStudies[activeCaseStudy].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2E7D32] mb-4">
                  {caseStudies[activeCaseStudy].title}
                </h3>
                <p className="text-slate-700 mb-6">
                  {caseStudies[activeCaseStudy].description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#455A64]">Key Results:</h4>
                  <ul className="space-y-2">
                    {caseStudies[activeCaseStudy].results.map((result, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <svg
                          className="w-5 h-5 text-[#2E7D32] mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-slate-700">{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  className="mt-8 border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 px-6 py-3 rounded-xl font-medium"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(46, 125, 50, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Full Case Study
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Metrics Section Below Case Studies */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "90%", label: "Client Retention" },
              { value: "850K", label: "Tons CO₂ Reduced" },
              { value: "25+", label: "Technology Solutions" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <div className="text-3xl font-bold text-[#2E7D32] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Enhance Your Environmental Performance?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our team of environmental and technology experts is ready to help
            you navigate regulations, implement sustainable solutions, and
            leverage technology for better environmental outcomes.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg font-medium text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Request Consultation
            </motion.button>
            <motion.button
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B5E20] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4FC3F7]"></div>
                <span className="text-xl font-bold">EnviroTech</span>
              </div>
              <p className="text-sm opacity-80">
                Integrating environmental expertise with technological
                innovation for sustainable solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 5).map((service, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-sm opacity-80 hover:opacity-100"
                    >
                      {service.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Careers", "Newsroom"].map(
                  (item, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }}>
                      <a
                        href="#"
                        className="text-sm opacity-80 hover:opacity-100"
                      >
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <address className="not-italic text-sm opacity-80 space-y-2">
                <div>123 Greenway Blvd</div>
                <div>EcoCity, EC 12345</div>
                <div>info@envirotech.example</div>
                <div>+1 (555) 123-4567</div>
              </address>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-80 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EnviroTech Solutions. All rights
              reserved.
            </div>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                (social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
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
    </div>
  );
}
