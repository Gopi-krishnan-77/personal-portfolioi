import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, FileText, Zap, Rocket, Star } from "lucide-react"

export function AchievementsSection() {
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
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-mono neon-glow text-primary">
  ACHIEVEMENT.UNLOCK
</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg bg-muted/30 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-foreground font-mono">{achievement.title}</h3>
                    <p className={`text-sm font-semibold ${achievement.color}`}>{achievement.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
