"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Award, X } from "lucide-react"
import PageTitle from "@/components/page-title"
import Section from "@/components/section"
import FloatingCard from "@/components/floating-card"
import Image from "next/image";
import { useState } from "react";

export default function ResumePage() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    name: string;
    issuer: string;
    date: string;
    image: string;
  } | null>(null);
  

  const certificates = [
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "March 31st, 2025",
      image: "/certificates/data-analytics.jpg"
    },
    {
      name: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2021",
      image: "/certificates/data-science.jpg"
    },
    {
      name: "Python for Data Science",
      issuer: "DataCamp",
      date: "2020",
      image: "/certificates/python-data-science.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5e6c8]">
      <div className="container mx-auto px-4 py-12">
        <PageTitle title="My Resume" subtitle="A summary of my professional experience and education" />

        <Section className="flex justify-center mt-4">
          <motion.a
            href="/Abhishek Yadav Resume.pdf"
            download
            className="flex items-center gap-2 bg-[#1a1a1a] text-[#f5e6c8] px-6 py-3 rounded-md font-medium hover:bg-[#1a1a1a]/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            <span>Download Resume (PDF)</span>
          </motion.a>
        </Section>

        <Section className="mt-12" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-[#1a1a1a] text-[#f5e6c8]">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>
              <div className="space-y-6">
                <FloatingCard className="p-5 rounded-lg border border-[#1a1a1a]/10 bg-[#1a1a1a]/5">
                  <h3 className="font-bold text-lg">Data Science Intern</h3>
                  <span className="text-sm font-medium">Tech Company | Jun 2022 - Aug 2022</span>
                  <p className="mt-3 text-sm text-[#1a1a1a]/80">Developed machine learning models and performed data analysis.</p>
                </FloatingCard>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-[#1a1a1a] text-[#f5e6c8]">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <FloatingCard className="p-5 rounded-lg border border-[#1a1a1a]/10 bg-[#1a1a1a]/5">
                <h3 className="font-bold text-lg">B.Sc in Data Science</h3>
                <span className="text-sm font-medium">Asansol Engineering College | 2022 - Present</span>
                <p className="mt-3 text-sm text-[#1a1a1a]/80">Focusing on advanced machine learning techniques and big data technologies.</p>
              </FloatingCard>
            </div>
          </div>
        </Section>

        <Section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-md bg-[#1a1a1a] text-[#f5e6c8]">
              <Award size={20} />
            </div>
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <FloatingCard 
              key={index} 
              className="p-4 rounded-lg border border-[#1a1a1a]/10 bg-[#1a1a1a]/5 cursor-pointer transition hover:shadow-lg" 
              onClick={() => setSelectedCertificate(cert)} // ✅ Removed console.log
            >
            
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-medium text-lg">{cert.name}</h3>
                  <span className="text-xs text-[#1a1a1a]/70">{cert.date}</span>
                  <p className="text-xs text-[#1a1a1a]/80 mt-1">Issued by {cert.issuer}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </Section>
      </div>

      {selectedCertificate && (
  <div className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50">
    <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-xl w-full">
      <button
        className="absolute top-3 right-3 text-gray-700 hover:text-black"
        onClick={() => setSelectedCertificate(null)}
      >
        <X size={24} />
      </button>
      <h3 className="text-xl font-bold mb-4 text-center">{selectedCertificate.name}</h3>

      {/* TypeScript Fix for Next.js Image Component */}
      <Image
        src={selectedCertificate.image}
        alt={selectedCertificate.name}
        width={600}
        height={400}
        className="rounded-lg"
        priority
        unoptimized
      />
    </div>
  </div>
)}
    </div>
  );
}
