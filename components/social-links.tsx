"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"

interface SocialLink {
  name: string
  icon: React.ElementType
  href: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/SABHI145",
    color: "#333",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abhishek-yadav-2149bb28b/",
    color: "#0077B5",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/abhishek",
    color: "#1DA1F2",
  },
  {
    name: "Email",
    icon: Mail,
    href: "ay4876079@gmail.com",
    color: "#D44638",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+1234567890",
    color: "#25D366",
  },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-[#1a1a1a]/20 bg-[#1a1a1a]/5 px-4 py-2 transition-colors hover:bg-[#1a1a1a] hover:text-[#f5e6c8]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Icon size={18} />
            <span>{link.name}</span>
          </motion.a>
        )
      })}
    </div>
  )
}

