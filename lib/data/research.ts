import type { WorkItem } from '@/lib/types/work'

/**
 * Research output — thesis, submitted work and published benchmarks.
 *
 * ── ACCURACY RULES FOR THIS FILE ───────────────────────────────────────────
 * The only quantitative results stated anywhere on this site are AutoTestGenX's
 * 84.0% scenario coverage and 90% error detection, both of which appear in the
 * CV. Do not add a metric to any entry here that is not in the CV or the
 * paper it links to. MedCAR is under review and reports no numbers; Bengali-Loop
 * is a multi-author benchmark where the contribution is data and evaluation
 * work, not authorship of the whole result.
 */
export const research: WorkItem[] = [
  {
    id: 'autotestgenx',
    kind: 'research',
    title: 'AutoTestGenX',
    subtitle: 'Undergraduate Thesis · Multi-Agent LLM Systems',
    categories: ['AI/ML', 'Research', 'LLM Systems'],
    year: '2025 - 2026',
    status: 'ongoing',
    statusLabel: 'Undergraduate Thesis',
    summary:
      'A multi-agent LLM framework that generates, verifies and executes end-to-end web test suites directly from natural-language requirements — reaching 84.0% scenario coverage against engineer-validated ground truth.',
    techSummary: ['Python', 'LLMs', 'Multi-Agent', 'Playwright'],
    featured: true,

    architectureFlow: [
      'Workflow Extraction',
      'Test Generation',
      'Verification',
      'Refinement',
      'Execution',
    ],

    details: [
      {
        heading: 'Overview',
        body: 'AutoTestGenX is my undergraduate thesis: a framework in which several LLM agents collaborate to turn a functional description of a web application into a runnable end-to-end test suite. One agent extracts user workflows, another writes tests against them, a third verifies and refines what was produced, and the result is executed in a real browser.',
      },
      {
        heading: 'Problem',
        body: 'End-to-end web tests are expensive to write and even more expensive to keep alive. Requirements are written in natural language and change constantly, while the test suite is code that has to be manually re-derived from them every time — so coverage lags behind the product it is meant to protect.',
      },
      {
        heading: 'Motivation',
        body: 'Single-shot prompting of an LLM produces plausible-looking tests that neither cover the workflow space nor survive execution. The question the thesis asks is whether separating the concerns — extraction, generation, verification, refinement, execution — across cooperating agents produces suites good enough to compare against ones a professional engineer would write.',
      },
      {
        heading: 'Methodology',
        points: [
          'Workflow extraction turns a functional description into the set of user journeys the application supports.',
          'A generation agent produces candidate test scenarios and executable test code for each workflow.',
          'A verification stage checks generated tests for validity, then a refinement pass corrects the failures rather than discarding them.',
          'Execution runs the surviving suite against the live application through browser automation.',
        ],
      },
      {
        heading: 'Evaluation',
        points: [
          'Benchmark datasets were constructed across five real-world web applications.',
          'Ground-truth test suites for those applications were validated by professional software engineers, so generated output is compared against what practitioners actually write.',
          'An evaluation framework measures coverage, verification outcomes and execution results.',
        ],
      },
      {
        heading: 'Results',
        points: [
          '84.0% test scenario coverage against engineer-validated ground-truth suites.',
          '90% error detection rate.',
          'Both figures outperform zero-shot and few-shot prompting baselines on the same benchmark.',
        ],
      },
    ],

    contribution: {
      heading: 'My Contribution',
      body: 'This is my undergraduate thesis work: I designed the multi-agent framework, built the benchmark datasets and evaluation harness, and ran the comparison against the prompting baselines.',
    },

    tech: [
      { name: 'Core', items: ['Python', 'LLM Engineering', 'Prompt Engineering'] },
      { name: 'Agents', items: ['Multi-Agent Systems', 'Workflow Extraction', 'Verification Loops'] },
      { name: 'Execution', items: ['Playwright', 'Browser Automation', 'Selenium'] },
    ],

    links: [
      { label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/Test-Case-Generator', kind: 'code' },
    ],
  },

  {
    id: 'medcar',
    kind: 'research',
    title: 'MedCAR',
    subtitle: 'Conflict-Aware Medical Reasoning · Medical AI',
    categories: ['AI/ML', 'Research', 'Medical AI'],
    year: '2026',
    status: 'under-review',
    statusLabel: 'Under Review',
    summary:
      'A reasoning layer over multiple chest X-ray models that reconciles contradictory predictions instead of averaging them, using confidence calibration and uncertainty-based abstention to decide when not to answer.',
    techSummary: ['PyTorch', 'Medical AI', 'Deep Learning'],
    featured: true,

    architectureFlow: ['Multi-Model Inference', 'Conflict Resolution', 'Confidence Calibration', 'Abstention'],

    details: [
      {
        heading: 'Overview',
        body: 'MedCAR is a conflict-aware reasoning system for chest X-ray analysis. Rather than treating several diagnostic models as an ensemble to be averaged, it treats their disagreement as information — reconciling contradictory outputs semantically and calibrating the confidence of whatever conclusion survives.',
      },
      {
        heading: 'Problem',
        body: 'Deploying more than one medical imaging model surfaces a problem that a single model hides: they disagree. A pipeline that silently averages those outputs produces a confident-looking answer with no record of the conflict underneath it, which is exactly the wrong property for a system meant to support a clinical decision.',
      },
      {
        heading: 'Motivation',
        body: 'In a clinical setting an unreliable answer is worse than no answer. The design goal was a system that can decline — surfacing conflict and abstaining under uncertainty rather than resolving it invisibly.',
      },
      {
        heading: 'Approach',
        points: [
          'Several diagnostic models are integrated into one pipeline over the same study.',
          'A semantic conflict-resolution stage reconciles contradictory findings rather than voting on them.',
          'Confidence calibration converts raw model scores into usable confidence estimates.',
          'An uncertainty-based abstention mechanism withholds a recommendation when the calibrated confidence does not support one.',
        ],
      },
      {
        heading: 'Outcome',
        body: 'The result is an auditable decision layer: every recommendation carries the conflict state and confidence that produced it, and low-confidence cases are escalated rather than answered. The work is currently under review.',
      },
    ],

    contribution: {
      heading: 'My Contribution',
      body: 'I built the multi-model reasoning pipeline — the conflict-resolution stage, the confidence calibration, and the uncertainty-based abstention framework.',
    },

    tech: [
      { name: 'Modelling', items: ['PyTorch', 'Deep Learning', 'Medical Imaging'] },
      { name: 'Reasoning', items: ['Confidence Calibration', 'Uncertainty Estimation', 'Conflict Resolution'] },
      { name: 'Tooling', items: ['Python', 'NumPy'] },
    ],

    links: [{ label: 'Code (GitHub)', href: 'https://github.com/mninadmnobo/MedCAR', kind: 'code' }],
  },

  {
    id: 'bengali-loop',
    kind: 'research',
    title: 'Bengali-Loop',
    subtitle: 'Preprint · Bangla ASR & Speaker Diarization Benchmark',
    categories: ['AI/ML', 'Research', 'Speech / Diarization'],
    year: '2026',
    status: 'published',
    statusLabel: 'Preprint · arXiv 2602.14291',
    summary:
      'A community benchmark for long-form Bangla speech recognition and speaker diarization, giving a low-resource language the standardized datasets and evaluation protocol it lacked.',
    techSummary: ['Python', 'Speech Processing', 'ASR'],
    featured: true,

    architectureFlow: ['Data Collection', 'Preprocessing & Annotation', 'Benchmark Evaluation'],

    details: [
      {
        heading: 'Overview',
        body: 'Bengali-Loop is a community benchmark for long-form Bangla automatic speech recognition and speaker diarization — curated datasets, annotation pipelines and a standardized evaluation protocol, published as a preprint on arXiv.',
      },
      {
        heading: 'Problem',
        body: 'Bangla is spoken by hundreds of millions of people yet has no standardized large-scale benchmark for long-form speech or multi-speaker diarization. Without shared data and a shared protocol, published results are not comparable and progress on the language cannot be measured.',
      },
      {
        heading: 'Approach',
        points: [
          'Real-world long-form speech was collected and curated at scale.',
          'Annotation pipelines — including subtitle extraction — turned raw recordings into aligned, labelled data.',
          'Evaluation was standardized on Word Error Rate for recognition and Diarization Error Rate for speaker attribution, making runs reproducible across research groups.',
        ],
      },
      {
        heading: 'Outcome',
        body: 'The benchmark gives Bangla ASR and diarization work a consistent basis for comparison, with an annotated corpus and a reproducible evaluation workflow available to the research community.',
      },
    ],

    contribution: {
      heading: 'My Contribution',
      body: 'This is multi-author work. My contribution was to the data and evaluation side, not the benchmark as a whole.',
      points: [
        'Built data collection and preprocessing pipelines, including subtitle extraction and annotation workflows for real-world speech.',
        'Supported evaluation using Word Error Rate (WER) and Diarization Error Rate (DER).',
      ],
    },

    tech: [
      { name: 'Speech', items: ['Speech Processing', 'ASR', 'Speaker Diarization'] },
      { name: 'Evaluation', items: ['Word Error Rate (WER)', 'Diarization Error Rate (DER)'] },
      { name: 'Tooling', items: ['Python', 'Machine Learning', 'Data Pipelines'] },
    ],

    links: [{ label: 'Paper (arXiv: 2602.14291)', href: 'https://arxiv.org/abs/2602.14291', kind: 'paper' }],
  },
]
