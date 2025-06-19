import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  generalTestimonials,
  charityTestimonials,
  arinzeTestimonials,
  videoTestimonials,
} from "../data/TestimonialsData";



const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(generalTestimonials.length / 4)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(generalTestimonials.length / 4)) %
        Math.ceil(generalTestimonials.length / 4)
    );
  };

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
      className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
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
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Imagine being handed the exact blueprint that over{" "}
            <span className="font-bold text-amber-400 px-2 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20">
              1,200 of my mentees
            </span>{" "}
            used to turn ambition into consistent{" "}
            <span className="font-bold text-green-400 px-2 py-1 rounded-lg bg-green-400/10 border border-green-400/20">
              6–7 figure results
            </span>
            . People like Charity started with nothing but belief — and built
            something extraordinary.
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
            For the past two years, I've been teaching people exactly how this
            business model works — and the same strategies I used to{" "}
            <span className="font-bold text-purple-400 px-2 py-1 rounded-lg bg-purple-400/10 border border-purple-400/20">
              earn millions
            </span>{" "}
            from it. Today, many of them are replicating these results{" "}
            <span className="font-bold text-blue-400 px-2 py-1 rounded-lg bg-blue-400/10 border border-blue-400/20">
              every single week and month
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

            {/* General Testimonials Carousel Controls */}
            <button
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
            </button>
          </div>
        </motion.div>

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
            className="group relative px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              <a
                href="https://chat.whatsapp.com/FAiB0gvbrloAEmX7NmsvNI"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
              >
                Start Your Journey
              </a>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </motion.div>
      </div>

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
