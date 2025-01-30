"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react" // Import ExternalLink
import { useState } from "react"

const projects = {
  all: [],
  designing: [
    {
      title: "Rydesync",
      description: "A UI design for a seamless ride-sharing platform, created using Figma.",
      image: "/ryde.png?height=600&width=800",
      tags: ["Figma", "UI/UX Design", "Ride Sharing"],
      figma: "https://www.behance.net/gallery/184195431/Rydesync-Carpooling-Website-UI-Template", // Figma link
    },
    {
      title: "Gradientica",
      description: "A UI design for website about beautiful gradients art gallery, designed in Figma.",
      image: "/grad.png?height=600&width=800",
      tags: ["Figma", "UI/UX Design", "Gradients"],
      figma: "https://www.behance.net/gallery/168766897/Gradientica-Art-Gallery-Website-Template", // Figma link
    },

  ],
  development: [
    {
      title: "DMC Railway",
      description: "A full-stack Railway Reservation System using Java Swing for UI and MySQL for data storage.",
      image: "/railway.png?height=600&width=800",
      tags: ["Java", "Swing", "MySQL", "Netbeans"],
      github: "https://github.com/Soojal-Kumar/DMC-Railway-Reservation", // GitHub link
    },
    {
      title: "Everdo Todo App",
      description:
        "A task management mobile app using React Native, with cloud integration via Firebase and Firestore.",
      image: "/everto.png?height=600&width=800",
      tags: ["React Native", "Firebase", "Firestore"],
      github: "https://github.com/Soojal-Kumar/Everdo-Todo-App", // GitHub link

    },
    {
      title: "DSA Visualizer",
      description: "An interactive tool to visualize data structures and algorithms for better learning comprehension.",
      image: "/dsa.png?height=600&width=800",
      tags: ["Java", "Swing", "Netbeans", "Data Structures", "Algorithms"],
      github: "https://github.com/Soojal-Kumar/DSA-Visualizer", // GitHub link
    },
    {
      title: "Nutriscan",
      description: "A system where users scan food barcodes to fetch product details and predict nutritional grades.",
      image: "/ntsc.png?height=600&width=800",
      tags: ["Python", "Machine Learning", "Data Processing"],
      github: "https://github.com/Soojal-Kumar/Nutriscan", // GitHub link
    },

  ],
}

// Populate the 'all' category with all projects
projects.all = [...projects.designing, ...projects.development]

const ProjectCard = ({ project, index }) => {
  // Determine if it's a 'designing' project based on the presence of 'figma' property
  const isDesigningProject = project.figma !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full glass-card p-6"
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs bg-white/5 rounded-full border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {/* Conditional rendering of icons */}
        {isDesigningProject ? (
          <a
            href={project.figma} // Use project.figma for designing projects
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass-card hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-5 h-5" /> {/* Show ExternalLink icon */}
          </a>
        ) : (
          <a
            href={project.github} // Use project.github for development projects
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass-card hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5" /> {/* Show Github icon */}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = ({ id }: { id: string }) => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = Object.keys(projects)

  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">Featured Projects</h2>

          <div className="flex justify-center mb-8 space-x-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects[activeCategory].map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects