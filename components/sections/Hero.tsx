"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <ScrollAnimation
            className="w-full md:w-1/3 flex justify-center"
            duration={0.7}
            type="scale"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot.jpg-VLJJ7h58aSle6gXvbomG37jLSU8vmC.jpeg"
                alt="Joseph Zeffiro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            className="w-full md:w-2/3"
            type="fade"
            duration={0.8}
            delay={0.3}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Joseph S. Zeffiro
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Full-Stack Software Engineer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Accomplished software engineer with 5+ years of experience in
              full-stack web development, delivering large-scale software
              systems and web applications within fast-paced environments.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
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
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
