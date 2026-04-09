const techCategories = [
  {
    name: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "Kotlin", "PHP", "C", "SQL"],
  },
  {
    name: "AI / ML",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenCV", "Pandas", "NumPy"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "Flask", "Django", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaFX"],
  },
  {
    name: "DevOps & Tools",
    items: ["Git", "Docker", "Linux", "AWS", "Vercel", "GitHub Actions", "VS Code"],
  },
  {
    name: "Other",
    items: ["REST APIs", "GraphQL", "WebSockets", "Microservices", "System Design", "Agile"],
  },
]

export function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Tech Stack</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          Technologies I work with
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
