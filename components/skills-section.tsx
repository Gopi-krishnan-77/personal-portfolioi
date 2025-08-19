"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function SkillsSection() {
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

  const technicalSkills = [
    { name: "Python", color: "from-green-400 to-emerald-600", accent: "border-green-400/50 shadow-green-400/20" },
    { name: "React.js", color: "from-cyan-400 to-blue-600", accent: "border-cyan-400/50 shadow-cyan-400/20" },
    { name: "Next.js", color: "from-purple-400 to-pink-600", accent: "border-purple-400/50 shadow-purple-400/20" },
    { name: "Solidity", color: "from-yellow-400 to-orange-600", accent: "border-yellow-400/50 shadow-yellow-400/20" },
    { name: "Django", color: "from-red-400 to-rose-600", accent: "border-red-400/50 shadow-red-400/20" },
    { name: "Express.js", color: "from-indigo-400 to-purple-600", accent: "border-indigo-400/50 shadow-indigo-400/20" },
    { name: "DevOps", color: "from-teal-400 to-cyan-600", accent: "border-teal-400/50 shadow-teal-400/20" },
  ]

  const softSkills = [
    { name: "Problem-solving", icon: "⚡", status: "OPTIMAL" },
    { name: "Critical Thinking", icon: "🧠", status: "ACTIVE" },
    { name: "Leadership", icon: "👑", status: "ENHANCED" },
    { name: "Teamwork", icon: "🤝", status: "SYNCED" }
  ]

  const additionalTech = ["C", "HTML", "CSS", "Tailwind CSS", "MySQL"]

  return (
    <div className="relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
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
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `linear-gradient(180deg, transparent ${scanlinePosition}%, rgba(0, 255, 255, 0.1) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
        }}
      />

      <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-black/90 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Glitch Title */}
          <div className="relative mb-6 xs:mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${glitchActive ? 'animate-pulse' : ''}`}>
              {'>> NEURAL_INTERFACE.EXE <<'}
            </h2>
            {glitchActive && (
              <h2 className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-red-500 opacity-70 transform translate-x-1 translate-y-1">
                {'>> N3UR4L_1NT3RF4C3.3X3 <<'}
              </h2>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {/* Technical Skills - Left Panel */}
            <Card className="bg-black/70 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
              <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8 relative z-10">
                <div className="flex items-center justify-between mb-4 xs:mb-5 sm:mb-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-cyan-400 font-mono">
                    [TECHNICAL.MODULES]
                  </h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                </div>
                
                <div className="space-y-3 xs:space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className={`group relative p-3 xs:p-4 border ${skill.accent} bg-black/50 backdrop-blur-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02]`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm xs:text-base font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded">
                          ACTIVE
                        </span>
                      </div>
                      
                      {/* Animated Status Bar */}
                      <div className="w-full bg-gray-800 h-2 mt-3 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${skill.color} relative`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills - Right Panel */}
            <Card className="bg-black/70 border border-purple-500/30 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8 relative z-10">
                <div className="flex items-center justify-between mb-4 xs:mb-5 sm:mb-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-purple-400 font-mono">
                    [COGNITIVE.PROTOCOLS]
                  </h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" />
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-150 shadow-lg shadow-pink-400/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mb-6">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group relative p-3 xs:p-4 bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.05] hover:shadow-lg hover:shadow-purple-400/20"
                    >
                      <div className="text-center relative z-10">
                        <div className="text-lg mb-1 filter drop-shadow-lg">{skill.icon}</div>
                        <div className="font-mono text-xs xs:text-sm font-semibold text-white mb-1">
                          {skill.name}
                        </div>
                        <div className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded-full inline-block">
                          {skill.status}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  ))}
                </div>

                {/* Additional Tech Stack */}
                <div className="space-y-3 xs:space-y-4">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm xs:text-base font-bold text-pink-400 font-mono">
                      [LEGACY.SYSTEMS]
                    </h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-pink-400/50 to-transparent" />
                  </div>
                  
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2">
                    {additionalTech.map((tech, index) => (
                      <div
                        key={index}
                        className="group relative bg-black/60 border border-gray-700/50 hover:border-cyan-400/50 p-2 text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
                      >
                        <span className="text-xs xs:text-sm font-mono text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                          {tech}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-6 xs:mt-8 flex justify-center">
            <div className="bg-black/70 border border-green-400/30 px-4 py-2 font-mono text-sm text-green-400 backdrop-blur-sm">
              <span className="animate-pulse">●</span> SYSTEM.STATUS: OPERATIONAL | 
              <span className="text-cyan-400 ml-2">UPTIME: 99.9%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}