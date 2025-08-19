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

  const softSkills = ["Problem-solving", "Time Management", "Critical Thinking", "Adaptability", "Leadership", "Teamwork"]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono neon-glow text-primary">
          SKILL_MATRIX
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="cyber-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6 font-mono">TECHNICAL.STACK</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-accent mb-6 font-mono">SOFT.PROTOCOLS</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="holographic-border p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                  >
                    <span className="font-semibold">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-bold text-secondary font-mono">ADDITIONAL.TECH</h4>
                <div className="flex flex-wrap gap-2">
                  {["C", "HTML", "CSS", "Tailwind CSS", "MySQL"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm hover:bg-primary/30 transition-colors duration-300"
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
