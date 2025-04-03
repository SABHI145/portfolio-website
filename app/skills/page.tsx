"use client"

import { motion } from "framer-motion"
import { Code, BarChart2, Terminal } from "lucide-react"
import PageTitle from "@/components/page-title"
import Section from "@/components/section"
import SkillBar from "@/components/skill-bar"
import FloatingCard from "@/components/floating-card"

const programmingSkills = [
  { name: "Python", level: 90 },
  { name: "C/C++", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "SQL", level: 80 },
  { name: "R", level: 70 },
]

const dataSkills = [
  { name: "Data Analysis", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "Data Visualization", level: 85 },
  { name: "Statistical Analysis", level: 80 },
  { name: "Big Data Technologies", level: 75 },
]

const toolsSkills = [
  { name: "Git & GitHub", level: 90 },
  { name: "Docker", level: 75 },
  { name: "Jupyter Notebook", level: 95 },
  { name: "VS Code", level: 85 },
  { name: "Arduino", level: 80 },
]

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    description: "Languages I use to build software and analyze data",
    skills: programmingSkills,
  },
  {
    title: "Data Science & ML",
    icon: BarChart2,
    description: "Tools and techniques for extracting insights from data",
    skills: dataSkills,
  },
  {
    title: "Tools & Technologies",
    icon: Terminal,
    description: "Software and platforms I use in my development workflow",
    skills: toolsSkills,
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#f5e6c8]">
      <div className="container mx-auto px-4 py-12">
        <PageTitle title="My Skills" subtitle="An overview of my technical skills and expertise" />

        <Section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <FloatingCard key={category.title} className="p-6 rounded-xl border border-[#1a1a1a]/10 bg-[#1a1a1a]/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-[#1a1a1a] text-[#f5e6c8]">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-xl font-bold">{category.title}</h2>
                  </div>

                  <p className="text-sm text-[#1a1a1a]/70 mb-6">{category.description}</p>

                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                    ))}
                  </div>
                </FloatingCard>
              )
            })}
          </div>
        </Section>

        <Section className="mt-16" delay={0.2}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-10"
          >
            Other Skills & Interests
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Web Development",
              "IoT & Robotics",
              "Cloud Computing",
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Data Engineering",
              "API Development",
              "Database Design",
              "UI/UX Design",
              "DevOps",
              "Agile Methodologies",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="p-3 rounded-md border border-[#1a1a1a]/10 bg-[#1a1a1a]/5 text-center hover:bg-[#1a1a1a]/10 transition-colors"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

