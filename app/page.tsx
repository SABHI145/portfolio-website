"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import Section from "@/components/section"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5e6c8]">
      {/* Hero Section */}
      <Section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Introduction */}
            <motion.div
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xl font-medium"
                >
                  Hi, I'm
                </motion.h2>
                <AnimatedText
                  text="ABHISHEK YADAV"
                  className="text-5xl md:text-7xl font-bold text-[#1a1a1a]"
                  delay={0.3}
                />
                <AnimatedText
                  text="Data Science Student"
                  className="text-xl md:text-2xl font-medium"
                  delay={0.5}
                  type="word"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="text-[#1a1a1a]/80 max-w-md mt-4"
                >
                  Passionate about leveraging data to solve real-world problems. Exploring the intersection of machine
                  learning, statistics, and software development.
                </motion.p>
              </div>

              {/* Social links */}
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-yadav-2149bb28b/" },
                  { label: "GitHub", href: "https://github.com/SABHI145" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#1a1a1a] rounded-md px-4 py-2 flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#f5e6c8] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <Link href="/projects">
                  <motion.button
                    className="mt-8 flex items-center gap-2 bg-[#1a1a1a] text-[#f5e6c8] px-6 py-3 rounded-md font-medium hover:bg-[#1a1a1a]/90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View My Projects</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Character image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 30 }}
              transition={{ duration: 0, delay: 0 }}
            >
              <div className="relative w-full max-w-md">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/ChatGPT Image Apr 3, 2025, 09_36_46 AM-Photoroom.png"
                    alt="Abhishek Yadav"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover mix-blend-multiply"                    
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}

