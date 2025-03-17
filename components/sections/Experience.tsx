import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  return (
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
                  encompassing the conceptualization, design, and enhancement of
                  innovative features as well as the maintenance of existing
                  functionalities, delivering clean and scalable code in C++,
                  Java, and C#.
                </li>
                <li>
                  Developed a Kotlin-based ATAK Plugin adhering to U.S. Army
                  specifications, integrating advanced geospatial capabilities
                  to enhance battlefield situational awareness.
                </li>
                <li>
                  Solely created a TAK interacting Webtak plugin using React as
                  the primary builder. Made changes to and interacted with Java
                  based TAKX plugins to serve a similar purpose.
                </li>
                <li>
                  Thoughtfully identified functional & system requirements,
                  researched adequate technologies and selected architectural &
                  design patterns allowing for maximum scalability and
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
                  gRPC-based microservices, with an end goal of distributing the
                  strangled modules to Kubernetes.
                </li>
                <li>
                  Streamlined data parsing and visualization primarily with
                  Python, complemented by React and Next.js with TypeScript and
                  JavaScript, achieving a large data processing throughput.
                </li>
                <li>
                  Assisted in stimulating and testing GOV Adjacent applications
                  such as Tak, ExCIS, AFATDS, CPCE, CPOF, and DDS by using JUnit
                  as a harness for gRPC services, achieving a test coverage of
                  over 78% for mission-critical systems.
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
                  Supported the seamless development of a web application using
                  Bootstrap, jQuery, and ColdFusion frameworks, featuring a
                  clean, responsive, and easy-to-use interface, with a peak
                  response time of under 342 ms.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
