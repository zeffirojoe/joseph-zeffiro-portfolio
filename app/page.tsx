import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot.jpg-VLJJ7h58aSle6gXvbomG37jLSU8vmC.jpeg"
                  alt="Joseph Zeffiro"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Joseph S. Zeffiro
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Full-Stack Software Engineer
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mb-8">
                Accomplished software engineer with 5+ years of experience in
                full-stack web development, delivering large-scale software
                systems and web applications within fast-paced environments.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#experience">View Experience</a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://raw.githubusercontent.com/zeffirojoe/joseph-zeffiro-portfolio/master/public/Joseph%20S%20Zeffiro%20Resume.pdf"
                    download="Joseph_S_Zeffiro_Resume.pdf"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-muted py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:joezeffiro@gmail.com" className="hover:underline">
                joezeffiro@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+17327135856" className="hover:underline">
                +1 (732) 713-5856
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Middletown, NJ</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/zeffirojoe"
                className="hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/zeffirojoe/"
                className="hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    Accomplished Software Engineer with 5+ years of experience
                    in full-stack web development and software engineering,
                    delivering large-scale software systems and web applications
                    within fast-paced environments.
                  </li>
                  <li>
                    Extensive technical skillset, with a solid command of
                    programming languages (C++, Java, Python, Rust), frameworks
                    (React, Node.js/Express.js, ColdFusion), databases (SQL &
                    NoSQL), and modern cloud services (AWS, Docker).
                  </li>
                  <li>
                    System Design expert with a proven track record of designing
                    scalable, efficient, and robust solutions involving
                    microservices and layered architectures.
                  </li>
                  <li>
                    Active role during each phase of the Software Development
                    Life Cycle, designing innovative features, maintaining
                    existing functionalities, and delivering clean and
                    maintainable code to ensure technical excellence.
                  </li>
                  <li>
                    Engaged collaborator, skilled at influencing and aligning
                    multiple teams with conflicting priorities to drive progress
                    under aggressive time constraints. Secret Security Clearance
                    holder, able to handle sensitive information.
                  </li>
                  <li>
                    Recreational programming includes, but is not limited to,
                    contributing to open-source Java projects, building Next.js
                    or React web pages, and developing Kotlin / Java or React
                    Native-based Android apps.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="tools">Dev Tools</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="mt-6">
              <div className="flex flex-wrap gap-2">
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
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="mt-6">
              <div className="flex flex-wrap gap-2">
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
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="databases" className="mt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "SQL Server/MSSQL",
                  "Firebase",
                  "MongoDB",
                  "DynamoDB",
                  "Mlab",
                  "MongoCloud",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="flex flex-wrap gap-2">
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
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="expertise" className="mt-6">
              <div className="flex flex-wrap gap-2">
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
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <h4 className="text-lg text-primary">
                      Polaris Alpha | Parsons
                    </h4>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div>Eatontown, NJ</div>
                    <div>May 2019 - Present</div>
                  </div>
                </div>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Contributed to the technical effort by developing key
                    functionalities for a large-scale software system,
                    encompassing the conceptualization, design, and enhancement
                    of innovative features as well as the maintenance of
                    existing functionalities, delivering clean and scalable code
                    in C++, Java, and C#.
                  </li>
                  <li>
                    Developed a Kotlin-based ATAK Plugin adhering to U.S. Army
                    specifications, integrating advanced geospatial capabilities
                    to enhance battlefield situational awareness.
                  </li>
                  <li>
                    Solely created a TAK interacting Webtak plugin using React
                    as the primary builder. Made changes to and interacted with
                    Java based TAKX plugins to serve a similar purpose.
                  </li>
                  <li>
                    Thoughtfully identified functional & system requirements,
                    researched adequate technologies and selected architectural
                    & design patterns allowing for maximum scalability and
                    performance.
                  </li>
                  <li>
                    Designed and optimized system architecture for the DXTRS
                    application, a 20+ year legacy system comprising Java, C++,
                    and C#, now employing the strangler pattern to transition
                    individual modules to Microservices. Focused on enhancing
                    performance, scalability, and maintainability.
                  </li>
                  <li>
                    Transformed legacy applications into Docker containerized
                    gRPC-based microservices, with an end goal of distributing
                    the strangled modules to Kubernetes.
                  </li>
                  <li>
                    Streamlined data parsing and visualization primarily with
                    Python, complemented by React and Next.js with TypeScript
                    and JavaScript, achieving a large data processing
                    throughput.
                  </li>
                  <li>
                    Assisted in stimulating and testing GOV Adjacent
                    applications such as Tak, ExCIS, AFATDS, CPCE, CPOF, and DDS
                    by using JUnit as a harness for gRPC services, achieving a
                    test coverage of over 78% for mission-critical systems.
                  </li>
                  <li>
                    Led design reviews and system optimization initiatives,
                    supported team members through knowledge sharing and
                    mentorship, and promoted software engineering best practices
                    to foster technical excellence.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Full-Stack Web Developer
                    </h3>
                    <h4 className="text-lg text-primary">
                      Rde Systems Support Group
                    </h4>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div>Little Falls, NJ</div>
                    <div>Feb 2019 - May 2019</div>
                  </div>
                </div>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Contributed to the technical effort by developing a tutorial
                    full stack web application, focusing on enhancing both user
                    interfaces and server-side logic for the ECommerce system
                    featuring item selection, carts, ordering.
                  </li>
                  <li>
                    Supported the seamless development of a web application
                    using Bootstrap, jQuery, and ColdFusion frameworks,
                    featuring a clean, responsive, and easy-to-use interface,
                    with a peak response time of under 342 ms.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      B.Sc. in Computer Science
                    </h3>
                    <h4 className="text-lg text-primary">
                      New Jersey Institute of Technology
                    </h4>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div>Newark, NJ</div>
                    <div>2017 - 2019</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Associate Degree</h3>
                    <h4 className="text-lg text-primary">
                      Brookdale Community College
                    </h4>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div>Middletown, NJ</div>
                    <div>2015 - 2017</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a
                        href="mailto:joezeffiro@gmail.com"
                        className="font-medium hover:underline"
                      >
                        joezeffiro@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a
                        href="tel:+17327135856"
                        className="font-medium hover:underline"
                      >
                        +1 (732) 713-5856
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Location
                      </div>
                      <div className="font-medium">Middletown, NJ</div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="http://github.com/zeffirojoe"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://linkedin.com/in/zeffirojoe/"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="mailto:joezeffiro@gmail.com" aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joseph S. Zeffiro. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
