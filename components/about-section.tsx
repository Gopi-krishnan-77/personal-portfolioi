"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function AboutSection() {
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

      <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Glitch Title */}
          <div className="relative mb-6 xs:mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${glitchActive ? 'animate-pulse' : ''}`}>
              {'>> IDENTITY.PROTOCOL <<'}
            </h2>
            {glitchActive && (
              <h2 className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-red-500 opacity-70 transform translate-x-1 translate-y-1">
                {'>> 1D3NT1TY.PR0T0C0L <<'}
              </h2>
            )}
          </div>

          <Card className="cyber-card">
            <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-start md:items-center">
                {/* Left Side – About */}
                <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-secondary font-mono break-words">SYSTEM.PROFILE</h3>
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4 text-sm xs:text-base sm:text-lg leading-relaxed">
                    <p>
                      I am <span className="text-accent">Gopikrishnan B</span>, a builder of systems at the edge of{" "}
                      <span className="text-secondary">code, automation, and decentralized futures</span>.
                    </p>
                    <p>
                      Graduated in <span className="text-accent">Computer Science & Engineering</span> with a minor in{" "}
                      <span className="text-accent">Robotics & Automation</span> from Saintgits College of Engineering.
                    </p>
                    <p>
                      My mission: engineer solutions that merge <span className="text-accent">innovation</span> with{" "}
                      <span className="text-accent">real-world impact</span> — from decentralized platforms to AI-powered
                      dashboards.
                    </p>
                  </div>
                </div>

                {/* Right Side – Skills */}
                <div className="holographic-border p-3 xs:p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-accent mb-2 xs:mb-3 sm:mb-4 font-mono break-words">CORE_INTERESTS.exe</h4>
                  <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      Full-Stack Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                      Blockchain Engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                      Artificial Intelligence Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-chart-4 rounded-full flex-shrink-0"></span>
                      Cricket
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  )
}
