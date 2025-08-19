"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MessageCircle, CheckCircle } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, success

  // Your WhatsApp number (replace with your actual number)
  const whatsappNumber = "+918547015241" // Format: +[country code][number]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleWhatsAppSend = () => {
    // Validate required fields
    if (!formData.name || !formData.message) {
      alert('Please fill in your name and message')
      return
    }

    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}.\n\n${formData.message}\n\n${formData.email ? `You can reach me back at: ${formData.email}` : ''}`
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Show success status
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 font-mono neon-glow text-primary glitch-effect break-words">
          LET'S CONNECT
        </h2>

        <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          {/* SEND.MESSAGE via WhatsApp */}
          <Card className="cyber-card h-full">
            <CardHeader className="p-3 xs:p-4 sm:p-6">
              <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-secondary font-mono flex items-center gap-2 break-words">
                <MessageCircle className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-green-500 flex-shrink-0" />
                SEND.MESSAGE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 xs:p-4 sm:p-6 pt-0 space-y-3 xs:space-y-4 sm:space-y-6">
              <div className="space-y-3 xs:space-y-4">
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *" 
                  className="cyber-card bg-input border-border focus:border-primary text-sm xs:text-base" 
                  required
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email (Optional)"
                  className="cyber-card bg-input border-border focus:border-primary text-sm xs:text-base"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  rows={4}
                  className="cyber-card bg-input border-border focus:border-primary resize-none text-sm xs:text-base"
                  required
                />

                <Button 
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full cyber-card bg-green-600 hover:bg-green-700 border-green-600 text-white text-sm xs:text-base py-2 xs:py-3"
                >
                  {status === 'success' ? (
                    <>
                      <CheckCircle className="w-3 xs:w-4 h-3 xs:h-4 mr-2" />
                      Opening WhatsApp!
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-3 xs:w-4 h-3 xs:h-4 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>

                {status === 'success' && (
                  <div className="text-center text-green-400 text-xs xs:text-sm font-mono">
                    WHATSAPP.OPENED.SUCCESSFULLY
                  </div>
                )}

                <div className="text-xs text-muted-foreground text-center">
                  Click to open WhatsApp with your pre-filled message
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CONNECT.PROTOCOLS */}
          <Card className="cyber-card h-full">
            <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-accent mb-4 xs:mb-5 sm:mb-6 font-mono break-words">CONNECT.PROTOCOLS</h3>
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <a
                  href="https://github.com/Gopi-krishnan-77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 holographic-border rounded-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Github className="w-5 xs:w-6 h-5 xs:h-6 text-primary group-hover:text-secondary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm xs:text-base break-words">GitHub</p>
                    <p className="text-xs xs:text-sm text-muted-foreground break-all">@Gopi-krishnan-77</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/gopikrishnanbalagopal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 holographic-border rounded-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 xs:w-6 h-5 xs:h-6 text-secondary group-hover:text-accent flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm xs:text-base break-words">LinkedIn</p>
                    <p className="text-xs xs:text-sm text-muted-foreground break-all">gopikrishnanbalagopal</p>
                  </div>
                </a>

                <a
                  className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 holographic-border rounded-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Mail className="w-5 xs:w-6 h-5 xs:h-6 text-accent group-hover:text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm xs:text-base break-words">Email</p>
                    <p className="text-xs xs:text-sm text-muted-foreground break-all">gopikrishnanb2003@gmail.com</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* STATUS card spanning full width */}
          <Card className="cyber-card md:col-span-2">
            <CardContent className="p-4 xs:p-6 sm:p-8 text-center">
              <h3 className="text-base xs:text-lg font-bold text-primary mb-2 xs:mb-3 sm:mb-4 font-mono break-words">STATUS: AVAILABLE</h3>
              <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">
                Ready for new opportunities and collaborations in full-stack development, blockchain technology, and
                DevOps engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}