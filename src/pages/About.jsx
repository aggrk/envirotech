/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import * as Icons from "@heroicons/react/24/outline";
import { services, timeline } from "../utils/data";

export default function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#2E7D32]/10 py-16 px-4 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-slate-700"
        >
          To empower industries with{" "}
          <strong>science-backed environmental solutions</strong> and{" "}
          <strong>cutting-edge technology</strong>, ensuring compliance,
          sustainability, and operational excellence—from soil to software.
        </motion.p>
      </motion.section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-6 text-center md:text-left">
              Our Vision
            </h2>
            <p className="text-lg text-slate-700 mb-6 text-center md:text-left">
              A world where <strong>environmental stewardship</strong> and{" "}
              <strong>technological innovation</strong> coexist
              seamlessly—transforming regulations into opportunities and data
              into actionable insights.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icons.CheckCircleIcon className="text-[#4FC3F7] h-6 w-6 mr-2 mt-1" />
                <span>
                  Pioneer the integration of IoT/AI in environmental compliance
                </span>
              </li>
              <li className="flex items-start">
                <Icons.CheckCircleIcon className="text-[#4FC3F7] h-6 w-6 mr-2 mt-1" />
                <span>
                  Democratize sustainable practices through scalable tech
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
              alt="Futuristic sustainability tech"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#F7FDFF] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-2">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Bridging environmental science with digital innovation to deliver
              end-to-end solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = Icons[service.icon];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all ${
                    service.color === "blue"
                      ? "border-t-4 border-[#4FC3F7]"
                      : "border-t-4 border-[#2E7D32]"
                  }`}
                >
                  <div
                    className={`${
                      service.color === "blue"
                        ? "bg-[#4FC3F7]/10"
                        : "bg-[#2E7D32]/10"
                    } w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon className="text-[#2E7D32] h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* Our Journey Section */}
      <section className="py-16 px-4 bg-[#F7FDFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From independent experts to a unified force for sustainable
              innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Story Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="text-xl font-bold text-[#2E7D32] mb-3">
                  Independent Roots
                </h3>
                <p className="text-slate-700">
                  Before founding the company, our team members worked
                  independently—completing
                  <strong> over 25 successful projects</strong> across various
                  industries. From environmental impact assessments to custom
                  sustainability software, we've tackled complex challenges as
                  solo practitioners.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="text-xl font-bold text-[#2E7D32] mb-3">
                  The Turning Point
                </h3>
                <p className="text-slate-700">
                  In 2023, we recognized that by combining our specialized
                  skills, we could deliver{" "}
                  <strong>more comprehensive solutions</strong>. That experience
                  laid the foundation for building a company that combines
                  technical skill, environmental insight, and a commitment to
                  client satisfaction.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold text-[#2E7D32] mb-3">
                  Why We Came Together
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Icons.PuzzlePieceIcon className="text-[#4FC3F7] h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Clients needed end-to-end solutions we couldn't provide
                      separately
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Icons.ScaleIcon className="text-[#4FC3F7] h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Shared frustration with the limitations of traditional
                      consultancies
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Icons.SparklesIcon className="text-[#4FC3F7] h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Saw an opportunity to redefine industry standards
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px]"
            >
              {/* Vertical line */}
              <div className="absolute left-8 top-0 h-full w-1 bg-[#4FC3F7]/30"></div>

              {/* Timeline items */}
              {[
                {
                  year: "2015-2022",
                  title: "Independent Work",
                  content:
                    "Team members complete 25+ projects across 8 industries",
                  icon: <Icons.UserIcon className="h-5 w-5" />,
                },
                {
                  year: "Early 2023",
                  title: "Collaboration Begins",
                  content:
                    "Joint projects reveal synergies between our specialties",
                  icon: <Icons.UserGroupIcon className="h-5 w-5" />,
                },
                {
                  year: "Late 2023",
                  title: "Company Founded",
                  content: "Formalized our partnership to serve clients better",
                  icon: <Icons.BuildingOfficeIcon className="h-5 w-5" />,
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-16 pb-8">
                  <div
                    className={`absolute left-8 top-1 w-4 h-4 rounded-full ${
                      index === 2 ? "bg-[#2E7D32]" : "bg-[#4FC3F7]"
                    } border-4 border-white shadow-md`}
                  ></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <span
                        className={`mr-3 p-1.5 rounded-full ${
                          index === 2
                            ? "bg-[#2E7D32]/10 text-[#2E7D32]"
                            : "bg-[#4FC3F7]/10 text-[#4FC3F7]"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="font-bold text-slate-800">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2E7D32] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out Section */}
      <section className="bg-[#2E7D32] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Why Choose Our New Firm</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              All the experience of established players with none of the
              bureaucracy
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                value: "15+",
                label: "Years Experience (Each Principal)",
                icon: (
                  <Icons.AcademicCapIcon className="h-8 w-8 mx-auto mb-3" />
                ),
              },
              {
                value: "25+",
                label: "Combined Past Projects",
                icon: <Icons.BriefcaseIcon className="h-8 w-8 mx-auto mb-3" />,
              },
              {
                value: "100%",
                label: "Senior-Level Team",
                icon: <Icons.UserCircleIcon className="h-8 w-8 mx-auto mb-3" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center bg-white/5 p-6 rounded-xl"
              >
                <div className="text-[#4FC3F7] flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "No Junior Staff",
                description:
                  "Every project is handled directly by our principals with 15+ years experience each",
                icon: <Icons.FaceFrownIcon className="h-6 w-6" />,
              },
              {
                title: "Boutique Flexibility",
                description:
                  "Our small size means we can adapt quickly to your needs without layers of approval",
                icon: <Icons.ArrowPathIcon className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-start">
                  <div className="text-[#4FC3F7] mr-3 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team With Purpose Section */}
      <section className="py-16 px-4 bg-[#F7FDFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">
              Our Company Difference
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What truly sets us apart isn't just what we do, but why and how we
              do it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Purpose Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="bg-[#2E7D32]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Icons.LightBulbIcon className="text-[#2E7D32] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Science-Driven Innovators
              </h3>
              <p className="text-slate-600">
                We don't just follow regulations - we anticipate them. Our team
                combines environmental science expertise with technical
                ingenuity to create solutions that stay ahead of compliance
                requirements.
              </p>
            </motion.div>

            {/* Purpose Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="bg-[#4FC3F7]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Icons.CpuChipIcon className="text-[#4FC3F7] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Tech-Enabled Environmentalists
              </h3>
              <p className="text-slate-600">
                Where others see a divide between ecology and technology, we see
                synergy. Our unique cross-training ensures every environmental
                solution is digitally empowered from conception.
              </p>
            </motion.div>

            {/* Purpose Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="bg-[#2E7D32]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Icons.HandRaisedIcon className="text-[#2E7D32] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Impact-Obsessed Practitioners
              </h3>
              <p className="text-slate-600">
                We measure success not just by deliverables, but by tangible
                environmental improvement. Every project includes
                post-implementation impact analysis to ensure we're moving the
                needle.
              </p>
            </motion.div>

            {/* Purpose Card 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md lg:col-span-3"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7] w-20 h-20 rounded-full flex items-center justify-center">
                    <Icons.UserGroupIcon className="text-white h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Unified by Sustainable Transformation
                  </h3>
                  <p className="text-slate-600">
                    What truly binds our team is a shared commitment to
                    redefining industry standards. We're not content with "good
                    enough" environmental compliance - we're driven to
                    demonstrate how ecological responsibility can become a
                    competitive advantage through smart technology integration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-[#F7FDFF] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-2">
              Our Promise
            </h2>
            <p className="text-lg text-slate-600">
              We commit to delivering solutions that are:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Science-Based",
                icon: <Icons.LightBulbIcon className="h-8 w-8" />,
              },
              {
                title: "Tech-Enabled",
                icon: <Icons.CpuChipIcon className="h-8 w-8" />,
              },
              {
                title: "Future-Ready",
                icon: <Icons.ShieldCheckIcon className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-[#4FC3F7] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7] py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Shape Tomorrow Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you need an EIA, custom software, or a wastewater
            solution—we deliver science and tech in harmony.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
