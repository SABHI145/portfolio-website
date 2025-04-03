"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  level: number
  index?: number
}

export default function SkillBar({ name, level, index = 0 }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-[#1a1a1a]/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#1a1a1a]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

