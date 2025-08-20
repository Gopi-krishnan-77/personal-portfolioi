"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, FileText, Zap, Rocket, Star, Image, X, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { useState, useEffect } from "react"

// Gallery Component
function AchievementGallery({ isOpen, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [scanlinePosition, setScanlinePosition] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const [imageEnlarged, setImageEnlarged] = useState(false)

  useEffect(() => {
    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 2) % 100)
    }, 100)

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 150)
      }
    }, 3000)

    return () => {
      clearInterval(scanlineInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  // Sample achievement images data (you'll replace with your actual images)
  const galleryImages = [
  {
    id: 1,
    title: "UST Sight 2.0 Finalist",
    description: "Proud moment receiving the Finalist Trophy and Certificate after an intense competition at UST Sight 2.0.",
    image: "/ust.jpg", // replace with actual path
    date: "2025",
    category: "Hackathon"
  },
  {
    id: 2,
    title: "Mitsogo Hackathon ",
    description: "Team photo from Mitsogo Hackathon (Hexcode) with all participants after presenting our project.",
    image: "/mit.jpg", 
    date: "2025",
    category: "Hackathon"
  },
  {
    id: 3,
    title: "KCPL Cricket Tournament",
    description: "Exciting match moment from KCPL cricket tournament with our team and the opposition.",
    image: "/kcpl1.jpg",
    date: "2024",
    category: "Sports"
  },
  {
    id: 4,
    title: "ETHIndia 2023 ",
    description: "Photo taken after demoing our blockchain project at ETHIndia 2023, India's biggest Ethereum hackathon.",
    image: "/eth.jpg",
    date: "2023",
    category: "Ethereum"
  },
  {
    id: 5,
    title: "Intel Unnati Hackathon",
    description: "Group photo with teammates during Intel Unnati hackathon after showcasing our innovative solution.",
    image: "/intel.jpg",
    date: "2023",
    category: "Hackathon"
  },
  {
    id: 6,
    title: "Graduation Ceremony",
    description: "Memorable moment captured during my graduation ceremony with batchmates and faculty.",
    image: "/grad.jpeg",
    date: "2025",
    category: "Academic"
  },
  {
    id: 7,
    title: "Special Recognition Award",
    description: "Special Recognition Award from my department for outstanding contributions and academic excellence.",
    image: "/splrec.jpg",
    date: "2025",
    category: "Award"
  },
  {
    id: 8,
    title: "SPL – Runner-up",
    description: "Thrilling finale moment from Saintgits Premier League (SPL) where our team secured the runner-up position.",
    image: "/spl.jpg",
    date: "2025",
    category: "Sports"
  }
]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleImageClick = () => {
    setImageEnlarged(true)
  }

  const handleEnlargedClose = () => {
    setImageEnlarged(false)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
        {/* Cyberpunk Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Animated Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `linear-gradient(180deg, transparent ${scanlinePosition}%, rgba(0, 255, 255, 0.1) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
          }}
        />

        <div className="relative max-w-6xl w-full max-h-[90vh] bg-black/80 border border-cyan-500/30 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative border-b border-cyan-500/30 p-4">
            <div className="flex items-center justify-between">
              <h2 className={`text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 ${glitchActive ? 'animate-pulse' : ''}`}>
                {'>> GALLERY.ACCESS <<'}
              </h2>
              {glitchActive && (
                <h2 className="absolute left-4 text-xl sm:text-2xl font-bold font-mono text-red-500 opacity-70 transform translate-x-1">
                  {'>> G4LL3RY.4CC3SS <<'}
                </h2>
              )}
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Gallery Content */}
          <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              {/* Image Display */}
              <div className="relative">
                <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden border border-cyan-500/20 cursor-pointer group" onClick={handleImageClick}>
                  <img
                    src={galleryImages[currentImage].image}
                    alt={galleryImages[currentImage].title}
                    className="w-full h-full object-contain bg-black transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Image Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <div className="text-cyan-400 text-sm font-mono mb-1">
                      [{galleryImages[currentImage].category}] - {galleryImages[currentImage].date}
                    </div>
                  </div>
                  {/* Click to enlarge hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-black/70 px-4 py-2 rounded-lg border border-cyan-500/50">
                      <span className="text-cyan-400 font-mono text-sm">Click to enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-cyan-500/20 text-cyan-400 rounded-full transition-all duration-200 border border-cyan-500/30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-cyan-500/20 text-cyan-400 rounded-full transition-all duration-200 border border-cyan-500/30"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono border border-cyan-500/30">
                  {currentImage + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Image Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono mb-3">
                    {galleryImages[currentImage].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {galleryImages[currentImage].description}
                  </p>
                </div>

                {/* Thumbnail Grid */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-400 font-mono">Navigation</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {galleryImages.map((img, index) => (
                      <button
                        key={img.id}
                        onClick={() => setCurrentImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          currentImage === index 
                            ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
                            : 'border-gray-600 hover:border-purple-400'
                        }`}
                      >
                        <img
                          src={img.image}
                          alt={img.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        {currentImage === index && (
                          <div className="absolute inset-0 bg-cyan-400/20" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {imageEnlarged && (
        <div className="fixed inset-0 z-60 bg-black/98 backdrop-blur-md flex items-center justify-center p-4">
          {/* Enhanced Cyberpunk Grid Background for enlarged view */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Enhanced Scanlines for enlarged view */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `linear-gradient(180deg, transparent ${scanlinePosition}%, rgba(0, 255, 255, 0.2) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
            }}
          />

          {/* Close button for enlarged view */}
          <button
            onClick={handleEnlargedClose}
            className="absolute top-4 right-4 z-70 p-3 bg-black/80 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full transition-all duration-200 border border-red-500/30"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation for enlarged view */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-70 p-3 bg-black/80 hover:bg-cyan-500/20 text-cyan-400 rounded-full transition-all duration-200 border border-cyan-500/30"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-70 p-3 bg-black/80 hover:bg-cyan-500/20 text-cyan-400 rounded-full transition-all duration-200 border border-cyan-500/30"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Enlarged Image */}
          <div className="relative max-w-[95vw] max-h-[95vh] flex flex-col items-center">
            <img
              src={galleryImages[currentImage].image}
              alt={galleryImages[currentImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))' }}
            />
            
            {/* Image Info for enlarged view */}
            <div className="mt-4 text-center max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono mb-2">
                {galleryImages[currentImage].title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-2">
                {galleryImages[currentImage].description}
              </p>
              <div className="text-purple-400 font-mono text-sm">
                [{galleryImages[currentImage].category}] - {galleryImages[currentImage].date} | {currentImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>

          {/* Glitch effect overlay for enlarged view */}
          {glitchActive && (
            <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />
          )}
        </div>
      )}
    </>
  )
}

