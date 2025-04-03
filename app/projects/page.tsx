"use client"

import { motion } from "framer-motion"
import PageTitle from "@/components/page-title"
import Section from "@/components/section"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "Fingerprint Door Lock Authentication",
    description: "A secure biometric authentication system using fingerprint recognition and IoT.",
    image: "/fingerprint-lock.jpg",
    images: ["/ChatGPT Image Apr 3, 2025, 09_36_46 AM-Photoroom.png", "/fingerprint2.jpg", "/fingerprint3.jpg"], // Add multiple images
    technologies: ["Arduino", "Python", "Fingerprint Sensor", "IoT"],
    github: "https://github.com/abhishek/fingerprint-lock",
    demo: "https://fingerprint-lock-demo.vercel.app",
  },
  // Add more projects...
]


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5e6c8]">
      <div className="container mx-auto px-4 py-12">
        <PageTitle title="My Projects" subtitle="A showcase of my technical projects and applications" />

        <Section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

