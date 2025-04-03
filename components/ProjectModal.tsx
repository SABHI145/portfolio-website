"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface ProjectModalProps {
  title: string
  description: string
  images: string[]
  technologies: string[]
  onClose: () => void
}

export default function ProjectModal({ title, description, images, technologies, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>

        {/* Image Album */}
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Project Image ${index + 1}`} className="w-32 h-32 object-cover rounded-md" />
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block rounded-full bg-gray-300 px-3 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
