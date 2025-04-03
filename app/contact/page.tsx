"use client"

import { motion } from "framer-motion"
import PageTitle from "@/components/page-title"
import Section from "@/components/section"
import ContactForm from "@/components/contact-form"
import SocialLinks from "@/components/social-links"
import FloatingCard from "@/components/floating-card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5e6c8]">
      <div className="container mx-auto px-4 py-12">
        <PageTitle title="Contact Me" subtitle="Get in touch for collaborations, questions, or just to say hello" />

        <Section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6"
              >
                Send Me a Message
              </motion.h2>

              <ContactForm />
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6"
              >
                Connect With Me
              </motion.h2>

              <FloatingCard className="p-6 rounded-xl border border-[#1a1a1a]/10 bg-[#1a1a1a]/5 mb-8">
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-[#1a1a1a]/80">ay4876079@gmail.com</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-[#1a1a1a]/80">+91 8392011068</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-[#1a1a1a]/80">Asasnol, WB</p>
                  </div>
                </div>
              </FloatingCard>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg font-medium mb-4"
              >
                Social Media
              </motion.h3>

              <SocialLinks />
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

