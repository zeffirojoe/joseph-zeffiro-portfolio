import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
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
  );
}
