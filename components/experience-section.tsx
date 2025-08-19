import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    
    {
      title: "Intern",
      company: "Benfi Consultants Pte Ltd",
      period: "Previous",
      description: "Developed Business Intelligence tools and AI-powered home assistant systems.",
      color: "border-l-secondary",
    },
    {
      title: "Treasurer",
      company: "EXCEL Saintgits",
      period: "College",
      description: "Managed financial operations and coordinated technical events for the college community.",
      color: "border-l-accent",
    },
    {
      title: "Captian - Fast Bowler",
      company: "College Cricket Team",
      period: "Sports",
      description: "Represented college in inter-collegiate cricket tournaments as the captian and fast bowler.",
      color: "border-l-chart-4",
    },
        {
      title: "Industrial Trainee",
      company: "Intel Unnati",
      period: "College",
      description: "Managed financial operations and coordinated technical events for the college community.",
      color: "border-l-primary",
    },
  ]

  return (
    <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 font-mono neon-glow text-primary break-words">
          EXPERIENCE.LOG
        </h2>

        <div className="space-y-4 xs:space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="cyber-card">
              <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
                <div className={`border-l-4 ${exp.color} pl-3 xs:pl-4 sm:pl-6`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 xs:mb-3 sm:mb-4">
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-foreground font-mono break-words mb-1 md:mb-0">{exp.title}</h3>
                    <div className="flex flex-col md:items-end">
                      <span className="text-secondary font-semibold text-sm xs:text-base break-words">{exp.company}</span>
                      <span className="text-xs xs:text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-xs xs:text-sm sm:text-base">{exp.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}