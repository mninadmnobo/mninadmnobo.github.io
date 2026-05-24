import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Layers,
  LineChart,
  Network,
  Server,
  Smartphone,
  TestTube2,
  Terminal,
  Wrench,
} from "lucide-react"

const techCategories = [
  {
    name: "Programming Languages",
    items: ["C", "C++", "Python", "Java", "Kotlin", "JavaScript", "SQL"],
  },
  {
    name: "Backend & APIs",
    items: ["Spring Boot", "Spring AI", "Node.js", "Express.js", "REST APIs", "Secure API Design"],
  },
  {
    name: "Android Development",
    items: ["Android (Kotlin)", "Firebase"],
  },
  {
    name: "AI / Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
      "OpenAI API",
      "LangChain",
      "LLM Applications",
    ],
  },
  {
    name: "Testing and Evaluation",
    items: ["Playwright", "Selenium", "Pandas", "Jupyter"],
  },
  {
    name: "Data and BI Tools",
    items: ["Microsoft Office 365", "Excel", "Google Sheets"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "DevOps & Infrastructure",
    items: ["Linux", "Git", "Docker", "Docker Compose", "GitHub Actions", "CI/CD Pipelines"],
  },
]

const techIconMap: Record<string, typeof Code> = {
  C: Code,
  "C++": Code,
  Python: Code,
  Java: Code,
  Kotlin: Code,
  JavaScript: Code,
  SQL: Database,
  "Spring Boot": Server,
  "Spring AI": Brain,
  "Node.js": Server,
  "Express.js": Network,
  "REST APIs": Network,
  Android: Smartphone,
  "Android (Kotlin)": Smartphone,
  Firebase: Cloud,
  PyTorch: Brain,
  TensorFlow: Brain,
  "Scikit-learn": Brain,
  "Hugging Face Transformers": Brain,
  "OpenAI API": Cpu,
  LangChain: Cpu,
  "LLM Applications": Cpu,
  Playwright: TestTube2,
  Selenium: TestTube2,
  Pandas: LineChart,
  Jupyter: LineChart,
  "Microsoft Office 365": LineChart,
  Excel: LineChart,
  "Google Sheets": LineChart,
  PostgreSQL: Database,
  MongoDB: Database,
  Redis: Database,
  Linux: Terminal,
  Git: GitBranch,
  Docker: Layers,
  "Docker Compose": Layers,
  "GitHub Actions": Cloud,
  "CI/CD Pipelines": Cloud,
  "Secure API Design": Wrench,
}

const getTechIcon = (label: string) => techIconMap[label] ?? Wrench

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
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
                  >
                    {(() => {
                      const Icon = getTechIcon(item)
                      return <Icon className="h-3.5 w-3.5 text-primary" />
                    })()}
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
