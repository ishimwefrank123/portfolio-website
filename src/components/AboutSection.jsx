import { useCallback } from "react";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const handleDownload = useCallback(async (e) => {

    e.preventDefault();

    // open a new tab right away (avoids popup blockers)
    const newTab = window.open("", "_blank");
    if (!newTab) {
      // fallback: open the file in the same tab
      window.location.href = "/resume.pdf";
      return;
    }

    // optional: remove reference back to this window for security
    try {
      // fetch the PDF as blob
      const res = await fetch("/resume.pdf", { cache: "no-cache" });
      if (!res.ok) throw new Error("Failed to fetch CV");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      // show the PDF in the new tab
      newTab.location.href = blobUrl;

      // trigger a download (same blob)
      const a = document.createElement("a");
      a.href = blobUrl;
      // a.download = "Frank_Ishimwe_CV.pdf"; // suggested filename
      document.body.appendChild(a);
      a.click();
      a.remove();

      // revoke the object URL after a while
      setTimeout(() => URL.revokeObjectURL(blobUrl), 20000);
    } catch (err) {
      console.error("Download failed, opening direct link as fallback:", err);
      // fallback: navigate new tab to the direct public file URL
      newTab.location.href = "/resume.pdf";
    }
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I’m a web developer with experience in building responsive
              applications, robust backends, dynamic React frontends, and
              applying Python libraries for data-driven solutions.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Download CV: uses JS handler to open new tab + start download */}
              <a
                href="/resume.pdf"
                onClick={handleDownload}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Develpment</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Development</h4>
                  <p className="text-muted-foreground">
                    Building cross-platform mobile applications with smooth
                    performance and intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science</h4>
                  <p className="text-muted-foreground">
                    Analyzing and visualizing data using Python libraries to
                    deliver insights and data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
