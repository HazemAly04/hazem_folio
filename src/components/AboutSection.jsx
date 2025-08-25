import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Aspiring Software Engineer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
            With hands-on experience as a Software Engineering Intern at Fidelity Investments and a strong academic background in Computer Science at Dublin City University, I specialize in building full-stack, AI-enhanced applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
            I enjoy building practical, scalable solutions; whether it's a clean web app, a useful AI tool, or a uni project that solves a real problem. I've worked on everything from student portals to AI-powered support systems, and I also help guide first-year students as a peer mentor. I'm always looking to learn and try new tech that helps me improve and build better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
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
                  <h4 className="font-semibold text-lg"> Full Stack Development</h4>
                  <p className="text-muted-foreground">
                  Creating responsive and scalable web applications using frameworks such as React, Next.js, Django, and Flask.
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
                  <h4 className="font-semibold text-lg">AI/ML</h4>
                  <p className="text-muted-foreground">
                  Exploring ways to use AI to make apps smarter and more helpful; from automating tasks to improving how users interact with systems.
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
                  <h4 className="font-semibold text-lg">Mentorship & Leadership</h4>
                  <p className="text-muted-foreground">
                  I love saying yes to new opportunities; whether it's mentoring first-year students as a Senior Peer Mentor, representing my class at DCU, or getting involved in projects that bring people together.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
