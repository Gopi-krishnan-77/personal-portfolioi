import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Python", level: 90, color: "bg-primary" },
    { name: "React.js", level: 85, color: "bg-secondary" },
    { name: "Next.js", level: 80, color: "bg-accent" },
    { name: "Solidity", level: 50, color: "bg-chart-4" },
    { name: "Django", level: 80, color: "bg-secondary" },
    { name: "Express.js", level: 75, color: "bg-accent" },
    { name: "DevOps", level: 70, color: "bg-chart-4" },
  ]

  const softSkills = ["Problem-solving", "Critical Thinking",  "Leadership", "Teamwork"]

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 font-mono neon-glow text-primary break-words">
          SKILL_MATRIX
        </h2>

        <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          <Card className="cyber-card">
            <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-secondary mb-4 xs:mb-5 sm:mb-6 font-mono break-words">TECHNICAL.STACK</h3>
              <div className="space-y-3 xs:space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-1 xs:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm xs:text-base break-words">{skill.name}</span>
                      <span className="text-xs xs:text-sm text-muted-foreground flex-shrink-0 ml-2">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5 xs:h-2">
                      <div
                        className={`h-1.5 xs:h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-accent mb-4 xs:mb-5 sm:mb-6 font-mono break-words">SOFT.PROTOCOLS</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="holographic-border p-2 xs:p-3 sm:p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                  >
                    <span className="font-semibold text-xs xs:text-sm sm:text-base break-words">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 xs:mt-6 sm:mt-8 space-y-2 xs:space-y-3 sm:space-y-4">
                <h4 className="text-base xs:text-lg font-bold text-secondary font-mono break-words">ADDITIONAL.TECH</h4>
                <div className="flex flex-wrap gap-1 xs:gap-2">
                  {["C", "HTML", "CSS", "Tailwind CSS", "MySQL"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 xs:px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs xs:text-sm hover:bg-primary/30 transition-colors duration-300 break-words"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}