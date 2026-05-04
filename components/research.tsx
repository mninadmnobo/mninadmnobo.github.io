import { Link } from "@/components/ui/link"
import { FileText, ExternalLink, GraduationCap, ArrowRight } from "lucide-react"

type ResearchItem = {
  title: string
  type: string
  period: string
  description: string
  status: string
  problem: string
  solution: string
  impact: string
  methodFlow: string[]
  proof: string[]
  highlights: string[]
  created: string[]
  tech: string[]
  tags: string[]
  link: string
  arxivId?: string
}

const research: ResearchItem[] = [
  {
    title: "Web Testing Using Large Language Models",
    type: "Undergraduate Thesis",
    period: "2025 - Present",
    description: "LLM-based pipelines for automated generation, validation, and evaluation of functional web test cases.",
    status: "Ongoing",
    problem: "Manual test creation is costly and inconsistent when translating natural-language requirements into reliable test cases.",
    solution: "Built an end-to-end LLM pipeline for test generation, validation, and coverage evaluation.",
    impact: "Enabled automated workflows from natural-language intent to measurable test quality and coverage.",
    methodFlow: ["Intent Parsing", "LLM Test Generation", "Validation & Coverage"],
    proof: ["Supervised dataset", "Benchmark framework", "Reproducible pipeline"],
    highlights: [
      "Designed LLM-based pipeline for automated web test generation.",
      "Analyzed robustness and coverage across diverse test scenarios.",
      "Built evaluation workflows for comparing generated tests with expected behavior.",
    ],
    created: [
      "Dataset mapping natural-language specifications to executable test cases.",
      "Evaluation framework for test quality, robustness, and coverage.",
    ],
    tech: ["Python", "Playwright", "Selenium", "LLM APIs"],
    tags: ["LLM", "Testing", "Automation"],
    link: "https://github.com/mninadmnobo/Test-Case-Generator",
  },
  {
    title: "MedCAR: Conflict-Aware Medical Reasoning",
    type: "Research Project",
    period: "2026",
    description: "Conflict-aware multi-model reasoning system for chest X-ray analysis with confidence-calibrated clinical support.",
    status: "Under Review",
    problem: "Conflicting predictions across medical AI models create uncertainty and reduce reliability in clinical decision-making.",
    solution: "Designed a reasoning layer with semantic reconciliation and confidence-calibrated abstention.",
    impact: "Improves trust and safety by converting conflicting outputs into auditable, confidence-aware recommendations.",
    methodFlow: ["Multi-model Inference", "Conflict Resolution", "Confidence Calibration"],
    proof: ["Conflict-resolution pipeline", "Confidence-aware decisions", "Integrated system"],
    highlights: [
      "Integrated multiple AI models into a unified diagnostic pipeline.",
      "Developed semantic conflict-resolution with confidence calibration.",
      "Designed abstention mechanisms for safer decision support.",
    ],
    created: [
      "Conflict-aware reasoning pipeline for multi-model predictions.",
      "Confidence-calibrated decision layer for clinical support.",
    ],
    tech: ["Python", "PyTorch", "NumPy"],
    tags: ["Medical AI", "Reasoning", "Deep Learning"],
    link: "https://github.com/mninadmnobo/MedCAR",
  },
  {
    title: "Bengali-Loop: Community Benchmarks for Long-Form Bangla ASR and Speaker Diarization",
    type: "Preprint",
    period: "2026",
    description: "Large-scale benchmark dataset and evaluation framework for long-form Bangla ASR and speaker diarization.",
    status: "Preprint (arXiv : 2602.14291)",
    problem: "Bangla lacks standardized large-scale datasets and evaluation benchmarks for long-form speech recognition and multi-speaker diarization.",
    solution: "Contributed to building a reproducible benchmark with curated datasets, annotation pipelines, and standardized evaluation protocols.",
    impact: "Enables consistent benchmarking for Bangla ASR and diarization using Word Error Rate (WER) and Diarization Error Rate (DER).",
    methodFlow: ["Data Collection", "Preprocessing & Annotation", "Benchmark Evaluation"],
    proof: [
      "Large-scale annotated speech dataset",
      "Standardized evaluation metrics (WER, DER)",
      "Reproducible benchmarking framework"
    ],
    highlights: [
      "Contributed to the development of a benchmark dataset for long-form Bangla ASR and speaker diarization.",
      "Built data collection and preprocessing pipelines, including subtitle extraction and annotation workflows.",
      "Supported evaluation using Word Error Rate (WER) and Diarization Error Rate (DER)."
    ],
    created: [
      "Data pipelines for subtitle extraction and annotation of real-world speech data",
      "Benchmark evaluation workflows for ASR and speaker diarization models"
    ],
    tech: ["Python", "Speech Processing", "Machine Learning"],
    tags: ["ASR", "Speech", "Benchmark"],
    link: "https://arxiv.org/abs/2602.14291",
  },
]

export function Research() {
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Research</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Research and Thesis Work
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

                  {/* TITLE + LINK */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>

                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="flex items-center gap-2 text-sm md:text-base font-semibold text-primary hover:underline whitespace-nowrap shrink-0"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {item.type === "Preprint"
                          ? "Paper(arXiv:2602.14291)"
                          : "GitHub"}
                      </Link>
                    )}
                  </div>

                  {/* META */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-primary font-medium">{item.type}</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                      {item.period}
                    </span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      item.status === "Ongoing" 
                        ? "bg-amber-500/20 text-amber-400" 
                        : item.type === "Preprint"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid gap-3 md:grid-cols-3 mb-5">
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">{item.problem}</p>
                    </div>
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {item.highlights.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground">- {p}</li>
                    ))}
                  </ul>

                  <div className="mb-5 space-y-3">
                    <div>
                      <p className="text-xs uppercase text-primary mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs bg-secondary rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase text-primary mb-2">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/70 bg-background/40 p-4">
                    <p className="text-xs uppercase text-primary mb-3">Architecture and Proof</p>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {item.methodFlow.map((step, i) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs bg-secondary rounded-md">{step}</span>
                          {i < item.methodFlow.length - 1 && <ArrowRight className="h-3 w-3" />}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs text-primary mb-2">Evidence</p>
                        {item.proof.map((p) => (
                          <p key={p} className="text-sm text-muted-foreground">- {p}</p>
                        ))}
                      </div>

                      <div>
                        <p className="text-xs text-primary mb-2">Artifacts</p>
                        {item.created.map((c) => (
                          <p key={c} className="text-sm text-muted-foreground">- {c}</p>
                        ))}
                      </div>
                    </div>
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
