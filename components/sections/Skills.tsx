"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
        >
          <Tabs
            defaultValue="languages"
            className="max-w-4xl mx-auto flex flex-col"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="tools">Dev Tools</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="mt-2">
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {[
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
                ].map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="frameworks" className="mt-2">
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {[
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
                ].map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="databases" className="mt-2">
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {[
                  "MySQL",
                  "SQL Server/MSSQL",
                  "Firebase",
                  "MongoDB",
                  "DynamoDB",
                  "Mlab",
                  "MongoCloud",
                ].map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="tools" className="mt-2">
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {[
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
                ].map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="expertise" className="mt-2">
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {[
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
                ].map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
