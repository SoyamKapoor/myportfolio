"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket, Heart } from "lucide-react"

const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">About Me</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <p className="text-lg mb-6">
            I am a dedicated Python Developer with a strong background in data science. My focus is on building scalable machine learning models, data-driven solutions, and real-world applications. I am currently pursuing a degree in Computer Systems Engineering and constantly enhancing my skills to stay ahead in the tech world.
          </p>
          <p className="text-lg mb-6">
            My passion for coding extends beyond the development of functional applications — I strive to create impactful projects that solve complex challenges. I am driven by continuous learning and the exploration of new technologies that push the boundaries of what’s possible.
          </p>
          <p className="text-lg">
            Outside of coding, I run a YouTube channel, "Soyam's World", where I explore the latest trends in technology and data science, and share insightful content for both beginners and tech enthusiasts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[ 
            {
              icon: Code2,
              title: "Python Developer",
              description: "Specializing in building scalable applications, data analysis, and developing machine learning models.",
            },
            {
              icon: Brain,
              title: "Data Science Enthusiast",
              description: "Passionate about extracting valuable insights from data, modeling, and using machine learning algorithms.",
            },
            {
              icon: Rocket,
              title: "Continuous Learner",
              description: "Always eager to learn new technologies and improve my skill set to deliver innovative solutions.",
            },
            {
              icon: Heart,
              title: "Collaborative Spirit",
              description: "Enjoy collaborating with teams to brainstorm, design, and implement creative solutions to challenging problems.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
