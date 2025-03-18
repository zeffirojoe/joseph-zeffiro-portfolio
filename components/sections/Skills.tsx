"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("languages");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const tabs = [
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Dev Tools" },
    { id: "expertise", label: "Expertise" },
  ];

  const tabContent = {
    languages: [
      "C#",
      "C++",
      "C",
      "Java",
      "Rust",
      "Python",
      "Golang",
      "JavaScript",
      "TypeScript",
      "PHP",
      "CFML",
      "HTML/CSS",
    ],
    frameworks: [
      "AngularJS",
      "jQuery",
      "Node.js",
      "Express.js",
      "React",
      "ColdFusion",
      "Next.js",
      "JUnit",
      "Mockito",
      ".NET",
      "Java Spring",
      "Java Swing",
      "OpenAPI",
      "RabbitMQ",
    ],
    databases: [
      "MySQL",
      "SQL Server/MSSQL",
      "Firebase",
      "MongoDB",
      "DynamoDB",
      "Mlab",
      "MongoCloud",
    ],
    tools: [
      "Git",
      "Android Studio",
      "VS Code",
      "SSMS",
      "MongoDB Compass",
      "Maven",
      "Gradle",
      "Jira",
      "AWS",
      "Docker",
      "Containerization",
      "Jenkins",
      "Bitbucket",
      "Github",
      "Gitlab",
      "Atlassian",
      "TeamCity",
      "SonarQube",
    ],
    expertise: [
      "Microservices",
      "SaaS",
      "Multithreading",
      "Data Structures",
      "Algorithms",
      "Debugging",
      "RESTful APIs",
      "gRPC",
      "tRPC",
      "Protocol Buffers",
      "WebSockets",
      "Agile workflow",
      "Scrum",
    ],
  };

  return (
    <section id="skills" className="py-16 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col space-y-6">
            {/* Custom Tab Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-1 p-1 rounded-lg bg-muted text-muted-foreground">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none ${
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow"
                      : "text-muted-foreground hover:bg-background/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[150px]">
              {Object.entries(tabContent).map(([tabId, skills]) => (
                <div
                  key={tabId}
                  className={`${activeTab === tabId ? "block" : "hidden"}`}
                >
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={activeTab === tabId ? "visible" : "hidden"}
                  >
                    {skills.map((skill) => (
                      <motion.div key={skill} variants={itemVariants}>
                        <Badge
                          variant="secondary"
                          className="text-sm py-1 px-3"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
