import { Code, Server, Brain, Database } from "lucide-react"

const focusAreas = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Building scalable, reliable backend architectures and APIs with modern frameworks.",
  },
  {
    icon: Brain,
    title: "AI and Machine Learning",
    description: "Developing intelligent systems with LLMs, deep learning, and practical ML pipelines.",
  },
  {
    icon: Code,
    title: "Software Testing Automation",
    description: "Designing LLM-assisted workflows for robust test generation and coverage improvement.",
  },
  {
    icon: Database,
    title: "Medical AI",
    description: "Building trustworthy AI systems for healthcare use cases with conflict-aware reasoning.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">About</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
          Building systems that matter
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"I am an undergraduate Computer Science and Engineering student at BUET with experience in backend systems, ML-assisted software engineering, and applied artificial intelligence."}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"My research and project work focuses on LLM-based software testing, machine learning, and medical AI, with hands-on experience building end-to-end AI-driven systems and datasets."}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"I enjoy turning ideas into production-ready systems, from architecture and implementation to evaluation and deployment."}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <div
                  key={area.title}
                  className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
                >
                  <Icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
