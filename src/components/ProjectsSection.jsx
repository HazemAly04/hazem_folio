import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "University Portal",
    description: "Comprehensive full-stack university administration system built with React frontend and Django REST Framework API. Features complete degree, cohort, module, student, and grade management with responsive design and intuitive user interface.",
    images: [
      "/projects/u1.jpg",
      "/projects/university-portal-1.jpg",
      "/projects/university-portal-2.jpg",
      "/projects/u4.jpg"

    ],
    tags: ["React", "Django", "JavaScript"],
  },
  {
    id: 2,
    title: "Pizza Delivery App",
    description: "Feature-rich pizza delivery web application with real-time order tracking, dynamic cart management, and comprehensive Django Admin integration. Includes user authentication, payment processing, and order status notifications.",
    images: [
      "/projects/pizza-app-1.jpg",
      "/projects/pizza-app-2.jpg",
      "/projects/p1.jpg"
    ],
    tags: ["Django", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "BOI 365 App - SRS",
    description: "Led a team of six in analyzing the Bank of Ireland app and producing a Software Requirements Specification (SRS). Focused on security and compliance, and created UML diagrams and system models to document requirements.",
    images: [
      "/projects/srs-boi-portrait-1.jpg",
      "/projects/srs-boi-portrait-2.jpg",
      "/projects/srs4.jpg",
    ],
    tags: ["Team Leader", "UML", "Analysis"],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing full-stack development, API design, and user experience focus. Click on any project image to view detailed screenshots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div 
                className="h-48 overflow-hidden cursor-pointer relative"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=6366f1&color=ffffff&size=400x200`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full">
                    View Gallery ({project.images.length})
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary/80 text-secondary-foreground hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Image {currentImageIndex + 1} of {selectedProject.images.length}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-secondary rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Display */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[60vh] object-contain bg-secondary/20"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedProject.title)}&background=6366f1&color=ffffff&size=800x600`;
                }}
              />

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {selectedProject.images.length > 1 && (
              <div className="p-4 border-t border-border">
                <div className="flex gap-2 justify-center overflow-x-auto">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden transition-all duration-200 ${
                        index === currentImageIndex 
                          ? "border-primary ring-2 ring-primary/20" 
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${index + 1}&background=6366f1&color=ffffff&size=64x48`;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
