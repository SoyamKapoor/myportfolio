"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { Github, Mail, DribbbleIcon as Behance, FileUser, Youtube } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen text-white">
      <Navigation />

      <motion.div className="fixed inset-0 pointer-events-none" style={{ opacity }}>
        <div className="absolute inset-0 gradient-bg opacity-20" />
      </motion.div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="top" className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-8"
            >
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30" />
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202023-01-09%2000.06.41%20-%20Digital%20art,%20portrait%20of%20A%20boy%20with%20his%20half%20face%20melted%20in%20psychedelics-VQUwvVUwjiFxgf5rOVzHcnblDYebBg.png"
                alt="Profile"
                fill
                className="object-cover rounded-full"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold mb-4"
            >
              Hi, I am{" "}
              <span className="creative-text-effect" data-text="Soojal Kumar">
                Soojal Kumar
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-4xl text-purple-300 mb-8"
            >
              Designer + Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/Soojal-Kumar" },
                { icon: Mail, href: "mailto:soooojalkumar@gmail.com" },
                { icon: FileUser, href: "https://drive.google.com/file/d/1NsqRzOP6DpjHKZG_iV-wSaH-kqxRSOAw/view" },
                { icon: Youtube, href: "https://www.youtube.com/@philllusion" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <About id="about" />
        <Journey id="journey" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    </div>
  )
}

