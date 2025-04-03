"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-[#1a1a1a]/20 bg-[#1a1a1a]/5 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-[#1a1a1a]/20 bg-[#1a1a1a]/5 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-md border border-[#1a1a1a]/20 bg-[#1a1a1a]/5 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/30 transition-all resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[#1a1a1a] text-[#f5e6c8] font-medium transition-all hover:bg-[#1a1a1a]/90 disabled:opacity-70"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send size={16} />
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-md bg-green-100 text-green-800 text-sm"
        >
          Your message has been sent successfully!
        </motion.div>
      )}

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-md bg-red-100 text-red-800 text-sm"
        >
          {submitError}
        </motion.div>
      )}

      
    </motion.form>
  )
}

