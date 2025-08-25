import { useState } from "react";

export const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Fidelity Investments",
      role: "Software Engineer Intern",
      year: "Jun 2025 - Aug 2025",
      image: "https://logo.clearbit.com/fidelity.com",
      description:
      "Built an AI-powered onboarding bot using Next.js, Flask, and Azure with RAG for real-time document retrieval, streamlining employee onboarding and improving FAQ accuracy; presented solution to stakeholders for enterprise adoption."
        },
    {
      id: 2,
      company: "Dublin City University",
      role: "Senior Peer Mentor",
      year: "Jun 2025 - Present",
      image: "https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/media/2018/03/29/dcu_logo_stacked_slate_yellow.png.webp?itok=3aAgeqTT",
      description:
        "Chosen to take on a leadership role within the mentoring program, where I guide and support other peer mentors. I help them develop effective approaches to mentoring, assist with any challenges that arise, and work closely with staff to strengthen the overall support system for students."
    },
    {
        id: 3,
        company: "Dublin City University",
        role: "Computer Science Peer Mentor",
        year: "Sep 2024 - Jun 2025",
        image: "https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/media/2018/03/29/dcu_logo_stacked_slate_yellow.png.webp?itok=3aAgeqTT",
        description:
          "Selected to mentor first-year computer science students, helping them adjust to university life and coursework. I share practical study tips, provide academic and personal guidance, and serve as a point of contact to make their transition smoother."
      },
    {
      id: 4,
      company: "Dublin City University",
      role: "Computer Science Class Representative",
      year: "Sep 2023 - Sep 2024",
      image: "https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/media/2018/03/29/dcu_logo_stacked_slate_yellow.png.webp?itok=3aAgeqTT",
      description:
        "Elected to represent my class by meeting with faculty to communicate student feedback and concerns. Through this role, I strengthened my communication, leadership, and teamwork skills while supporting peers and contributing to a more collaborative and positive student experience."
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional and academic experiences that have shaped my skills and passion for technology.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/40 h-full rounded-full shadow-lg"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-16 group">
              {/* Enhanced Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-full border-4 border-background shadow-xl z-20 transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl">
                <div className="absolute inset-1 bg-background rounded-full opacity-20"></div>
              </div>

              {/* Animated Connection Line */}
              <div
                className={`absolute top-3 w-12 h-0.5 bg-gradient-to-r transition-all duration-500 z-10 ${
                  index % 2 === 0
                    ? "right-1/2 mr-3 from-primary/60 to-transparent group-hover:from-primary"
                    : "left-1/2 ml-3 from-transparent to-primary/60 group-hover:to-primary"
                }`}
              ></div>

              {/* Card Wrapper */}
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? "pr-16" : "pl-16"
                  }`}
                >
                  {/* Enhanced Experience Card */}
                  <div
                    className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-card group-hover:border-primary/30 ${
                      expandedItem === exp.id ? "ring-2 ring-primary/20 shadow-xl" : ""
                    }`}
                    onClick={() => toggleExpanded(exp.id)}
                  >
                    {/* Card Header with Enhanced Styling */}
                    <div className="flex items-start space-x-4">
                      {/* Enhanced Company Image */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-sm"></div>
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="relative w-14 h-14 rounded-full object-cover border-3 border-primary/20 shadow-lg transition-all duration-300 group-hover:border-primary/40"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=6366f1&color=ffffff&size=128`;
                          }}
                        />
                      </div>

                      <div className="flex-1 min-w-0 text-center">
                        <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <p className="text-primary font-semibold text-lg mb-2">{exp.role}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-sm text-muted-foreground font-medium">{exp.year}</p>
                        </div>
                      </div>

                      {/* Enhanced Expand Icon */}
                      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        <svg
                          className={`w-6 h-6 transform transition-all duration-300 ${
                            expandedItem === exp.id ? "rotate-180 text-primary" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Enhanced Expandable Description */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedItem === exp.id ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End Cap */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-gradient-to-br from-primary/40 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
