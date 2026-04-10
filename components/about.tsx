import { Code, Server, Brain, Database, GraduationCap, Calendar, BookOpen, FlaskConical, School, Award } from "lucide-react"

const focusAreas = [
  {
    icon: Server,
    title: "Full-Stack Systems",
    description: "Building scalable backend services and practical frontend experiences with production-ready architecture.",
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
              {"I am an undergraduate Computer Science and Engineering student at BUET with experience in full-stack web development, ML-assisted software engineering, and applied artificial intelligence."}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"My research and project work focuses on LLM-based software testing, machine learning, and medical AI, with hands-on experience building end-to-end AI-driven systems and datasets."}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"I focus on end-to-end execution: problem framing, architecture, implementation, and measurable real-world utility."}
            </p>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Why me</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>- I connect AI models to production systems instead of isolated demos.</li>
                <li>- I design for reliability in low-bandwidth and resource-limited contexts.</li>
                <li>- I can move from research idea to deployable product architecture.</li>
              </ul>
            </div>

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

        <div className="mt-16 rounded-3xl border border-primary/20 bg-gradient-to-br from-card/70 via-card/40 to-background/80 p-6 md:p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/15 border border-primary/25">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">Education</h4>
            <div className="hidden md:flex items-center gap-2 ml-auto">
              <span className="px-2 py-1 text-[11px] rounded-md bg-secondary text-secondary-foreground border border-border/70">BUET</span>
              <span className="px-2 py-1 text-[11px] rounded-md bg-primary/10 text-primary border border-primary/25">CSE</span>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 items-stretch">
            <div className="h-full rounded-2xl border border-border/70 bg-background/30 p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/15 border border-primary/25">
                  <School className="h-4 w-4 text-primary" />
                </div>
                <h5 className="text-base md:text-lg font-semibold text-foreground">School and College Journey</h5>
              </div>

              <div className="space-y-4 flex-1">
                <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-sm font-semibold text-foreground">Uttara High School and College</p>
                  <p className="text-sm text-muted-foreground">2008 - 2012</p>
                  <div className="mt-3 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">
                      <Award className="h-3.5 w-3.5" /> PSC (2012): GPA 5
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-sm font-semibold text-foreground">Rajuk Uttara Model College</p>
                  <p className="text-sm text-muted-foreground">2013 - 2021</p>
                  <div className="mt-3 space-y-3">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">
                        <Award className="h-3.5 w-3.5" /> JSC (2018): GPA 5, Talentpool Scholarship
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">
                        <Award className="h-3.5 w-3.5" /> SSC (2018): GPA 5
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">
                        <Award className="h-3.5 w-3.5" /> HSC (2020): GPA 5, General Grade Scholarship
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full rounded-2xl border border-border/70 bg-background/30 p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/15 border border-primary/25">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <h5 className="text-base md:text-lg font-semibold text-foreground">Undergraduate</h5>
              </div>

              <div className="flex-1">
                <p className="text-base text-foreground font-semibold">Bangladesh University of Engineering and Technology (BUET)</p>
                <p className="text-sm text-muted-foreground mt-1 mb-3">BSc in Computer Science and Engineering</p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/70">
                    <Calendar className="h-3.5 w-3.5" />
                    2022 - Present
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">
                    CGPA 3.61 / 4.00
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">
                    <Award className="h-3.5 w-3.5" />
                    BUET CSE
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  <span className="inline-flex items-center gap-1.5 mr-1 text-primary">
                    <FlaskConical className="h-3.5 w-3.5" /> Thesis:
                  </span>
                  <span className="text-foreground">Web Testing Using Large Language Models</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="inline-flex items-center gap-1.5 mr-1 text-primary">
                    <BookOpen className="h-3.5 w-3.5" /> Coursework:
                  </span>
                  DSA, Operating Systems, Computer Architecture, Database Systems, Software Engineering, Machine Learning, AI, Compiler Design
                </p>

                <div className="mt-4 rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-sm font-semibold text-foreground mb-3">Research Interests</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">Artificial Intelligence</span>
                    <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">Machine Learning</span>
                    <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">Software Testing Automation</span>
                    <span className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/25">Medical AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
