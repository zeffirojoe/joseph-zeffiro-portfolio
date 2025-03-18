"use client";

import { ScrollAnimation } from "@/components/ScrollAnimation";

export function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <ScrollAnimation type="fade" delay={0.1}>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joseph S. Zeffiro. All rights reserved.
          </p>
        </ScrollAnimation>
        <ScrollAnimation type="fade" delay={0.2}>
          <p className="text-sm text-muted-foreground">
            View the source code on{" "}
            <a
              href="https://github.com/zeffirojoe/joseph-zeffiro-portfolio"
              className="hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </ScrollAnimation>
      </div>
    </footer>
  );
}
