import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Play,
  Award,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    {
      name: "Achievements",
      href: "",
      dropdown: [
        { name: "Stats", href: "#achievements", icon: Award },
      ],
    },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Play size={20} className="text-white ml-0.5" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Esosa John
              </h1>
              <p className="text-xs text-gray-400 -mt-1">
                Transform Your Future
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{
                        opacity: activeDropdown === item.name ? 1 : 0,
                        y: activeDropdown === item.name ? 0 : 10,
                        scale: activeDropdown === item.name ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl ${
                        activeDropdown === item.name
                          ? "pointer-events-auto"
                          : "pointer-events-none"
                      }`}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                          >
                            <dropdownItem.icon
                              size={18}
                              className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="font-medium">
                              {dropdownItem.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-semibold shadow-lg hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">
                <a href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI" target="_blank" rel="noopener noreferrer" className=" text-white">
                  Start Your Journey
                </a>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 py-2"
                        >
                          <dropdownItem.icon
                            size={16}
                            className="text-amber-400"
                          />
                          <span>{dropdownItem.name}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-semibold shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
