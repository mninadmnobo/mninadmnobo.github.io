import React from 'react'
import {
  BarChart3,
  Brain,
  Cloud,
  Code,
  Database,
  Server,
  Smartphone,
  Wrench,
} from 'lucide-react'

import { skillGroups } from '@/lib/data'
import { SectionHeader } from '@/components/ui/section-header'
import { Reveal } from '@/components/ui/reveal'

const GROUP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  brain: Brain,
  server: Server,
  database: Database,
  cloud: Cloud,
  smartphone: Smartphone,
  wrench: Wrench,
  'bar-chart': BarChart3,
}

/**
 * Renders authentic, high-quality brand SVG logos with accurate official colors for each skill.
 */
function BrandSkillIcon({ name }: { name: string }) {
  const sizeClass = "h-4 w-4 shrink-0"

  switch (name) {
    case 'Next.js':
      return (
        <svg className={sizeClass} viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path d="M149.508 157.52L69.143 54H54V125.97H66.8136V69.9698L136.936 160.916C141.385 160.034 145.597 158.883 149.508 157.52Z" fill="url(#next_a)" />
          <path d="M115.342 54H128.156V126H115.342V54Z" fill="url(#next_b)" />
          <defs>
            <linearGradient id="next_a" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next_b" x1="121.75" y1="54" x2="120.75" y2="106" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'Angular':
      return (
        <svg className={sizeClass} viewBox="0 0 250 250">
          <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 175.3,153.4 185.8,128 125,128 125,30" fill="#C3002F" />
          <path d="M125,52.1L66.8,177.7h23.2l11.7-29.3h46.6l11.7,29.3h23.2L125,52.1z M113.8,128.4l11.2-28l11.2,28H113.8z" fill="#FFFFFF" />
        </svg>
      )

    case 'React':
      return (
        <svg className={sizeClass} viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )

    case 'Python':
      return (
        <svg className={sizeClass} viewBox="0 0 110 110">
          <path d="M51.27 1.02c-15.65.07-24.96.95-24.96.95s-6.73 1.01-10.42 5.61c-3.69 4.6-3.8 11.27-3.8 11.27l.07 11.29s.09 6.27 4.19 8.76c4.1 2.49 10.36 2.37 10.36 2.37h9.85v-4.83s.09-6.33 6.39-6.52c6.3-.19 19.34.02 19.34.02s5.88-.34 6.13-6.27c.26-5.93-.07-16.14-.07-16.14s-.73-5.32-5.74-6.42c-5.01-1.1-11.34-.1-11.34-.1z" fill="#306998" />
          <path d="M58.73 108.98c15.65-.07 24.96-.95 24.96-.95s6.73-1.01 10.42-5.61c3.69-4.6 3.8-11.27 3.8-11.27l-.07-11.29s-.09-6.27-4.19-8.76c-4.1-2.49-10.36-2.37-10.36-2.37h-9.85v4.83s-.09 6.33-6.39 6.52c-6.3.19-19.34-.02-19.34-.02s-5.88.34-6.13 6.27c-.26 5.93.07 16.14.07 16.14s.73 5.32 5.74 6.42c5.01 1.1 11.34.1 11.34.1z" fill="#FFD43B" />
          <circle cx="36.5" cy="11.5" r="3.5" fill="#FFF" />
          <circle cx="73.5" cy="98.5" r="3.5" fill="#FFF" />
        </svg>
      )

    case 'C / C++':
    case 'C':
    case 'C++':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#00599C" d="M117.5 33.5l-48-27.7c-3.4-2-7.6-2-11 0l-48 27.7c-3.4 2-5.5 5.6-5.5 9.5v55.4c0 3.9 2.1 7.5 5.5 9.5l48 27.7c3.4 2 7.6 2 11 0l48-27.7c3.4-2 5.5-5.6 5.5-9.5V43c0-3.9-2.1-7.5-5.5-9.5z" />
          <path fill="#FFFFFF" d="M49 42c-12 0-21.5 9.5-21.5 22S37 86 49 86c7.5 0 14.3-3.9 18.2-10l-9.1-5.3c-2 3.1-5.4 5.1-9.1 5.1-6 0-10.8-4.9-10.8-11.4s4.9-11.4 10.8-11.4c3.7 0 7.1 2 9.1 5.1l9.1-5.3C63.3 45.9 56.5 42 49 42zm29 17v4h-5v4h5v5h4v-5h5v-4h-5v-4h-4zm18 0v4h-5v4h5v5h4v-5h5v-4h-5v-4h-4z" />
        </svg>
      )

    case 'Java':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#E76F00" d="M47.7 93.3s-4.6 3.6 3.1 4.5c9.4 1.1 16-1.1 16-1.1s-2.3 1.5-6.6 2.3c-7.6 1.4-16.1.9-21.7-2.1-1.7-.9.5-2.5 1.8-2.8 2.2-.6 7.4-.8 7.4-.8z" />
          <path fill="#5382A1" d="M45.5 76.5s-4.9 4.3 2.5 5.2c9.2 1.1 18.4-.2 24.2-2.5 0 0-2.3 1.3-6.9 2.2-8.3 1.6-19.5 1.5-25.5-1.9-1.5-.9.4-2.3 1.8-2.6 1.9-.4 3.9-.4 3.9-.4z" />
          <path fill="#E76F00" d="M62.6 53.6c4 4.5.9 8.5.9 8.5s6.1-3.1 2.3-8.1c-3.6-4.7-6.2-7.1.8-15.3 0 0-10 2.8-4 14.9z" />
          <path fill="#5382A1" d="M78.6 86.8c11.3-5.9 14.9-14.7 14.9-14.7s-1.4 4.3-8.8 9.3c-8.4 5.7-18.7 7.6-28.7 7.6-12.8 0-24.1-3.6-24.1-3.6s3.8 2.4 14 3.6c11.7 1.4 23.3.7 32.7-2.2z" />
        </svg>
      )

    case 'Kotlin':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <polygon fill="url(#kt_a)" points="128,0 0,0 0,128 128,0" />
          <polygon fill="url(#kt_b)" points="0,128 64,64 128,128 0,128" />
          <polygon fill="url(#kt_c)" points="0,0 64,64 0,128 0,0" />
          <defs>
            <linearGradient id="kt_a" x1="100.5" y1="27.5" x2="2.5" y2="125.5" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E44857" />
              <stop offset="0.47" stopColor="#C711E1" />
              <stop offset="1" stopColor="#7F52FF" />
            </linearGradient>
            <linearGradient id="kt_b" x1="1.4" y1="126.6" x2="62.4" y2="65.6" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7F52FF" />
              <stop offset="1" stopColor="#C711E1" />
            </linearGradient>
            <linearGradient id="kt_c" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00E5FF" />
              <stop offset="1" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'JavaScript':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <rect width="128" height="128" fill="#F7DF1E" rx="16" />
          <path fill="#000000" d="M67.3 104c3.3 5.4 8 9 16.5 9 7.2 0 11.7-3.6 11.7-8.7 0-6-4.5-8.1-12.3-11.7l-4.2-1.8c-12-5.1-20.1-11.4-20.1-25.2 0-12.6 9.6-22.2 24.9-22.2 10.8 0 18.3 3.9 23.4 12.6L95.7 63c-3-5.1-6.6-7.2-11.7-7.2-5.4 0-9 3.6-9 7.5 0 5.4 3.9 7.5 11.4 10.8l4.2 1.8c14.1 6 21.6 12 21.6 25.8 0 14.7-11.4 23.7-28.5 23.7-14.7 0-24.3-6.6-29.4-16.5l13-8.1zm-40-1.2c3 4.8 6.3 8.4 12.3 8.4 6 0 9.9-2.4 9.9-12V44h17.1v56.4c0 18.6-11.1 26.7-26.7 26.7-13.8 0-22.5-7.2-26.4-16.2l13.8-8.1z" />
        </svg>
      )

    case 'TypeScript':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <rect width="128" height="128" fill="#3178C6" rx="16" />
          <path fill="#FFFFFF" d="M117.5 64h-30v46.7h-17.7V64h-30V48.5h77.7V64zm-57 26.3c3.4 5 7.8 8.1 14.9 8.1 6.5 0 10.4-2.8 10.4-7.5 0-5.1-4-7.1-10.9-10.1l-3.8-1.6c-10.6-4.6-17.7-10.2-17.7-22.4 0-11.2 8.5-19.8 22.1-19.8 9.6 0 16.2 3.5 20.8 11.2L85 58.7c-2.7-4.5-5.9-6.4-10.4-6.4-4.8 0-8 3.2-8 6.6 0 4.8 3.5 6.6 10.1 9.6l3.8 1.6c12.5 5.3 19.1 10.7 19.1 23 0 13.1-10.1 21.1-25.3 21.1-13 0-21.6-5.9-26.1-14.7l12.3-9.2z" />
        </svg>
      )

    case 'SQL':
    case 'PostgreSQL':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#336791" d="M63.8 15.6c-27.1 0-48.4 4.3-48.4 9.9v76.9c0 5.6 21.3 9.9 48.4 9.9s48.4-4.3 48.4-9.9V25.5c0-5.6-21.3-9.9-48.4-9.9zm0 8.3c21.8 0 40 3.2 40 6.6s-18.2 6.6-40 6.6-40-3.2-40-6.6 18.2-6.6 40-6.6zm-40 24.3c5.3 2.7 21 5.3 40 5.3s34.7-2.6 40-5.3v13.6c-5.3 2.7-21 5.3-40 5.3s-34.7-2.6-40-5.3V48.2zm0 25.5c5.3 2.7 21 5.3 40 5.3s34.7-2.6 40-5.3v13.6c-5.3 2.7-21 5.3-40 5.3s-34.7-2.6-40-5.3V73.7z" />
        </svg>
      )

    case 'Spring Boot':
    case 'Spring AI':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#6DB33F" d="M117.8 45.4c-6.1-23.7-26.7-39.7-52.6-39.7C34.7 5.7 10 30.4 10 60.9c0 24.9 16.4 45.9 39.1 52.4.9.3 1.8.4 2.8.4 3.7 0 6.7-3 6.7-6.7 0-2.8-1.7-5.3-4.3-6.2C36.9 94 24.8 78.6 24.8 60.9c0-22.3 18.1-40.4 40.4-40.4 18.7 0 34.6 12.8 39.1 30.5.4 1.7 1.5 3.2 3.1 3.9 1.6.7 3.4.6 4.9-.3 2.6-1.5 7.6-4.5 5.5-9.2z" />
          <path fill="#6DB33F" d="M65.2 38.6C48.6 38.6 35.1 52.1 35.1 68.7c0 16.6 13.5 30.1 30.1 30.1s30.1-13.5 30.1-30.1c0-16.6-13.5-30.1-30.1-30.1zm0 46.2c-8.9 0-16.1-7.2-16.1-16.1 0-8.9 7.2-16.1 16.1-16.1s16.1 7.2 16.1 16.1c0 8.9-7.2 16.1-16.1 16.1z" />
        </svg>
      )

    case 'Node.js':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#339933" d="M64 10.5L14.7 39v57L64 125l49.3-29V39L64 10.5zm34 72L64 102.5 30 82.5V47.5L64 27.5l34 20v35z" />
        </svg>
      )

    case 'Express.js':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-neutral-400/40 bg-neutral-500/15 font-mono text-[8px] font-black text-neutral-800 dark:text-neutral-200">
          ex
        </span>
      )

    case 'Android (Kotlin)':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#3DDC84" d="M29.8 45.4l-7.7-13.3c-.9-1.5-.4-3.4 1.1-4.3 1.5-.9 3.4-.4 4.3 1.1l7.9 13.7c10.4-4.8 22.3-7.5 34.7-7.5s24.3 2.7 34.7 7.5l7.9-13.7c.9-1.5 2.8-2 4.3-1.1 1.5.9 2 2.8 1.1 4.3l-7.7 13.3c15.2 8.7 25.5 23.9 27.5 41.6H10.1c2-17.7 12.3-32.9 27.5-41.6zM41.8 63c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm44.4 0c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z" />
        </svg>
      )

    case 'Firebase':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#FFA000" d="M19.7 97.4l18.4-34.7L19.7 25.2c-.7-1.3-2.6-1.3-3.2.1L.7 92.1c-.6 1.4.6 2.9 2.1 2.6l16.9-3.4c.1 0 .2 0 .3.1z" />
          <path fill="#F57C00" d="M66.4 49.8L51.8 22.3c-.7-1.3-2.6-1.3-3.3 0L37.1 43.8l29.3 6z" />
          <path fill="#FFCA28" d="M125.2 92.1L107.5 25.3c-.4-1.4-2.3-1.4-2.9-.1L86.2 63.8l17.7 33.6 21.3-5.3c1.5-.4 2.2-1.9 1.5-3.1z" />
          <path fill="#FFA000" d="M64 121.2l40-23.8L86.3 63.8 64 121.2z" />
        </svg>
      )

    case 'PyTorch':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#EE4C2C" d="M83.5 17.6L68.8 32.3c11.6 11.6 11.6 30.5 0 42.1-11.6 11.6-30.5 11.6-42.1 0-11.6-11.6-11.6-30.5 0-42.1L41.4 17.6c-19.8 19.8-19.8 51.8 0 71.6 19.8 19.8 51.8 19.8 71.6 0 19.7-19.8 19.7-51.8.5-71.6z" />
          <circle fill="#EE4C2C" cx="80.6" cy="27.4" r="7.5" />
        </svg>
      )

    case 'TensorFlow':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#FF6F00" d="M63.8 8.6L12.5 38.2v59.2l30.7-17.7V46.6l20.6-11.9v83.9l20.6-11.9V34.7l20.6 11.9v33.1l30.7 17.7V38.2L63.8 8.6z" />
        </svg>
      )

    case 'Scikit-learn':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#F7931E" d="M64 14L14 42.8v56.4L64 128l50-28.8V42.8L64 14zm0 18.5l34 19.6v39.2L64 111 30 91.3V52.1L64 32.5z" />
          <circle fill="#3499CD" cx="64" cy="64" r="16" />
        </svg>
      )

    case 'Hugging Face Transformers':
    case 'Hugging Face':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#FFD21E" />
          <path fill="#000" d="M42 52a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm44 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM36 82c6 10 16 16 28 16s22-6 28-16H36z" />
        </svg>
      )

    case 'OpenAI API':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#10A37F" d="M116.5 54.3c-2.3-15.5-13.6-27.9-29.2-31.2-4.8-1-9.8-1-14.6 0-3.4-11.2-12.2-19.8-23.7-22.6-15.5-3.7-31.2 3.2-38.6 17.1-2.3 4.3-3.6 9.1-3.9 14-11.6 3.4-20.7 12.2-23.7 23.7-3.9 15.5 2.7 31.2 16.6 39.1 1.7 4.6 4.3 8.8 7.7 12.4 11.2 11.6 28.5 14.6 42.9 7.7 4.6 1.7 9.5 2.3 14.3 1.7 15.5-2.3 27.9-13.6 31.2-29.2 1-4.8 1-9.8 0-14.6 11.2-3.4 19.8-12.2 22.6-23.7 3.7-15.5-3.2-31.2-17.1-38.6-2.2-2.1-4.5-3.9-7-5.4z" />
        </svg>
      )

    case 'LangChain':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#2DD4BF" d="M40 24h48v16H40zM24 56h80v16H24zM40 88h48v16H40z" />
        </svg>
      )

    case 'LLM Systems':
    case 'LLM Apps':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
        </svg>
      )

    case 'Playwright':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#45BA4B" d="M34 20C26.3 20 20 26.3 20 34v60c0 7.7 6.3 14 14 14h60c7.7 0 14-6.3 14-14V34c0-7.7-6.3-14-14-14H34zm12 24h36c6.6 0 12 5.4 12 12s-5.4 12-12 12H58v24H46V44zm12 12v12h24c2.2 0 4-1.8 4-4s-1.8-4-4-4H58z" />
        </svg>
      )

    case 'Selenium':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#43B02A" />
          <text x="64" y="85" fill="#FFFFFF" fontSize="64" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Se</text>
        </svg>
      )

    case 'REST APIs':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="#FF6C37" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )

    case 'Secure API Design':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )

    case 'Docker':
    case 'Docker Compose':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#2496ED" d="M122.9 50.8c-2.4-1.8-7.7-2.7-12.7-.9-1.5.5-3 1.3-4.3 2.3-3.6-10.4-12.8-17.7-24-19.1V28H70.1V16.3H56.3V28H42.5V16.3H28.7V28H15v14.9H1.2v14.9h121.7c.3-2.4.2-4.7 0-7zM28.7 30.6h11.2v12.3H28.7V30.6zm13.8 0h11.2v12.3H42.5V30.6zm13.8 0h11.2v12.3H56.3V30.6zm-41.3 14.9h11.2v12.3H15V45.5zm13.7 0h11.2v12.3H28.7V45.5zm13.8 0h11.2v12.3H42.5V45.5zm13.8 0h11.2v12.3H56.3V45.5zm13.8 0h11.2v12.3H70.1V45.5z" />
        </svg>
      )

    case 'GitHub Actions':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#2088FF">
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      )

    case 'CI/CD Pipelines':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )

    case 'MongoDB':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#47A248" d="M64 12c-2.4 0-4.3 2-4.3 4.4v95.2c0 2.4 1.9 4.4 4.3 4.4s4.3-2 4.3-4.4V16.4c0-2.4-1.9-4.4-4.3-4.4z" />
          <path fill="#47A248" d="M64 16.4c-15.5 13-26 32.5-26 53.6 0 21.1 10.5 40.6 26 53.6V16.4z" />
        </svg>
      )

    case 'Redis':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#DC382D" d="M116 48L64 22 12 48l52 26 52-26zm-52 38L12 60v20l52 26 52-26V60L64 86z" />
        </svg>
      )

    case 'Linux':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#FFC107" d="M64 12c-22 0-36 20-36 44 0 14 5 24 10 32-6 4-12 12-12 20 0 8 10 12 20 12 8 0 14-4 18-8 4 4 10 8 18 8 10 0 20-4 20-12 0-8-6-16-12-20 5-8 10-18 10-32 0-24-14-44-36-44z" />
          <circle cx="50" cy="44" r="6" fill="#000" />
          <circle cx="78" cy="44" r="6" fill="#000" />
        </svg>
      )

    case 'Git':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#F05032" d="M124 57.6L70.4 4c-3.2-3.2-8.3-3.2-11.5 0L4.8 58.1c-3.2 3.2-3.2 8.3 0 11.5l53.6 53.6c3.2 3.2 8.3 3.2 11.5 0l54.1-54.1c3.2-3.2 3.2-8.3 0-11.5z" />
          <circle cx="85" cy="43" r="10" fill="#FFF" />
          <circle cx="43" cy="85" r="10" fill="#FFF" />
        </svg>
      )

    case 'Pandas':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#150458" />
          <text x="64" y="82" fill="#E70488" fontSize="56" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">pd</text>
        </svg>
      )

    case 'Jupyter':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <path fill="#F37626" d="M64 16a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm0 80a32 32 0 1 1 0-64 32 32 0 0 1 0 64z" />
          <circle cx="64" cy="28" r="8" fill="#505050" />
          <circle cx="64" cy="100" r="8" fill="#505050" />
        </svg>
      )

    case 'MS Office 365':
    case 'Microsoft Office 365':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24">
          <path fill="#F25022" d="M1 1h10v10H1z" />
          <path fill="#7FBA00" d="M13 1h10v10H13z" />
          <path fill="#00A4EF" d="M1 13h10v10H1z" />
          <path fill="#FFB900" d="M13 13h10v10H13z" />
        </svg>
      )

    case 'Excel':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#107C41" />
          <text x="64" y="90" fill="#FFFFFF" fontSize="72" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">X</text>
        </svg>
      )

    case 'Google Sheets':
      return (
        <svg className={sizeClass} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#0F9D58" />
          <rect x="32" y="32" width="64" height="64" fill="#FFFFFF" rx="8" />
          <path fill="#0F9D58" d="M44 44h40v8H44zm0 16h40v8H44zm0 16h40v8H44z" />
        </svg>
      )

    case 'Vercel':
      return (
        <svg className={sizeClass} viewBox="0 0 116 100" fill="currentColor">
          <path d="M57.5 0L115 100H0L57.5 0z" />
        </svg>
      )

    default:
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-[var(--line-strong)] bg-[var(--canvas-alt)] font-mono text-[9px] font-bold text-[var(--ink)]">
          {name.substring(0, 2)}
        </span>
      )
  }
}

export function Skills() {
  return (
    <section id="skills" className="section-spacing relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeader eyebrow="Tech Stack" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skillGroups.map((group, index) => {
            const Icon = GROUP_ICONS[group.icon] ?? Wrench

            return (
              <Reveal key={group.name} delay={Math.min(index, 5) * 40} className="flex h-full">
                <div className="w-full h-full rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-4 sm:p-5 shadow-2xs hover:border-[var(--fab-accent)]/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Category Header */}
                    <div className="mb-3.5 flex items-center gap-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--fab-accent-quiet)] border border-[var(--fab-accent)]/20 text-[var(--fab-accent)] shadow-xs">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
                        {group.name}
                      </h3>
                    </div>

                    {/* Skill Pills - Compact justified alignment */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-between">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="inline-flex grow items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-[var(--line)] bg-[var(--canvas-alt)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fab-accent)]/40 hover:bg-[var(--panel-2)]"
                        >
                          <BrandSkillIcon name={item} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
