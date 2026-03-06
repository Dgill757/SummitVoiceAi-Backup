'use client'

import { Bot, CalendarClock, PhoneCall } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[520px] w-full overflow-hidden border-cyan-500/30 bg-black/[0.96] shadow-[0_0_60px_rgba(34,211,238,0.15)]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 flex h-full flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-center p-8">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
            <Bot className="h-3.5 w-3.5" />
            LIVE VOICE AI
          </div>
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Your 24/7 Receptionist
          </h1>
          <p className="mt-4 max-w-lg text-neutral-300">
            Meet the next generation voice agent for service businesses. Summit Voice AI
            answers instantly, qualifies leads, and books appointments while your team stays
            focused on closing work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <PhoneCall className="h-3.5 w-3.5 text-cyan-300" />
              Never Miss Calls
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <CalendarClock className="h-3.5 w-3.5 text-cyan-300" />
              Auto Booking
            </span>
          </div>
        </div>

        <div className="relative flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}