// Updated Achievements Section with Gallery Button
export function AchievementsSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [scanlinePosition, setScanlinePosition] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)

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
    <>
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

        <section id="achievements" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-muted/20 relative">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Glitch Title */}
            <div className="relative mb-6 xs:mb-8 sm:mb-12 md:mb-16">
              <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${glitchActive ? 'animate-pulse' : ''}`}>
                {'>> ACHIEVEMENT.UNLOCK <<'}
              </h2>
              {glitchActive && (
                <h2 className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono text-red-500 opacity-70 transform translate-x-1 translate-y-1">
                  {'>> 4CH13V3M3NT.UNL0CK <<'}
                </h2>
              )}
            </div>

            {/* Gallery Access Button */}
            <div className="flex justify-center mb-6 xs:mb-8 sm:mb-12">
              <button
                onClick={() => setGalleryOpen(true)}
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <span className="font-mono text-cyan-400 group-hover:text-purple-400 font-semibold transition-colors duration-300">
                    VIEW.GALLERY()
                  </span>
                  <Image className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 xs:gap-4">
                      <div
                        className={`p-2 xs:p-3 rounded-lg bg-muted/30 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <achievement.icon className="w-5 xs:w-6 h-5 xs:h-6" />
                      </div>
                      <div className="flex-1 space-y-1 xs:space-y-2">
                        <h3 className="text-sm xs:text-base sm:text-lg font-bold text-foreground font-mono break-words">{achievement.title}</h3>
                        <p className={`text-xs xs:text-sm font-semibold ${achievement.color}`}>{achievement.subtitle}</p>
                        <p className="text-muted-foreground text-xs xs:text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Modal */}
      <AchievementGallery 
        isOpen={galleryOpen} 
        onClose={() => setGalleryOpen(false)} 
      />
    </>
  )
}

export default AchievementsSection