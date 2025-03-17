export function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Joseph S. Zeffiro. All rights reserved.
        </p>
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
      </div>
    </footer>
  );
}
