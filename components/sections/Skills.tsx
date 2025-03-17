import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap w-full">
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
  );
}
