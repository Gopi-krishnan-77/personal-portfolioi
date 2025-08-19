import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono neon-glow text-primary">ABOUT ME</h2>

        <Card className="cyber-card">
  <CardContent className="p-8 md:p-12">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side – About */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-secondary font-mono">SYSTEM.PROFILE</h3>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I am <span className="text-accent">Gopikrishnan B</span>, a builder of systems at the edge of{" "}
            <span className="text-secondary">code, automation, and decentralized futures</span>.
          </p>
          <p>
            Graduated in <span className="text-accent">Computer Science & Engineering</span> with a minor in{" "}
            <span className="text-accent">Robotics & Automation</span> from Saintgits College of Engineering,
            carrying a CGPA of <span className="text-secondary">8.42</span> through the grid.
          </p>
          <p>
            My mission: engineer solutions that merge <span className="text-accent">innovation</span> with{" "}
            <span className="text-accent">real-world impact</span> — from decentralized platforms to AI-powered
            dashboards.
          </p>
          
        </div>
      </div>

      {/* Right Side – Skills */}
      <div className="holographic-border p-6 rounded-lg">
        <h4 className="text-xl font-bold text-accent mb-4 font-mono">CORE_INTERESTS.exe</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Full-Stack Development
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            Blockchain Engineering
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Artificial Intelligence Systems
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-chart-4 rounded-full"></span>
            Cricket
          </li>
        </ul>
      </div>
    </div>
  </CardContent>
</Card>

      </div>
    </section>
  )
}
