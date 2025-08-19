"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useState, useEffect } from "react"

export function ProjectsSection() {
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

  const projects = [
  {
    title: "DeCarb",
    description:
      "Carbon credit marketplace built on the Celo Blockchain, enabling transparent trading of carbon offsets. Integrated Razorpay for seamless payments and Web3Auth for secure wallet authentication. The platform promotes sustainability by bridging blockchain technology with real-world climate action.",
    tech: ["Celo Blockchain", "Razorpay", "Web3Auth", "Next.js", "Express.js"],
    color: "border-accent",
    glowColor: "shadow-accent/20",
    github: "https://github.com/DeCarb-Marketplace",
  },
  {
    title: "TEDx Saintgits",
    description:
      "Developed of the official TEDx Saintgits website and managed the entire technical ecosystem. Contributed to event workflows, ticketing, and live updates, while collaborating closely with multiple teams to ensure a smooth event execution. The website served as the central hub for registrations, speaker details, and updates.",
    tech: ["Next.js", "Express.js", "Firebase"],
    color: "border-red-500",
    glowColor: "shadow-red-500/20",
    github: "https://github.com/basilrari/tedxsaintgits",
  },
  {
    title: "EduFinEase",
    description:
      "A financial management system designed for educational institutions, featuring interactive dashboards, automated fee tracking, and analytics-driven insights. Simplified financial operations while empowering administrators with clear visualizations and reporting tools.",
    tech: ["React.js", "Node.js", "Firebase", "Chart.js"],
    color: "border-secondary",
    glowColor: "shadow-secondary/20",
    github: "https://github.com/EduFinEase",
  },
  {
    title: "KDrama Insights Dashboard",
    description:
      "An advanced analytics dashboard offering data-driven insights into Korean drama trends and viewer preferences. Utilized IBM Cognos for visualization and Python-based preprocessing to analyze datasets, helping identify popularity patterns and audience demographics.",
    tech: ["Python", "IBM Cognos", "Data Analytics", "Visualization"],
    color: "border-chart-4",
    glowColor: "shadow-chart-4/20",
    github: "https://github.com/Gopi-krishnan-77/ibm-cognos",
  },
  {
    title: "AlertEye",
    description:
      "An AI-powered surveillance system for proactive threat detection. Built with OpenCV and TensorFlow to detect suspicious activities in real-time, coupled with Flask-based APIs for seamless alerting. Designed to enhance security by sending instant notifications during potential breaches.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
    color: "border-pink-500",
    glowColor: "shadow-pink-500/20",
    github: "https://github.com/Gopi-krishnan-77/Alert-Eye/",
  },
  {
    title: "DeEx3 DAO",
    description:
      "A decentralized research collaboration platform where scientists and researchers can publish, review, and collaborate on projects securely. Utilizes Solidity smart contracts, IPFS for decentralized storage, and Web3 integration to enable transparent, community-driven scientific innovation.",
    tech: ["Solidity", "React.js", "Web3", "IPFS"],
    color: "border-primary",
    glowColor: "shadow-primary/20",
  },
];

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

      <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Glitch Title */}
          <div className="relative mb-6 xs:mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${glitchActive ? 'animate-pulse' : ''}`}>
              {'>> PROJECT.ARCHIVE <<'}
            </h2>
            {glitchActive && (
              <h2 className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-red-500 opacity-70 transform translate-x-1 translate-y-1">
                {'>> PR0J3CT.4RCH1V3 <<'}
              </h2>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`cyber-card ${project.color} hover:${project.glowColor} group`}>
                <CardHeader className="p-3 xs:p-4 sm:p-6">
                  <CardTitle className="text-base xs:text-lg sm:text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors duration-300 break-words">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 xs:p-4 sm:p-6 pt-0 space-y-3 xs:space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-xs xs:text-sm sm:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-1 xs:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-muted/30 border border-muted rounded text-xs font-mono break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <div className="flex gap-2 xs:gap-3 pt-2 xs:pt-3 sm:pt-4">
                      <Button
                        asChild
                        size="sm"
                        className="cyber-card bg-primary/20 hover:bg-primary/30 border-primary/30 text-xs xs:text-sm px-2 xs:px-3 py-1 xs:py-2 h-auto"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 xs:w-4 h-3 xs:h-4 mr-1 xs:mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}