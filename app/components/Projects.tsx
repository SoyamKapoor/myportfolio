"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github,ExternalLink } from "lucide-react" // Import ExternalLink
import { useState } from "react"

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  figma?: string;
  github?: string;
  youtube?: string;
};

const projects: {
  all: Project[];
  designing: Project[];
  development: Project[];
} = {
  all: [],
  designing: [
    {
      title: "Central Cafeteria, Sukkur IBA University in 3D",
      description: "3D visualization of the Central Cafeteria, Sukkur IBA University using AutoCAD.",
      image: "/central_cafeteria.png",
      tags: ["AutoCAD", "3D Design", "Architecture"],
      github: "https://github.com/SoyamKapoor/central_cafeterai_3D"
    },
  ],
  development: [
    {
      title: "Future of Smart Living: IOT-Driven Home Automation in Cisco Packet Tracer",
      description: "Home automation system using IoT principles and Cisco Packet Tracer for smart home applications.",
      image: "CCN_THUMBNAIL.png",
      tags: ["IoT", "Cisco Packet Tracer", "Home Automation"],
      github: "https://github.com/SoyamKapoor/future_of_smart_living_iot_driven_home_automation_in_cisco_packet_tracer",
    },
    {
      title: "SYNIX mini OS",
      description: "A mini operating system developed using C++ with features like task management and file handling.",
      image: "/synix_os.png",
      tags: ["C++", "Operating System", "Development"],
    },
    {
      title: "Smart SyncEdge Platform",
      description: "A platform designed for seamless integration of smart devices, using edge computing concepts.",
      image: "/smart_syncedge.png",
      tags: ["Edge Computing", "IoT", "Smart Devices"],
      github: "https://github.com/SoyamKapoor/smart_syncedge_platform"
    },
    {
      title: "Speech to Text Using Python",
      description: "A Python-based speech recognition application that converts spoken language into text.",
      image: "/speech_to_text.png?height=600&width=800",
      tags: ["Python", "Speech Recognition", "Machine Learning"],
      github: "https://github.com/SoyamKapoor/speech_to_text_using_python",
    },
    {
      title: "Car Parking Slot Identifier",
      description: "An Arduino project that identifies available parking slots in a parking lot using sensors.",
      image: "/car_parking_slot_identifier.png",
      tags: ["Arduino", "Sensors", "IoT", "Parking Management"],
      github: "https://github.com/SoyamKapoor/car_parking_slot_identifier",
    },
    {
      title: "Virtual Assistant C++",
      description: "A C++ based virtual assistant capable of performing basic tasks like web searches and reminders.",
      image: "/virtual_assistant.png",
      tags: ["C++", "Virtual Assistant", "AI"],
      github: "https://github.com/SoyamKapoor/virtual_assistant",
    },
    {
      title: "Smart Dustbin Using Arduino Uno",
      description: "An Arduino-based smart dustbin that automatically opens and closes based on proximity.",
      image: "/smart_dustbin.png",
      tags: ["Arduino", "IoT", "Automation", "Smart Systems"],
      github: "https://github.com/SoyamKapoor/smart_dustbin_using_arduino_uno",
    },
  ],
};

// Populate the 'all' category with all projects
projects.all = [...projects.designing, ...projects.development]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
  type ProjectCategory = keyof typeof projects;
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

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
                onClick={() => setActiveCategory(category as ProjectCategory)}
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

export default Projects;
