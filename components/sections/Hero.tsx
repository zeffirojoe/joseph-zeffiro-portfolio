import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
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
  );
}
