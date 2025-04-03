"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Linkedin, X, ArrowLeft, ArrowRight } from "lucide-react";
import FloatingCard from "./floating-card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  linkedin?: string;
}

export default function ProjectCard({ title, description, image, images, technologies, github, demo, linkedin }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNext = () => {
    setActiveImageIndex((prevIndex) => (images && images.length ? (prevIndex + 1) % images.length : 0));
  };

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) => (images && images.length ? (prevIndex - 1 + images.length) % images.length : 0));
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <FloatingCard className="h-full" intensity={10}>
        <motion.div
          className="h-full overflow-hidden rounded-xl border border-[#1a1a1a]/10 bg-[#1a1a1a]/5 transition-all duration-300 cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-[#1a1a1a]/80">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="inline-block rounded-full bg-[#1a1a1a]/10 px-3 py-1 text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </FloatingCard>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
              <button onClick={closeModal} className="absolute top-4 right-4 text-black hover:text-gray-700">
                <X size={24} />
              </button>

              <div className="flex items-center justify-between">
                <button onClick={handlePrev} className="p-2 text-black hover:text-gray-700">
                  <ArrowLeft size={24} />
                </button>
                <div className="relative w-full aspect-video">
                  <Image
                    src={images && images.length ? images[activeImageIndex] : image}
                    alt={title}
                    layout="fill"
                    className="object-contain rounded-lg"
                  />
                </div>
                <button onClick={handleNext} className="p-2 text-black hover:text-gray-700">
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}