"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function ExperienceSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [scanlinePosition, setScanlinePosition] = useState(0)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.8) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      }
    }, 2000)

    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100)
    }, 50)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(scanlineInterval)
    }
  }, [])

  const experiences = [
    {
      title: "Intern",
      company: "Benfi Consultants Pte Ltd",
      period: "Previous",
      description: "Developed Business Intelligence tools and AI-powered home assistant systems.",
      color: "border-l-secondary",
    },
    {
      title: "Treasurer",
      company: "EXCEL Saintgits",
      period: "College",
      description: "Managed financial operations and coordinated technical events for the college community.",
      color: "border-l-accent",
    },
    {
      title: "Captian - Fast Bowler",
      company: "College Cricket Team",
      period: "Sports",
      description: "Represented college in inter-collegiate cricket tournaments as the captian and fast bowler.",
      color: "border-l-chart-4",
    },
    {
      title: "Industrial Trainee",
      company: "Intel Unnati",
      period: "College",
      description: "Managed financial operations and coordinated technical events for the college community.",
      color: "border-l-primary",
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Animated Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `linear-gradient(180deg, transparent ${scanlinePosition}%, rgba(0, 255, 255, 0.1) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
        }}
      />

      <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Glitch Title */}
          <div className="relative mb-6 xs:mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${glitchActive ? 'animate-pulse' : ''}`}>
              {'>> EXPERIENCE.LOG <<'}
            </h2>
            {glitchActive && (
              <h2 className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-red-500 opacity-70 transform translate-x-1 translate-y-1">
                {'>> 3XP3R13NC3.L0G <<'}
              </h2>
            )}
          </div>

          <div className="space-y-4 xs:space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="cyber-card">
                <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
                  <div className={`border-l-4 ${exp.color} pl-3 xs:pl-4 sm:pl-6`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 xs:mb-3 sm:mb-4">
                      <h3 className="text-base xs:text-lg sm:text-xl font-bold text-foreground font-mono break-words mb-1 md:mb-0">{exp.title}</h3>
                      <div className="flex flex-col md:items-end">
                        <span className="text-secondary font-semibold text-sm xs:text-base break-words">{exp.company}</span>
                        <span className="text-xs xs:text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-xs xs:text-sm sm:text-base">{exp.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}