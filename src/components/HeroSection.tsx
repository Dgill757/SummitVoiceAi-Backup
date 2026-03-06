import React from 'react'
import { Play, Sparkles } from 'lucide-react'

import CalendarDialog from './CalendarDialog'
import { SplineSceneBasic } from '@/components/ui/demo'

interface HeroSectionProps {
  calendarOpen: boolean
  setCalendarOpen: (open: boolean) => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ calendarOpen, setCalendarOpen }) => {
  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('experience-ava')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.16),transparent_45%)]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center opacity-[0.08]" />

      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-24">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              FUTURISTIC VOICE AI EXPERIENCE
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight text-white md:text-6xl">
              Your 24/7 Receptionist That Sounds Human and Never Misses Revenue
            </h1>
            <p className="max-w-2xl text-base text-white/75 md:text-lg">
              Summit Voice AI handles every inbound call, qualifies leads in real-time,
              and books appointments while your team focuses on jobs that close.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setCalendarOpen(true)}
                className="btn-primary"
                style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
              >
                <span>Book a Free Demo</span>
              </button>
              <button
                onClick={scrollToDemo}
                className="btn-outline"
                style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
              >
                <span className="inline-flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Hear Ava
                </span>
              </button>
            </div>
          </div>

          <SplineSceneBasic />
        </div>
      </div>

      <CalendarDialog open={calendarOpen} setOpen={setCalendarOpen} />
    </section>
  )
}

export default HeroSection
