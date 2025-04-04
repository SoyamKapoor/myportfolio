"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const journeyData = [
  {
    type: "education",
    title: "Bachelor of Engineering in Computer Systems Engineering",
    institution: "Sukkur IBA University",
    date: "Sept. 2022 – Present",
    details: [
      "Currently pursuing a degree in Computer Systems Engineering",
      "Participating in various coding competitions and projects",
      "Current CGPA: 3.61",
    ],
  },
  {
    type: "education",
    title: "Intermediate in Pre-Engineering",
    institution: "City School & College Pano Aqil",
    date: "May 2021 – May 2022",
    details: [
      "Completed pre-engineering studies",
      "Developed a strong interest in computers and softwares",
      "Achieved 85% in final examinations",
    ],
  },
]

const Journey = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">My Journey</h2>
        <div className="space-y-8">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <motion.li
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + detailIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Journey

