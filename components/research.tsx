import { Link } from "@/components/ui/link"
import { FileText, ExternalLink, GraduationCap } from "lucide-react"

const research = [
  {
    title: "Web Testing Using Large Language Models",
    type: "Undergraduate Thesis",
    description: "Designing and implementing LLM-based pipelines for automated web test generation, with a focus on coverage, robustness, and practical evaluation.",
    status: "Ongoing",
    tags: ["LLM", "Web Testing", "Automation", "Evaluation"],
    link: "https://github.com/mninadmnobo/Test-Case-Generator",
  },
  {
    title: "MedCAR: Conflict-Aware Medical Reasoning",
    type: "Research Project",
    description: "Multi-model chest X-ray analysis with a conflict-resolution pipeline that reconciles contradictory outputs using semantic reasoning and confidence calibration.",
    status: "Ongoing",
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
          My research focuses on LLM-based software testing, machine learning, and medical AI applications.
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
