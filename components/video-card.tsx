"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

interface VideoCardProps {
  videoSrc: string
  title: string
  description: string
}

export default function VideoCard({ videoSrc, title, description }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gray-900/60 border border-gray-800"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.video
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="bg-white/20 backdrop-blur-md p-4 rounded-full" whileHover={{ scale: 1.1 }}>
            <Play className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </motion.div>
  )
}

