import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Corporate Grievance Management System",
      description:
        "Developed a QR-based complaint management system enabling citizens to register issues instantly. Implemented hierarchical workflow with SLA-based tracking and real-time notifications.",
      tech: ["Java (Servlets, EJB)", "JPA", "MySQL", "REST APIs"],
      points: [
        "Implemented QR code-based complaint registration system",
        "Designed multi-level hierarchy (Society → Ward → Zone → Corporate)",
        "Integrated SLA rules for automated escalation and tracking",
        "Enabled real-time status updates and notifications",
      ],
      github:
        "https://github.com/Krishnaiya-vesuwala/Government_Grievance_Redressal_System",
    },
    {
      title: "MS-Intern Platform (MERN)",
      description:
        "Worked on a live MERN-based internship platform contributing to backend APIs, database handling, and frontend integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      points: [
        "Developed RESTful APIs for user and internship management",
        "Handled MongoDB database design and operations",
        "Integrated frontend with backend APIs",
        "Collaborated in a real production environment",
      ],
      github: null,
      status: "Private / In Progress",
    },
    {
      title: "Placement & Recruitment Portal",
      description:
        "Built a web-based recruitment platform to streamline student placement and hiring workflows.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      points: [
        "Developed responsive UI for students and recruiters",
        "Implemented resume upload system",
        "Optimized performance with efficient APIs",
        "Designed scalable architecture",
      ],
      github:
        "https://github.com/Krishnaiya-vesuwala/Department_of_ICT_2025_26_Placement",
    },
    {
      title: "Sign Language Gesture Recognition API",
      description:
        "Developed an AI-based system to convert sign language gestures into text using machine learning.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      points: [
        "Built real-time gesture recognition system",
        "Trained model on custom dataset",
        "Improved accuracy with preprocessing",
        "Integrated API for external use",
      ],
      github: "https://github.com/Krishnaiya-vesuwala/SarvaMeet",
    },
    {
      title: "Attendance Management System (Android)",
      description:
        "Android application for attendance tracking using QR codes and geolocation verification with Firebase integration.",
      tech: ["Kotlin", "Firebase", "FCM", "GPS"],
      points: [
        "Implemented QR-based attendance system",
        "Used geolocation to prevent proxy attendance",
        "Integrated Firebase real-time database",
        "Added notification system for alerts",
      ],
      github: null,
      status: "Code available on request",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12 sm:mb-16">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
            >

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Points */}
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                {project.points.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2 text-gray-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Link or Status */}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 underline hover:text-black transition"
                >
                  View Code →
                </a>
              ) : (
                <span className="text-sm text-gray-400 italic">
                  {project.status}
                </span>
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;