"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export function Education() {
  return (
    <section id="education" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation type="slide">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto space-y-6">
          <ScrollAnimation type="fade" delay={0.2}>
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
          </ScrollAnimation>

          <ScrollAnimation type="fade" delay={0.4}>
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
