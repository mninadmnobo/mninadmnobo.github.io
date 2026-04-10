import { Link } from "@/components/ui/link"
import { FileText, ExternalLink, GraduationCap } from "lucide-react"

type ResearchItem = {
  title: string
  type: string
  period: string
  description: string
  status: string
  contributions: string[]
  created: string[]
  tags: string[]
  link: string
}

const research: ResearchItem[] = [
  {
    title: "Web Testing Using Large Language Models",
    type: "Undergraduate Thesis",
    period: "2025 - Present",
    description: "Thesis-driven research focused on LLM-powered pipelines for generating, validating, and benchmarking functional web test cases.",
    status: "Ongoing",
    contributions: [
      "Designed and implemented an end-to-end LLM pipeline for automated web test generation.",
      "Investigated test robustness and coverage behavior across diverse functional scenarios.",
      "Built practical evaluation workflows for comparing generated tests against expected behaviors.",
    ],
    created: [
      "A curated supervised dataset mapping natural-language functional descriptions to test cases.",
      "An evaluation framework for quality, robustness, and coverage analysis.",
    ],
    tags: ["LLM", "Web Testing", "Automation", "Evaluation"],
    link: "https://github.com/mninadmnobo/Test-Case-Generator",
  },
  {
    title: "MedCAR: Conflict-Aware Medical Reasoning",
    type: "Research Project",
    period: "2026 - Present",
    description: "Medical AI research on conflict-aware multi-model reasoning for chest X-ray interpretation with trust-calibrated clinical decision support.",
    status: "Ongoing",
    contributions: [
      "Integrated heterogeneous AI components into a unified chest X-ray analysis pipeline.",
      "Developed a conflict-resolution layer using semantic reasoning and confidence calibration.",
      "Designed trust-aware abstention behavior to improve reliability under uncertainty.",
    ],
    created: [
      "A conflict-aware medical reasoning workflow for contradictory model outputs.",
      "A confidence-calibrated decision layer for safer AI-assisted clinical support.",
    ],
    tags: ["Medical AI", "Reasoning", "Confidence", "Deep Learning"],
    link: "https://github.com/mninadmnobo/MedRAX-premium",
  },
]

export function Research() {
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Research</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Academic work & publications
        </h3>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          I design and evaluate AI systems for software testing and medical decision support, with an emphasis on reliability, robustness, and practical impact.
        </p>

        <div className="grid gap-6">
          {research.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                  {item.type === "Undergraduate Thesis" ? (
                    <GraduationCap className="h-8 w-8 text-primary" />
                  ) : (
                    <FileText className="h-8 w-8 text-primary" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-primary font-medium">{item.type}</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                      {item.period}
                    </span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      item.status === "Ongoing" 
                        ? "bg-amber-500/20 text-amber-400" 
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {item.contributions.map((point) => (
                      <p key={`${item.title}-${point}`} className="text-sm text-muted-foreground leading-relaxed">
                        - {point}
                      </p>
                    ))}
                  </div>

                  <div className="mb-5 rounded-lg border border-border/60 bg-background/30 p-3">
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Created Outputs</p>
                    <div className="space-y-1.5">
                      {item.created.map((artifact) => (
                        <p key={`${item.title}-${artifact}`} className="text-sm text-muted-foreground leading-relaxed">
                          - {artifact}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {item.link && (
                      <Link
                        href={item.link}
                        className="flex items-center gap-1 text-primary hover:underline text-sm"
                      >
                        View Project <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
