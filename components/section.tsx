"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Section({ children, className = "", delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-16 ${className}`}
    >
      {children}
    </motion.section>
  )
}

