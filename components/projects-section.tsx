import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
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
    github: "https://github.com/basilrari/tedxsaintgits", // placeholder link to official page
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
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 font-mono neon-glow text-primary break-words">
          PROJECT.ARCHIVE
        </h2>

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
  )
}