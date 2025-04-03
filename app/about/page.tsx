"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageTitle from "@/components/page-title"
import Section from "@/components/section"
import FloatingCard from "@/components/floating-card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5e6c8]">
      <div className="container mx-auto px-4 py-12">
        <PageTitle title="About Me" subtitle="Learn more about my background, education, and achievements" />

        <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <FloatingCard className="bg-transparent">
  <Image
    src="/ChatGPT Image Apr 3, 2025, 02_24_18 PM-Photoroom.png"  // ✅ Use an image with no background
    alt="Abhishek Yadav"
    width={600}
    height={600}
    className="w-full h-auto object-cover mix-blend-multiply"
  />
</FloatingCard>

          </motion.div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              My Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#1a1a1a]/80"
            >
              I'm Abhishek Yadav, a passionate Data Science student with a keen interest in machine learning,
              statistical analysis, and software development. My journey in the world of data began during my
              undergraduate studies, where I discovered the power of extracting meaningful insights from complex
              datasets.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#1a1a1a]/80"
            >
              Throughout my academic career, I've worked on various projects that have allowed me to apply theoretical
              concepts to real-world problems. From predictive modeling to data visualization, I enjoy the entire data
              science pipeline and continuously strive to enhance my skills in this rapidly evolving field.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#1a1a1a]/80"
            >
              When I'm not coding or analyzing data, you can find me exploring new technologies, contributing to
              open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </motion.p>
          </div>
        </Section>

        <Section className="mt-16" delay={0.2}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-10"
          >
            Education & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard className="p-6 rounded-xl border border-[#1a1a1a]/10 bg-[#1a1a1a]/5">
              <h3 className="text-xl font-bold">Education</h3>
              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="font-medium">B.sc in Data Science</h4>
                  <p className="text-sm text-[#1a1a1a]/70">Asansol Engineering College, 2023 - Present</p>
                  <p className="mt-2 text-sm">
                    Focusing on advanced machine learning techniques, statistical analysis, and big data technologies.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Higher Secondary</h4>
                  <p className="text-sm text-[#1a1a1a]/70">India International School, 2021 - 2023</p>
                  <p className="mt-2 text-sm">
                   
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="p-6 rounded-xl border border-[#1a1a1a]/10 bg-[#1a1a1a]/5">
              <h3 className="text-xl font-bold">Achievements</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-[#1a1a1a] text-[#f5e6c8] flex items-center justify-center text-xs">
                    1
                  </div>
                  <div>
                  <h4 className="font-medium">Innovative Hardware Model Making Competition </h4>
                  <p className="text-sm">
                    Designed a smart lock system integrating fingerprint and face recognition.
                  </p>

                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-[#1a1a1a] text-[#f5e6c8] flex items-center justify-center text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">LIC Quiz 2023 </h4>
                    <p className="text-sm">
                      Got an oppurtnity to visit the LIC quiz competion and won achievements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-[#1a1a1a] text-[#f5e6c8] flex items-center justify-center text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Open Source Contributor</h4>
                    <p className="text-sm">
                      Active contributor to several data science libraries, with over 50 accepted pull requests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-[#1a1a1a] text-[#f5e6c8] flex items-center justify-center text-xs">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Google Dev (GDSC) </h4>
                    <p className="text-sm">
                      
                    </p>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </Section>
      </div>
    </div>
  )
}

