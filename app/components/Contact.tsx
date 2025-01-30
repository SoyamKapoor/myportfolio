"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Youtube, Dribbble, FileUser} from "lucide-react" // Import Youtube icon
import Link from 'next/link';

const Contact = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" // Adjust max-w if needed for single card
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">Let's Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center"> {/* Changed to single column grid */}
          {/* Single Card with All Contact Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 flex flex-col items-center" // Centered content in single card
          >
            <p className="text-gray-300 text-center mb-8">
              Connect with me through these platforms:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8"> {/* Icon Grid Layout */}
              {[
                { icon: Mail, href: "mailto:soooojalkumar@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+923362747628", label: "Phone" },
                { icon: Github, href: "https://github.com/Soojal-Kumar", label: "GitHub" },
                { icon: Dribbble, href: "https://behance.net/soojalcharlia", label: "Behance" }, // Replace with your LinkedIn URL
                { icon: Youtube, href: "https://www.youtube.com/@philllusion", label: "YouTube" }, // Added YouTube icon
                { icon: FileUser, href: "https://drive.google.com/file/d/1NsqRzOP6DpjHKZG_iV-wSaH-kqxRSOAw/view", label: "My CV"},

              ].map((social, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center" // Center icon and label vertically
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card hover:bg-white/10 transition-colors inline-flex items-center justify-center" // inline-flex for centering
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                  <p className="text-gray-300 text-sm mt-2">{social.label}</p> {/* Label below icon */}
                </motion.div>
              ))}
            </div>
            <p className="text-gray-300 text-center text-sm">
              Let's connect and build something amazing together!
            </p>
          </motion.div>

          {/* Right Side Card REMOVED */}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;