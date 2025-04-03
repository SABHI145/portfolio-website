"use client"

import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  type?: "word" | "character"
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  type = "character",
}: AnimatedTextProps) {
  const ctrls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: once,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
    if (!inView && !once) {
      ctrls.start("hidden")
    }
  }, [ctrls, inView, once])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  if (type === "word") {
    const words = text.split(" ")
    return (
      <motion.p
        className={className}
        aria-label={text}
        role="heading"
        initial="hidden"
        animate={ctrls}
        variants={wordAnimation}
        transition={{
          delayChildren: delay,
          staggerChildren: 0.08,
        }}
        ref={ref}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            aria-hidden="true"
            variants={characterAnimation}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    )
  }

  return (
    <motion.p
      className={className}
      aria-label={text}
      role="heading"
      initial="hidden"
      animate={ctrls}
      variants={wordAnimation}
      transition={{
        delayChildren: delay,
        staggerChildren: 0.03,
      }}
      ref={ref}
    >
      {text.split("").map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          variants={characterAnimation}
          className="inline-block"
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.p>
  )
}

