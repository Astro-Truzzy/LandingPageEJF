import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X, Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  generalTestimonials,
  charityTestimonials,
  arinzeTestimonials,
  videoTestimonials,
  mentorshipImages,
  qualificationCriteria
} from "../data/TestimonialsData";



const Testimonials: React.FC = () => {
  const [currentSlide] = useState(0);
  const [charitySlide, setCharitySlide] = useState(0);
  const [videoSlide, setVideoSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
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

  // Carousel navigation functions
  // const nextSlide = () => {
  //   setCurrentSlide(
  //     (prev) => (prev + 1) % Math.ceil(generalTestimonials.length / 4)
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prev) =>
  //       (prev - 1 + Math.ceil(generalTestimonials.length / 4)) %
  //       Math.ceil(generalTestimonials.length / 4)
  //   );
  // };

  const nextCharitySlide = () => {
    setCharitySlide(
      (prev) => (prev + 1) % Math.ceil(charityTestimonials.length / 4)
    );
  };

  const prevCharitySlide = () => {
    setCharitySlide(
      (prev) =>
        (prev - 1 + Math.ceil(charityTestimonials.length / 4)) %
        Math.ceil(charityTestimonials.length / 4)
    );
  };

  const nextVideoSlide = () => {
    setVideoSlide(
      (prev) => (prev + 1) % Math.ceil(videoTestimonials.length / 4)
    );
  };

  const prevVideoSlide = () => {
    setVideoSlide(
      (prev) =>
        (prev - 1 + Math.ceil(videoTestimonials.length / 4)) %
        Math.ceil(videoTestimonials.length / 4)
    );
  };

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-900 to-slate-900 overflow-hidden"
      id="testimonials"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Real People, Real Results
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Dear Friend,
          </p>
          <br />
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            What if I hand you the exact same information over{" "}
            <span className="font-bold text-amber-400 px-2 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20">
              1,200 of my mentees
            </span>{" "}
            have used to crush{" "}
            <span className="font-bold text-green-400 px-2 py-1 rounded-lg bg-green-400/10 border border-green-400/20">
              hundreds of thousands and even millions.
            </span>
            for themselves like{" "}
            <span className="font-bold text-blue-200 px-2 py-1 rounded-lg bg-green-400/10 border border-green-400/20">
              {" "}
              Mrs Charity.
            </span>
          </motion.p>
        </motion.div>

        {/* Charity's Story Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Charity's Transformation Story
          </motion.h3>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${charitySlide * 100}%)` }}
              >
                {Array.from({
                  length: Math.ceil(charityTestimonials.length / 4),
                }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                      {charityTestimonials
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((testimonial, index) => (
                          <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-2xl hover:shadow-amber-500/20"
                            data-aos="zoom-in"
                            data-aos-delay={index * 50}
                          >
                            <div className="aspect-[3/4] overflow-hidden">
                              <img
                                src={testimonial.imageUrl}
                                alt={testimonial.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-sm font-semibold mb-1">
                                {testimonial.title}
                              </p>
                              <p className="text-xs text-gray-300">
                                {testimonial.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Charity Carousel Controls */}
            <button
              onClick={prevCharitySlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCharitySlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Arinze's Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Arinze's Success Journey
          </motion.h3>
          <div className="text-center mb-10">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              He was already an Affiliate who signed up under someone else but{" "}
              <span className="font-extrabold">
                he was not making any money
              </span>
              <span className="font-bold text-amber-400 px-2 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20">
                until he learned from me
              </span>{" "}
              and{" "}
              <span className="font-bold text-green-400 px-2 py-1 rounded-lg bg-green-400/10 border border-green-400/20">
                started using my unique strategy.
              </span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {arinzeTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300 shadow-2xl hover:shadow-green-500/20"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold mb-1">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-gray-300">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex items-center justify-center mb-16">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              <a 
              href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
              rel="noopener noreferrer"
              target="_blank"
              >
                Join The Training Here
              </a>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </div>

        {/* Second Intro Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I've spent the last 2 years showing people like you everything this
            business model involves and the strategies I've used to{" "}
            <span className="font-bold text-purple-400 px-2 py-1 rounded-lg bg-purple-400/10 border border-purple-400/20">
              make millions
            </span>{" "}
            from this business and They've been able to{" "}
            <span className="font-extrabold"> reciprocate my result</span> and
            are now making something like this
            <span className="font-bold text-blue-400 px-2 py-1 rounded-lg bg-blue-400/10 border border-blue-400/20">
              on a weekly/monthly basis
            </span>
            .
          </motion.p>
        </motion.div>

        {/* General Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            More Success Stories
          </motion.h3>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({
                  length: Math.ceil(generalTestimonials.length / 4),
                }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                      {generalTestimonials
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((testimonial) => (
                          <motion.div
                            key={testimonial.id}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20"
                          >
                            <div className="aspect-[3/4] overflow-hidden">
                              <img
                                src={testimonial.imageUrl}
                                alt={testimonial.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-sm font-semibold mb-1">
                                {testimonial.name}
                              </p>
                              <p className="text-xs text-gray-300">
                                {testimonial.achievement}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-center mb-16 mt-10">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  <a
                    href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                    rel="noopener noreferrer"
                  target="_blank"
                  >
                    Join The Training Here
                  </a>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </div>

            {/* General Testimonials Carousel Controls */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </button> */}
          </div>
        </motion.div>

        {/* Mentorship Program Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
            >
              Today I've decided to hold{" "}
              <span className="font-bold text-amber-400 px-2 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20">
                200 persons by hand
              </span>
              , show them everything this business is about so that they too can
              use my unique system to build a profitable business that can make
              them something like this{" "}
              <span className="font-bold text-green-400 px-2 py-1 rounded-lg bg-green-400/10 border border-green-400/20">
                weekly/monthly
              </span>
              .
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {mentorshipImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-2xl hover:shadow-amber-500/20"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-lg font-bold mb-2 text-amber-400">
                    {image.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {image.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-amber-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-400/30">
                  <span className="text-amber-400 font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center justify-center mb-16 mt-10">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              <a
                href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                rel="noopener noreferrer"
              target="_blank"
              >
                Join The Training Here
              </a>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </div>

        {/* Video Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Video Success Stories
          </motion.h3>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${videoSlide * 100}%)` }}
              >
                {Array.from({
                  length: Math.ceil(videoTestimonials.length / 4),
                }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                      {videoTestimonials
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((video, index) => (
                          <motion.div
                            key={video.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-400/30 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-red-500/20"
                            onClick={() => openVideoModal(video.videoUrl)}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                          >
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={video.thumbnailUrl}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Play size={24} className="text-white ml-1" />
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-extrabold h4 mb-1">
                                  {video.title}
                                </h4>
                              </div>
                              <p className="text-sm text-gray-300 mb-1 p4">
                                {video.description}
                              </p>
                              <p className="text-xs text-gray-400 p4">
                                {video.duration}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Video Carousel Controls */}
            <button
              onClick={prevVideoSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextVideoSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              <a
                href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
              >
                Join The Training Here
              </a>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Final CTA Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        {/* First CTA */}
        <motion.div variants={itemVariants} className="text-center mb-16 mt-14">
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            If you want to be part of the{" "}
            <span className="text-amber-400">200 persons</span>
          </motion.h3>
          <div className="flex items-center justify-center mb-16 mt-10">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">
                <a
                  href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                  rel="noopener noreferrer"
                target="_blank"
                >
                  Join The Training Here
                </a>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </div>
        </motion.div>

        {/* This isn't for everybody section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-16 mt-12"
        >
          <motion.h4
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            This isn't for everybody
          </motion.h4>

          {/* Animated Checklist */}
          <div className="relative">
            {qualificationCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-4 mb-8 last:mb-0"
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                {/* Animated Checkmark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Check size={16} className="text-white" />
                </motion.div>

                {/* Connecting Line */}
                {index < qualificationCriteria.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      duration: 0.5,
                    }}
                    className="absolute left-4 top-8 w-0.5 bg-gradient-to-b from-red-500 to-red-600 opacity-30"
                    style={{ height: "calc(100% + 2rem)" }}
                  />
                )}

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.2 + 0.1,
                    duration: 0.6,
                  }}
                  className="flex-1"
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {criterion}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alternative Path Text */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            You can go back to scrolling FB/IG and hoping you find an
            opportunity which doesn't require capital but If you're serious
            about changing your financial life and making life changing money
            like these
          </motion.p>
        </motion.div>

        {/* Second CTA */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center mb-16 mt-10">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">
                <a
                  href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                  rel="noopener noreferrer"
                target="_blank"
                >
                  Join The Training Here
                </a>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </div>
        </motion.div>

        {/* PS Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-900 via-blue-900 to-slate-900 rounded-2xl p-8 md:p-12 border border-blue-800/30 shadow-2xl"
          >
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              <span className="font-bold text-blue-400">PS</span> This Live
              training begins in{" "}
              <span className="font-bold text-amber-400 px-2 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20">
                48hrs time
              </span>{" "}
              and only{" "}
              <span className="font-bold text-red-400 px-2 py-1 rounded-lg bg-red-400/10 border border-red-400/20">
                200 persons
              </span>{" "}
              will be admitted into the group.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Quickly join now to see if any slot is still available for you.
            </p>

            <p className="text-xl font-semibold text-white mb-8">
              See you in class
            </p>

            {/* Final CTA Button */}
            <div className="flex items-center justify-center mb-16 mt-10">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-[#000080] rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  <a
                    href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                    rel="noopener noreferrer"
                  target="_blank"
                  >
                    Join The Training Here
                  </a>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Video Modal */}
      {videoModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
