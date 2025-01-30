"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "@/app/components/projects-card";
import "../style/ProjectsSection.css";
import ProjectTag from "@/app/components/project-tag";

const projectsData = [
  {
    id: 1,
    title: "JassStar International",
    description:
      "Jass Star International is a modern, responsive website designed to provide an excellent user experience across all devices.",
    image: "/images/jass1.jpeg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/sumair-khan21",
    previewUrl: "https://luxury-cobbler-d23f1b.netlify.app/",
  },
  {
    id: 2,
    title: "TaxeroSolutions",
    description:
      "TaxeroSolutions is a responsive website designed to deliver a professional and user-friendly experience.",
    image: "/images/tex.jpeg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/sumair-khan21",
    previewUrl: "https://www.taxerosolutions.com/",
  },
  {
    id: 3,
    title: "Dynamic Resume Builder",
    description:
      " A Dynamic Resume Builder is a tool or platform that allows users to create, edit, and customize resumes easily without needing design.",
    image: "/images/resume1.jpeg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/sumair-khan21",
    previewUrl: "https://shareable-resume-by-sumair-khan.vercel.app/",
  },
  {
    id: 4,
    title: "NetFlix Clone",
    description:
      "This Netflix clone is a responsive web application that replicates the original platform&apos;s sleek design and functionality.",
    image: "/images/netflix.jpeg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/sumair-khan21",
    previewUrl: "https://willowy-fenglisu-04bf41.netlify.app/",
  },
  {
    id: 5,
    title: "FoodTuck",
    description:
      "FoodTuck is a modern and responsive food delivery website that provides a seamless online ordering experience. ",
    image: "/images/foodtuck.jpeg",
    tag: ["All", "Fronend"],
    gitUrl: "https://github.com/sumair-khan21",
    previewUrl: "https://github.com/sumair-khan21",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    if (tag === newTag) return;
    setTag(newTag);
  };

  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(tag));

  return (
    <motion.div
      id="projects-section"
      className="p-24 px-4 md:px-8 bg-[#101010]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Slowed down the fade-in
    >
      <motion.h2
        className="projects-heading"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} // Slowed down the heading animation
      >
        My Projects
      </motion.h2>
      <div className="text-white flex flex-wrap justify-center gap-4 py-6">
        {["All", "Frontend"].map((tagName) => (
          <motion.div
            key={tagName}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: tag === tagName ? 1.1 : 1, opacity: tag === tagName ? 1 : 0.8 }}
            transition={{ duration: 0.6 }} // Slowed down the tag scale effect
          >
            <ProjectTag
              onClick={() => handleTagChange(tagName)}
              name={tagName}
              isSelected={tag === tagName}
            />
          </motion.div>
        ))}
      </div>
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Slowed down the list fade-in
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4 }} // Sequential entrance with delay
          >
            <ProjectsCard
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
      <div className="full-width-line mt-12"></div>
    </motion.div>
  );
};

export default ProjectsSection;

