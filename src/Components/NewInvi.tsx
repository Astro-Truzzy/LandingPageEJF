import React, { useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewInvi: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 py-12 flex items-center justify-center text-white"
      id="achievements"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%10Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center gap-6 rounded-full bg-white/10 backdrop-blur-md px-6 py-3 border border-white/20">
              <div className="flex items-center gap-2 text-amber-400">
                <Users size={20} />
                <span className="text-sm font-semibold">
                  1,200+ Success Stories
                </span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-2 text-green-400">
                <TrendingUp size={20} />
                <span className="text-sm font-semibold">Proven Results</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-2 text-blue-300">
                <DollarSign size={20} />
                <span className="text-sm font-semibold">
                  6-7 Figure Earnings
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transform Your{" "}
              <motion.span
                variants={highlightVariants}
                className="bg-gradient-to-r from-[#000080] to-blue-600 bg-clip-text text-transparent inline-block shadow-xl"
              >
                Financial Future
              </motion.span>
            </h1>
          </motion.div>

          {/* Key Message */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Over{" "}
                <motion.span
                  variants={highlightVariants}
                  className="font-bold text-amber-400 px-2 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20"
                >
                  1,200 of my mentees
                </motion.span>{" "}
                have moved from{" "}
                <motion.span
                  variants={highlightVariants}
                  className="font-semibold text-red-400 underline decoration-red-400/50 lowercase"
                >
                  STRUGGLING FINANCIALLY
                </motion.span>{" "}
                and hoping they could find a legimate opportunity to make money
                for themselves — to using my unique strategy to make 
                <motion.span
                  variants={highlightVariants}
                  className="font-bold text-green-400 px-2 py-1 rounded-lg bg-green-400/10 border border-green-400/20"
                >
                  6–7 figures on weekly/monthly basis.
                </motion.span>{" "}
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r navy rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <a
                  href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                  className="no-underline text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Transformation
                </a>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <a 
              href="#testimonials" 
              className="no-underline text-white ref"
              rel="noopener noreferrer"
              >
                View Success Stories
              </a>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                1,200+
              </div>
              <div className="text-gray-300">Successful Mentees</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">6-7</div>
              <div className="text-gray-300">Figure Weekly/Monthly</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Proven Strategy</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        data-aos="fade-in"
        data-aos-delay="1200"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewInvi;
