"use client"

import { motion } from "framer-motion"
import { Code2, Database, Cpu, GitBranch, FileText } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C/C++", "Java", "Arduino Programming", "MATLAB Programming", "Assembly Language"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Science & Machine Learning",
    icon: Cpu,
    skills: ["Pandas", "NumPy", "Matplotlib"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Development Tools & Platforms",
    icon: GitBranch,
    skills: ["Google Colab", "Jupyter Notebook", "VS Code", "Git", "GitHub", "IntelliJ IDEA"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Other Technical Competencies",
    icon: FileText,
    skills: ["Microsoft Office Suite", "Debugging Techniques", "Algorithmic Problem Solving", "Technical Communication"],
    gradient: "from-red-500 to-orange-500",
  }
]

const Skills = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} mb-6`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
