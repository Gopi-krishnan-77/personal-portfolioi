"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Download } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const resumeUrl = "/resume/GopikrishnanB_Resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "GopikrishnanB_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 lg:px-12">
      {/* Neon Particles + Lines Background */}
      <div className="cyberpunk-bg"></div>

      {/* Foreground Content */}
      <div className="text-center max-w-6xl mx-auto relative z-10 w-full py-12 sm:py-16 lg:py-20">
        
        {/* Name and Title Section */}
        <div className="mb-12 sm:mb-16 lg:mb-15">
          <h1 className="cyberpunk-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 sm:mb-10 lg:mb-12">
            GOPIKRISHNAN B
          </h1>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <p className="glitch-effect text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-secondary">
              Full-Stack Developer
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-accent">
              Blockchain Enthusiast
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Problem Solver
            </p>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="mb-12 sm:mb-16 lg:mb-15">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl font-semibold border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200 bg-transparent max-w-xs"
            >
              View My Work
            </Button>

            <Button
              onClick={downloadResume}
              variant="outline"
              className="w-full sm:w-auto cyber-card px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl font-semibold border-accent text-accent hover:bg-accent/10 hover:scale-105 transition-all duration-200 max-w-xs"
            >
              <Download className="w-6 h-6 sm:w-7 sm:h-7 mr-3" />
              Resume
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="w-full sm:w-auto cyber-card px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl font-semibold border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all duration-200 max-w-xs"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {["React", "Next.js", "TypeScript"].map((tech) => (
              <div
                key={tech}
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-muted/30 border border-muted rounded-full text-base sm:text-lg lg:text-xl text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200 backdrop-blur-sm"
              >
                {tech}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {["Node.js", "Blockchain", "Web3"].map((tech) => (
              <div
                key={tech}
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-muted/30 border border-muted rounded-full text-base sm:text-lg lg:text-xl text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200 backdrop-blur-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-accent opacity-70 hover:opacity-100 transition-opacity" />
      </div>
    </section>
  )
}

export default HeroSection