const techCategories = [
  {
    name: "Programming Languages",
    items: ["C", "C++", "Python", "Java", "Kotlin", "JavaScript", "SQL"],
  },
  {
    name: "Web Development",
    items: ["Spring Boot", "Spring AI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Android Development",
    items: ["Android (Kotlin)", "Firebase"],
  },
  {
    name: "AI / Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers", "OpenAI API", "LangChain"],
  },
  {
    name: "Testing and Evaluation",
    items: ["Playwright", "Selenium", "Pandas", "Jupyter"],
  },
  {
    name: "Data and BI Tools",
    items: ["Microsoft Office 365", "Excel", "Google Sheets", "Power BI (Foundations)"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Systems and Tools",
    items: ["Linux", "Git", "Docker"],
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
