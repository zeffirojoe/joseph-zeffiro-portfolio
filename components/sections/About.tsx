import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4 list-disc pl-5">
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
                  Active role during each phase of the Software Development Life
                  Cycle, designing innovative features, maintaining existing
                  functionalities, and delivering clean and maintainable code to
                  ensure technical excellence.
                </li>
                <li>
                  Engaged collaborator, skilled at influencing and aligning
                  multiple teams with conflicting priorities to drive progress
                  under aggressive time constraints. Secret Security Clearance
                  holder, able to handle sensitive information.
                </li>
                <li>
                  Recreational programming includes, but is not limited to,
                  contributing to open-source Java projects, building Next.js or
                  React web pages, and developing Kotlin / Java or React
                  Native-based Android apps.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
