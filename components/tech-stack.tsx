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

type TechItem = {
  name: string
  icon: typeof Code
}

const segmentedTechStack: Array<{ name: string; items: TechItem[] }> = [
  {
    name: "Languages",
    items: [
      { name: "C/C++", icon: Code },
      { name: "Python", icon: Code },
      { name: "Java", icon: Code },
      { name: "Kotlin", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "SQL", icon: Database },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      { name: "Spring Boot", icon: Server },
      { name: "Spring AI", icon: Brain },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "REST APIs", icon: Network },
      { name: "Secure API Design", icon: Wrench },
    ],
  },
  {
    name: "AI/ML",
    items: [
      { name: "PyTorch", icon: Brain },
      { name: "TensorFlow", icon: Brain },
      { name: "Scikit-learn", icon: Brain },
      { name: "LLM Applications", icon: Cpu },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    items: [
      { name: "Linux", icon: Terminal },
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Layers },
      { name: "Docker Compose", icon: Layers },
      { name: "GitHub Actions", icon: Cloud },
      { name: "CI/CD Pipelines", icon: Cloud },
      { name: "Firebase", icon: Cloud },
    ],
  },
]

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
    items: ["Microsoft Office 365", "Excel", "Google Sheets"],
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

        <div className="mb-14 space-y-6">
          {segmentedTechStack.map((segment) => (
            <div
              key={segment.name}
              className="rounded-2xl border border-border/70 bg-card/40 p-5 md:p-6 glow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {segment.name}
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {segment.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={`${segment.name}-${item.name}`}
                      className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div key={category.name} className="space-y-4 glow-card">
              <h4 className="text-lg font-semibold text-foreground">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="glow-card inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
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
