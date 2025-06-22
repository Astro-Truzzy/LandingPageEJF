import React from "react";
import { motion } from "framer-motion";
import { Play,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

  import { socialLinks, quickLinks, stats  } from "../data/FooterData";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  
  return (
    <footer className="relative bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-b border-white/10 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-2xl border border-amber-400/30 mb-4 group-hover:border-amber-400/50 transition-all duration-300">
                    <stat.icon size={28} className="text-amber-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Play size={24} className="text-white ml-0.5" />
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      Esosa John Foundation
                    </h3>
                    <p className="text-sm text-gray-400 -mt-1">
                      Transform Your Future
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Empowering entrepreneurs and business owners to achieve
                  extraordinary results through proven strategies and
                  personalized mentorship.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4" id="contact">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/30 hover:bg-amber-400/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h4 className="text-xl font-bold text-white mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <ArrowRight
                          size={16}
                          className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span>{link.name}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Programs
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h4 className="text-xl font-bold text-white mb-6">
                  Our Programs
                </h4>
                <ul className="space-y-4">
                  {programs.map((program) => (
                    <li key={program.name}>
                      <motion.a
                        href={program.href}
                        whileHover={{ x: 5 }}
                        className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <ArrowRight
                          size={16}
                          className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span>{program.name}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div> */}

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h4 className="text-xl font-bold text-white mb-6">
                  Get In Touch
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email Us</p>
                      <a
                        href="mailto:hello@successpath.com"
                        className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                      >
                        hello@esosajohnfoundation.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Call Us</p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                      >
                        + (234) 701-035-4042
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Visit Us</p>
                      <p className="text-gray-400">
                        123 Success Street
                        <br />
                        Business District, NY 10001
                      </p>
                    </div>
                  </div> */}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <h5 className="text-white font-semibold mb-3 uppercase leading-tight tracking-wider">
                    Disclaimer
                  </h5>
                  <p className="text-gray-400 text-sm mb-4">
                    DISCLAIMER This site is not a part of a Facebook Website or
                    FACEBOOK INC. Additionally, this site is not endorsed by
                    Facebook in ANYWAY. Facebook is a trademark of FACEBOOK INC.
                    *Earnings and income representations made by ESOSA
                    JOHN and his Affiliates are aspirational statements only
                    of your earnings potential. These results are not typical
                    and results will vary. This is not a Get-rich-quick program
                    nor do we believe in overnight success. We believe in
                    hardwork, integrity and developing your skills if you want
                    to earn more financially.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-center md:text-left"
              >
                © 2025 Esosa John Foundation. All rights reserved. Built with
                passion for your success.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-6"
              >
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#cookies"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Cookie Policy
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
