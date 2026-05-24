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
  label: string
  iconKey?: string
}

const techCategories: Array<{ name: string; items: TechItem[] }> = [
  {
    name: "Programming Languages",
    items: [
      { label: "C", iconKey: "c" },
      { label: "C++", iconKey: "cpp" },
      { label: "Python", iconKey: "python" },
      { label: "Java", iconKey: "java" },
      { label: "Kotlin", iconKey: "kotlin" },
      { label: "JavaScript", iconKey: "js" },
      { label: "SQL", iconKey: "mysql" },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      { label: "Spring Boot", iconKey: "spring" },
      { label: "Spring AI", iconKey: "spring" },
      { label: "Node.js", iconKey: "nodejs" },
      { label: "Express.js", iconKey: "express" },
      { label: "REST APIs", iconKey: "postman" },
      { label: "Secure API Design" },
    ],
  },
  {
    name: "Android Development",
    items: [
      { label: "Android (Kotlin)", iconKey: "android" },
      { label: "Firebase", iconKey: "firebase" },
    ],
  },
  {
    name: "AI / Machine Learning",
    items: [
      { label: "PyTorch", iconKey: "pytorch" },
      { label: "TensorFlow", iconKey: "tensorflow" },
      { label: "Scikit-learn", iconKey: "sklearn" },
      { label: "Hugging Face Transformers", iconKey: "huggingface" },
      { label: "OpenAI API", iconKey: "openai" },
      { label: "LangChain" },
      { label: "LLM Applications" },
    ],
  },
  {
    name: "Testing and Evaluation",
    items: [
      { label: "Playwright", iconKey: "playwright" },
      { label: "Selenium", iconKey: "selenium" },
      { label: "Pandas", iconKey: "pandas" },
      { label: "Jupyter", iconKey: "jupyter" },
    ],
  },
  {
    name: "Data and BI Tools",
    items: [
      { label: "Microsoft Office 365", iconKey: "microsoft" },
      { label: "Excel" },
      { label: "Google Sheets" },
    ],
  },
  {
    name: "Databases",
    items: [
      { label: "PostgreSQL", iconKey: "postgres" },
      { label: "MongoDB", iconKey: "mongodb" },
      { label: "Redis", iconKey: "redis" },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    items: [
      { label: "Linux", iconKey: "linux" },
      { label: "Git", iconKey: "git" },
      { label: "Docker", iconKey: "docker" },
      { label: "Docker Compose", iconKey: "docker" },
      { label: "GitHub Actions", iconKey: "githubactions" },
      { label: "CI/CD Pipelines", iconKey: "githubactions" },
    ],
  },
]

const techIconFallback: Record<string, typeof Code> = {
  "Secure API Design": Wrench,
  LangChain: Cpu,
  "LLM Applications": Cpu,
  Excel: LineChart,
  "Google Sheets": LineChart,
}

const getFallbackIcon = (label: string) => techIconFallback[label] ?? Wrench

const skillIconUrl = (iconKey: string) =>
  `https://skillicons.dev/icons?i=${iconKey}`

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={`${category.name}-${item.label}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
                  >
                    {item.iconKey ? (
                      <img
                        src={skillIconUrl(item.iconKey)}
                        alt={`${item.label} icon`}
                        className="h-4 w-4"
                        loading="lazy"
                      />
                    ) : (
                      (() => {
                        const Icon = getFallbackIcon(item.label)
                        return <Icon className="h-3.5 w-3.5 text-primary" />
                      })()
                    )}
                    {item.label}
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
