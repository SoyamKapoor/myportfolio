"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "journey", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (sectionId: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const yOffset = -80 // Adjust this value to account for the fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }, 100) // Small delay to ensure the mobile menu has closed
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
        <button onClick={() => handleClick("top")} className="text-xl font-bold text-gradient">
  ~/Soyam.ai
</button>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex gap-8">
            {["About", "Journey", "Skills", "Projects", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleClick(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? "text-white" : ""}`}
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center py-4">
              {["About", "Journey", "Skills", "Projects", "Contact"].map((item) => (
                <motion.li key={item} className="w-full text-center py-2">
                  <button
                    onClick={() => handleClick(item.toLowerCase())}
                    className={`nav-link ${activeSection === item.toLowerCase() ? "text-white" : ""} w-full py-2`}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navigation

