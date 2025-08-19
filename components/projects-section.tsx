import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "DeCarb",
      description: "Carbon credit marketplace built on Celo Blockchain with integrated payment solutions.",
      tech: ["Celo Blockchain", "Razorpay", "Web3Auth", "Next.js","Express.js"],
      color: "border-accent",
      glowColor: "shadow-accent/20",
      github: "https://github.com/DeCarb-Marketplace",
    },
    {
      title: "TEDx Saintgits",
      description:
        "Contributed to organizing and executing TEDx Saintgits, handling technical coordination, event workflows, and cross-team collaboration.",
      tech: ["Next.js", "Express.js", "Firebase"],
      color: "border-red-500",
      glowColor: "shadow-red-500/20",
      github: "https://github.com/basilrari/tedxsaintgits", // placeholder link to official page
    },
    {
      title: "EduFinEase",
      description:
        "Comprehensive financial management system with interactive dashboards for educational institutions.",
      tech: ["React.js", "Node.js", "Firebase", "Chart.js"],
      color: "border-secondary",
      glowColor: "shadow-secondary/20",
      github: "https://github.com/EduFinEase",
    },
    
    {
      title: "KDrama Insights Dashboard",
      description: "Advanced analytics dashboard providing insights into Korean drama trends and viewer preferences.",
      tech: ["Python", "IBM Cognos", "Data Analytics", "Visualization"],
      color: "border-chart-4",
      glowColor: "shadow-chart-4/20",
      github: "https://github.com/Gopi-krishnan-77/ibm-cognos",
    },
    {
      title: "AlertEye",
      description:
        "An AI-powered surveillance and alerting system designed for proactive threat detection and real-time notifications.",
      tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
      color: "border-pink-500",
      glowColor: "shadow-pink-500/20",
      github: "https://github.com/Gopi-krishnan-77/Alert-Eye/",
    },
    {
      title: "DeEx3 DAO",
      description:
        "Decentralized research platform enabling collaborative scientific research through blockchain technology.",
      tech: ["Solidity", "React.js", "Web3", "IPFS"],
      color: "border-primary",
      glowColor: "shadow-primary/20",
      
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono neon-glow text-primary">
          PROJECT.ARCHIVE
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`cyber-card ${project.color} hover:${project.glowColor} group`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted/30 border border-muted rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="flex gap-3 pt-4">
                    <Button
                      asChild
                      size="sm"
                      className="cyber-card bg-primary/20 hover:bg-primary/30 border-primary/30"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
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
  )
}
