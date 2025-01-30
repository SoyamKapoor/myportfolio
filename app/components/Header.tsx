"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-2xl font-bold">
             Soojal Kumar
        </motion.div>
        <ul className="flex space-x-4">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-lg">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

