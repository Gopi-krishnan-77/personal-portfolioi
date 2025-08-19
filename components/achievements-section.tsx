"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, FileText, Zap, Rocket, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function AchievementsSection() {
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

  const achievements = [
    {
      icon: Trophy,
      title: "BlockHash LIVE 2023 – Ideathon",
      subtitle: "Runner-up",
      description:
        "Recognized for two innovative blockchain solutions: a decentralized research collaboration platform and a sustainable carbon credit marketplace.",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Finalist – SIGHT 2.0",
      subtitle: "UST Global Hackathon",
      description: "Achieved finalist position by developing impactful solutions for real-world challenges.",
      color: "text-secondary",
    },
    {
      icon: Rocket,
      title: "ETHIndia 2023",
      subtitle: "Project Showcase",
      description: "Presented blockchain-based project at India's biggest Ethereum hackathon, ETHIndia 2023.",
      color: "text-pink-500",
    },
    {
      icon: FileText,
      title: "Research Publication",
      subtitle: "Springer CCIS, ICAISM 2025",
      description:
        'Submitted research paper on "Security in Metaverse" addressing critical security challenges.',
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Hackathon Participation",
      subtitle: "Multiple Events",
      description: "Active participant in Mitsogo Hackathon and various national-level tech expos.",
      color: "text-chart-4",
    },
    {
      icon: Star,
      title: "Special Recognition Award",
      subtitle: "Department Achievement",
      description:
        "Honored by my department with the Special Recognition Award for outstanding contributions and academic excellence.",
      color: "text-yellow-500",
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

      <section id="achievements" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Glitch Title */}
          <div className="relative mb-6 xs:mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${glitchActive ? 'animate-pulse' : ''}`}>
              {'>> ACHIEVEMENT.UNLOCK <<'}
            </h2>
            {glitchActive && (
              <h2 className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-red-500 opacity-70 transform translate-x-1 translate-y-1">
                {'>> 4CH13V3M3NT.UNL0CK <<'}
              </h2>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
                  <div className="flex items-start gap-3 xs:gap-4">
                    <div
                      className={`p-2 xs:p-3 rounded-lg bg-muted/30 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="w-5 xs:w-6 h-5 xs:h-6" />
                    </div>
                    <div className="flex-1 space-y-1 xs:space-y-2">
                      <h3 className="text-sm xs:text-base sm:text-lg font-bold text-foreground font-mono break-words">{achievement.title}</h3>
                      <p className={`text-xs xs:text-sm font-semibold ${achievement.color}`}>{achievement.subtitle}</p>
                      <p className="text-muted-foreground text-xs xs:text-sm leading-relaxed">{achievement.description}</p>
                    </div>
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