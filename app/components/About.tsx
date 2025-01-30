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
          <p className="text-lg mb-6" >
            I'm a passionate Computer Science student at DHA Suffa University, with a keen interest in design and development.
            My journey in tech has equipped me with skills in various programming
            languages and frameworks, allowing me to build engaging and functional applications. 
          </p>
          <p className="text-lg mb-6" >Currently you can find me participating
             in coding competitions, working on personal projects, or
            exploring new technologies to expand my skill set.
          </p>
           <p className="text-lg">

            When i am not studying, I work on my YouTube channel called Phillusion which is about philosophy and
            other less interesting things we think about.
            
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Code2,
              title: "Developer",
              description: "Experienced in both frontend and backend technologies",
            },
            {
              icon: Brain,
              title: "Designer",
              description: "I also enjoy designing visually appealing experiences. ",
            },
            {
              icon: Rocket,
              title: "Fast Learner",
              description: "Always eager to learn and adapt to new technologies",
            },
            {
              icon: Heart,
              title: "Collaborative",
              description: "I enjoy working in teams and brainstorming innovative solutions",
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

