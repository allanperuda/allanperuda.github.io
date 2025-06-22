"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
  ExternalLink,
  Code,
  X,
  Award,
  Smartphone,
  MapPin,
  ChevronRight,
  Eye,
  Building,
  GraduationCap,
  Star,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Send,
  User,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"

// LinkedIn Profile Data
const linkedInProfile = {
  fullName: "Allan Billy Peruda",
  headline: "Technical Support Engineer | RFID & Networking Specialist",
  about:
    "Experienced Technical Support Engineer with expertise in RFID technologies, networking infrastructure, and barcode systems. Passionate about bridging hardware and software solutions to optimize business operations.",
  currentRole: {
    title: "Senior Technical Support Engineer",
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "2024 - Present",
    bullets: [
      "Leading RFID implementation projects for enterprise clients, reducing inventory discrepancies by 95%",
      "Managing network infrastructure upgrades and troubleshooting for 500+ endpoints",
      "Developing custom integration solutions using JavaScript and REST APIs",
    ],
  },
  pastRoles: [
    {
      title: "Technical Support Engineer",
      company: "NetworkPro Inc.",
      location: "San Francisco, CA",
      duration: "2022 - 2024",
      bullets: [
        "Specialized in network troubleshooting and barcode system integration",
        "Reduced average ticket resolution time by 40% through process optimization",
        "Trained junior technicians on RFID reader configuration and deployment",
      ],
    },
    {
      title: "IT Support Specialist",
      company: "DataFlow Systems",
      location: "Oakland, CA",
      duration: "2020 - 2022",
      bullets: [
        "Provided technical support for 200+ users across multiple departments",
        "Developed internal tools using HTML, CSS, and JavaScript",
        "Maintained 99.5% system uptime through proactive monitoring",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "California State University",
    year: "2019",
    details: "Focus on Networking and Database Systems",
  },
  skills: [
    "RFID Technology",
    "Network Administration",
    "JavaScript Development",
    "System Integration",
    "Technical Support",
    "Database Management",
  ],
  email: "allan.peruda@email.com",
  linkedinUrl: "https://www.linkedin.com/in/allan-billy-peruda-a32799283/",
  githubUrl: "https://github.com/allanperuda",
}

// Typewriter effect component
const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1))
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1))
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Animated background particles
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Image Gallery Component (V5 Style with View More)
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const allImages = [
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/2022-TECH_Certificate_Allan%20Billy%20Peruda-1.png",
      title: "2022 TECH Certificate",
      alt: "2022 TECH Certificate awarded to Allan Billy Peruda",
      category: "Technical",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Comparing%20Select%20Zebra%20RFID%20and%20Location%20Solutions%20Offerings-1.png",
      title: "Zebra RFID Solutions",
      alt: "Certificate for comparing Zebra RFID and location solutions offerings",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/FX9600%20Industrial%20Fixed%20UHF%20RFID%20Reader%20Product%20Overview-1.png",
      title: "FX9600 RFID Reader",
      alt: "FX9600 Industrial Fixed UHF RFID Reader product overview certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/FXR90%20Ultra-Rugged%20Fixed%20RFID%20Reader%20Product%20Overview-1.png",
      title: "FXR90 Ultra-Rugged",
      alt: "FXR90 Ultra-Rugged Fixed RFID Reader product overview certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Introduction%20to%20Desktop%20Printers%20and-1.png",
      title: "Desktop Printers",
      alt: "Introduction to Desktop Printers certification",
      category: "Hardware",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Level%201%20Troubleshooting%20for%20Barcode%20Label-1.png",
      title: "Barcode Troubleshooting",
      alt: "Level 1 Troubleshooting for Barcode Label certification",
      category: "Technical",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Motionworks%20Enterprise%20RFID%20Reader%20Management%20Technical%20Sales%20Enablement-1.png",
      title: "Motionworks Enterprise",
      alt: "Motionworks Enterprise RFID Reader Management technical sales enablement certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Product%20Overview%20for%20FX7500-1.png",
      title: "FX7500 Overview",
      alt: "Product overview certificate for FX7500 RFID reader",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFD40%20RFID%20Sled%20Product%20Overview-1.png",
      title: "RFD40 RFID Sled",
      alt: "RFD40 RFID Sled product overview certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFD90%20Ultra-Rugged%20UHF%20RFID%20Sleds%20Product%20Overview-1.png",
      title: "RFD90 RFID Sleds",
      alt: "RFD90 Ultra-Rugged UHF RFID Sleds product overview certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFID%20Labels%20Fundamentals-1.png",
      title: "RFID Labels",
      alt: "RFID Labels Fundamentals certification",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFID%20Sales%20Associate%20Certification%20RFGEN-SA-001-1.png",
      title: "RFID Sales Associate",
      alt: "RFID Sales Associate Certification RFGEN-SA-001",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFID%20Technical%20Associate%20Certification%20RFGEN-TA-001-1.png",
      title: "RFID Technical Associate",
      alt: "RFID Technical Associate Certification RFGEN-TA-001",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/ST5500%20Transition%20RFID%20Reader%20Product%20Overview-1.png",
      title: "ST5500 Transition",
      alt: "ST5500 Transition RFID Reader product overview certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Selling%20MotionWorks%20Enterprise%20RFID%20Reader%20Management-1.png",
      title: "Selling MotionWorks",
      alt: "Selling MotionWorks Enterprise RFID Reader Management certificate",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Selling%20UHF%20RFID%20(EN)-1.png",
      title: "Selling UHF RFID",
      alt: "Selling UHF RFID certification in English",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/UHF%20RFID%20101%20(EN)-1.png",
      title: "UHF RFID 101",
      alt: "UHF RFID 101 certification in English",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/UHF%20RFID%20Key%20Technical%20Concepts%20Certificate%20Of%20Completion-1.png",
      title: "UHF RFID Concepts",
      alt: "UHF RFID Key Technical Concepts Certificate of Completion",
      category: "RFID",
    },
    {
      url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/UHF%20RFID%20Portfolio%20Overview%20Certificate%20Of%20Completion-1.png",
      title: "UHF RFID Portfolio",
      alt: "UHF RFID Portfolio Overview Certificate of Completion",
      category: "RFID",
    },
  ]

  const displayedImages = showAll ? allImages : allImages.slice(0, 8)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {displayedImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              y: -12,
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="cursor-pointer group perspective-1000"
            onClick={() => setSelectedImage(image.url)}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-700 group-hover:border-blue-400">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <Badge
                  variant="secondary"
                  className="text-xs bg-gray-800/90 text-gray-200 backdrop-blur-sm border-0 shadow-sm"
                >
                  {image.category}
                </Badge>
              </div>

              {/* Image */}
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                crossOrigin="anonymous"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl"
                >
                  <Eye className="h-6 w-6 text-gray-800" />
                </motion.div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              viewport={{ once: false }}
              className="mt-4 text-center"
            >
              <h3 className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {image.title}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {!showAll && allImages.length > 8 && (
        <div className="text-center">
          <Button
            onClick={() => setShowAll(true)}
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-2 border-gray-600 hover:border-blue-400 hover:bg-blue-950 transition-all duration-300 text-gray-300 hover:text-blue-400"
            aria-label="See more certificate images"
          >
            View All Certificates ({allImages.length - 8} more)
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-16 right-0 text-white hover:bg-white/20 z-10 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Certificate viewer"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              crossOrigin="anonymous"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// Enhanced Certifications Component
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Responsive Web Design",
      description: "HTML, CSS, Flexbox, Grid, and Responsive Design principles",
      icon: Smartphone,
      url: "https://freecodecamp.org/certification/fcc657fc311-22d6-4040-a3c8-4152815c6b1f/responsive-web-design",
      color: "from-blue-500 to-blue-600",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
      completionDate: "2023",
    },
    {
      title: "Front End Development Libraries",
      description: "React, Redux, Bootstrap, jQuery, and SASS",
      icon: Code,
      url: "https://freecodecamp.org/certification/fcc657fc311-22d6-4040-a3c8-4152815c6b1f/front-end-development-libraries",
      color: "from-green-500 to-green-600",
      skills: ["React", "Redux", "Bootstrap", "SASS"],
      completionDate: "2023",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description: "ES6, Regular Expressions, Data Structures, and Algorithms",
      icon: Award,
      url: "https://freecodecamp.org/certification/fcc657fc311-22d6-4040-a3c8-4152815c6b1f/javascript-algorithms-and-data-structures",
      color: "from-purple-500 to-purple-600",
      skills: ["JavaScript", "ES6", "Algorithms", "Data Structures"],
      completionDate: "2023",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{
            y: -15,
            scale: 1.03,
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          className="group perspective-1000"
        >
          <Card className="h-full transition-all duration-500 hover:shadow-2xl border-0 shadow-lg rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10`}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>

            <CardHeader className="text-center pb-6 relative z-10">
              {/* Animated Icon */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
                className={`w-24 h-24 bg-gradient-to-br ${cert.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
              >
                <cert.icon className="h-12 w-12 text-white" />
              </motion.div>

              {/* Completion Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-gray-800/80 text-gray-300 backdrop-blur-sm border-gray-600">
                  {cert.completionDate}
                </Badge>
              </div>

              <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 font-bold mb-3 text-gray-100">
                {cert.title}
              </CardTitle>
              <CardDescription className="text-gray-400 leading-relaxed mb-4">{cert.description}</CardDescription>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardHeader>

            <CardContent className="text-center pt-0 relative z-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className={`w-full bg-gradient-to-r ${cert.color} hover:shadow-xl transition-all duration-300 rounded-2xl font-semibold text-white border-0 relative overflow-hidden`}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2 relative z-10"
                    aria-label={`Open ${cert.title} certificate in new tab`}
                  >
                    <span>View Certificate</span>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact")
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:${linkedInProfile.email}?subject=${subject}&body=${body}`

      window.open(mailtoLink, "_blank")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            <User className="h-4 w-4 inline mr-2" />
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-gray-800 border-gray-600 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            <Mail className="h-4 w-4 inline mr-2" />
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-gray-800 border-gray-600 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          <MessageSquare className="h-4 w-4 inline mr-2" />
          Subject
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="bg-gray-800 border-gray-600 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="bg-gray-800 border-gray-600 text-gray-100 focus:border-blue-400 focus:ring-blue-400 resize-none"
          placeholder="Tell me about your project, question, or how I can help you..."
        />
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mr-2"
              >
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              </motion.div>
              Sending Message...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-4 bg-green-900/50 border border-green-700 rounded-lg"
        >
          <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
          <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-4 bg-red-900/50 border border-red-700 rounded-lg"
        >
          <X className="h-5 w-5 text-red-400 inline mr-2" />
          <span className="text-red-400">Something went wrong. Please try again or email me directly.</span>
        </motion.div>
      )}
    </motion.form>
  )
}

// Enhanced PDF Download Function
const downloadPDF = async () => {
  try {
    // Create enhanced HTML content for PDF with styling
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${linkedInProfile.fullName} - Resume</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
          line-height: 1.6; 
          color: #1f2937; 
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 40px;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .header { 
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 40px;
          text-align: center;
          position: relative;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        }
        
        .name { 
          font-size: 32px; 
          font-weight: 700; 
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }
        
        .title { 
          font-size: 18px; 
          font-weight: 500;
          opacity: 0.9;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        
        .contact { 
          font-size: 14px; 
          opacity: 0.8;
          position: relative;
          z-index: 1;
        }
        
        .content {
          padding: 40px;
        }
        
        .section { 
          margin-bottom: 32px; 
        }
        
        .section-title { 
          font-size: 22px; 
          font-weight: 600; 
          color: #1f2937;
          margin-bottom: 20px;
          padding-bottom: 8px;
          border-bottom: 3px solid #3b82f6;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 40px;
          height: 3px;
          background: #8b5cf6;
        }
        
        .job { 
          margin-bottom: 24px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #3b82f6;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        
        .job-title { 
          font-weight: 600; 
          color: #1f2937;
          font-size: 16px;
        }
        
        .company { 
          color: #3b82f6; 
          font-weight: 500;
          font-size: 15px;
        }
        
        .duration { 
          color: #6b7280; 
          font-size: 13px;
          background: #e5e7eb;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
        }
        
        .location {
          color: #6b7280;
          font-size: 13px;
          margin-top: 4px;
        }
        
        .bullets { 
          margin-top: 12px; 
          padding-left: 0;
          list-style: none;
        }
        
        .bullets li { 
          margin-bottom: 6px;
          padding-left: 20px;
          position: relative;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .bullets li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-size: 10px;
          top: 2px;
        }
        
        .skills-grid { 
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        
        .skill { 
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 8px 16px; 
          border-radius: 20px; 
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .about-text {
          font-size: 15px;
          line-height: 1.7;
          color: #4b5563;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #8b5cf6;
        }
        
        .education-card {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }
        
        .education-title {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 4px;
        }
        
        .education-school {
          font-weight: 500;
          opacity: 0.9;
          margin-bottom: 8px;
        }
        
        .education-details {
          font-size: 14px;
          opacity: 0.8;
        }
        
        .certifications-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        
        .cert-item {
          background: #f8fafc;
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid #f59e0b;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        
        .cert-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        
        .cert-org {
          color: #f59e0b;
          font-size: 13px;
          font-weight: 500;
        }
        
        @media print {
          body { background: white !important; padding: 0 !important; }
          .container { box-shadow: none !important; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="name">${linkedInProfile.fullName}</div>
          <div class="title">${linkedInProfile.headline}</div>
          <div class="contact">
            📧 ${linkedInProfile.email} | 
            💼 LinkedIn: ${linkedInProfile.linkedinUrl} | 
            🔗 GitHub: ${linkedInProfile.githubUrl}
          </div>
        </div>

        <div class="content">
          <div class="section">
            <div class="section-title">Professional Summary</div>
            <div class="about-text">${linkedInProfile.about}</div>
          </div>

          <div class="section">
            <div class="section-title">Professional Experience</div>
            
            <div class="job">
              <div class="job-header">
                <div>
                  <div class="job-title">${linkedInProfile.currentRole.title}</div>
                  <div class="company">${linkedInProfile.currentRole.company}</div>
                  <div class="location">📍 ${linkedInProfile.currentRole.location}</div>
                </div>
                <div class="duration">${linkedInProfile.currentRole.duration}</div>
              </div>
              <ul class="bullets">
                ${linkedInProfile.currentRole.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </div>

            ${linkedInProfile.pastRoles
              .map(
                (role) => `
              <div class="job">
                <div class="job-header">
                  <div>
                    <div class="job-title">${role.title}</div>
                    <div class="company">${role.company}</div>
                    <div class="location">📍 ${role.location}</div>
                  </div>
                  <div class="duration">${role.duration}</div>
                </div>
                <ul class="bullets">
                  ${role.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="section">
            <div class="section-title">Education</div>
            <div class="education-card">
              <div class="education-title">${linkedInProfile.education.degree}</div>
              <div class="education-school">${linkedInProfile.education.school}</div>
              <div class="education-details">🎓 Graduated ${linkedInProfile.education.year} | ${linkedInProfile.education.details}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="skills-grid">
              ${linkedInProfile.skills.map((skill) => `<div class="skill">${skill}</div>`).join("")}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Certifications</div>
            <div class="certifications-list">
              <div class="cert-item">
                <div class="cert-title">Responsive Web Design</div>
                <div class="cert-org">FreeCodeCamp (2023)</div>
              </div>
              <div class="cert-item">
                <div class="cert-title">Front End Development Libraries</div>
                <div class="cert-org">FreeCodeCamp (2023)</div>
              </div>
              <div class="cert-item">
                <div class="cert-title">JavaScript Algorithms & Data Structures</div>
                <div class="cert-org">FreeCodeCamp (2023)</div>
              </div>
              <div class="cert-item">
                <div class="cert-title">RFID Technical Certifications</div>
                <div class="cert-org">Multiple Vendors (2022-2024)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `

    // Create a new window and print to PDF
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(htmlContent)
      printWindow.document.close()
      printWindow.focus()

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 1500)
    }
  } catch (error) {
    console.error("Error generating PDF:", error)
    // Fallback to text download
    const resumeContent = `${linkedInProfile.fullName}\n${linkedInProfile.headline}\n\n${linkedInProfile.about}\n\n...`
    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${linkedInProfile.fullName.replace(/\s+/g, "_")}_Resume.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
}

// Scroll indicator
const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Set dark mode as default
    if (!theme) {
      setTheme("dark")
    }
  }, [theme, setTheme])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100" style={{ scrollBehavior: "smooth" }}>
      <ScrollIndicator />

      {/* Grid Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl font-bold">
            {linkedInProfile.fullName}
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-gray-600 hover:border-blue-400 hover:bg-blue-950"
              onClick={downloadPDF}
            >
              <Download className="h-4 w-4" />
              Resume PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
                <img
                  src="https://raw.githubusercontent.com/allanperuda/images/f53544ca9516dc7bb80e92bfa81c2ce2985b5cbc/ADP%20picture.jpg"
                  alt="Portrait of Allan Billy Peruda"
                  className="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-2xl"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">{linkedInProfile.fullName}</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-8 h-16">
              <TypewriterEffect
                words={["Network Support Expert", "RFID Specialist", "Frontend Developer", "Problem Solver"]}
              />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{linkedInProfile.about}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700" onClick={downloadPDF}>
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-gray-600 hover:border-blue-400 hover:bg-blue-950"
                onClick={() => scrollToSection("about")}
              >
                Explore My Work
                <ChevronDown className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With over 5 years of experience in technical support and system integration, I specialize in bridging the
              gap between complex technical systems and user-friendly solutions. My expertise spans networking
              infrastructure, RFID/barcode technologies, and web development.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: false }}
              className="flex items-center gap-2 bg-orange-900/50 text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-700"
            >
              <Star className="h-4 w-4 fill-current" />
              Trusted by 50+ Clients
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false }}
              className="flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-700"
            >
              <Zap className="h-4 w-4" />
              RFID & Network Expert
            </motion.div>
          </div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-900/50 rounded-2xl mb-4 mx-auto border border-blue-700">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-gray-100 mb-2">5+ Years</p>
              <p className="text-gray-400">Professional Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-2xl mb-4 mx-auto border border-green-700">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <p className="text-2xl font-bold text-gray-100 mb-2">RFID Certified</p>
              <p className="text-gray-400">Technical Professional</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-900/50 rounded-2xl mb-4 mx-auto border border-purple-700">
                <Code className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-gray-100 mb-2">Full-Stack</p>
              <p className="text-gray-400">Web Developer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">Professional Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building expertise through hands-on experience in technical support and system integration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative pl-8 pb-12"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-600 to-gray-600"></div>

              <Card className="ml-6 shadow-lg border-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2 text-gray-100">
                        <Building className="h-5 w-5 text-blue-400" />
                        {linkedInProfile.currentRole.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-300">
                        {linkedInProfile.currentRole.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="gap-1 bg-blue-900/50 text-blue-300 border-blue-700">
                      {linkedInProfile.currentRole.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {linkedInProfile.currentRole.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {linkedInProfile.currentRole.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Past Roles */}
            {linkedInProfile.pastRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative pl-8 pb-12"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gray-500 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-600"></div>

                <Card className="ml-6 shadow-lg border-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2 text-gray-100">
                          <Building className="h-4 w-4 text-gray-400" />
                          {role.title}
                        </CardTitle>
                        <CardDescription className="font-semibold text-gray-300">{role.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="gap-1 bg-gray-700 text-gray-300 border-gray-600">
                        {role.duration}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4" />
                      {role.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-green-600 rounded-full"></div>

              <Card className="ml-6 shadow-lg border-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2 text-gray-100">
                        <GraduationCap className="h-4 w-4 text-green-400" />
                        {linkedInProfile.education.degree}
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-300">
                        {linkedInProfile.education.school}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="gap-1 bg-green-900/50 text-green-300 border-green-700">
                      {linkedInProfile.education.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">{linkedInProfile.education.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Core Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technical skills and competencies developed through years of hands-on experience
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {linkedInProfile.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group cursor-default"
              >
                <Badge
                  variant="secondary"
                  className="text-lg px-6 py-3 bg-gray-800 text-gray-200 border-2 border-gray-600 hover:border-blue-400 hover:bg-blue-950 hover:text-blue-400 transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Professional Certificates</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry certifications and training achievements demonstrating expertise in RFID technologies,
              networking, and system integration
            </p>
          </motion.div>

          <ImageGallery />
        </div>
      </section>

      {/* Development Certifications */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Development Certifications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              FreeCodeCamp certifications showcasing proficiency in modern web development technologies
            </p>
          </motion.div>

          <CertificationsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to discuss your next technical challenge? Send me a message!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden bg-gray-800 border border-gray-700">
                  <CardHeader className="text-center py-8">
                    <CardTitle className="text-2xl mb-2 text-gray-100">Send Me a Message</CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-8"
              >
                <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden bg-gray-800 border border-gray-700">
                  <CardHeader className="text-center py-8">
                    <CardTitle className="text-2xl mb-2 text-gray-100">Get In Touch</CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      I'm always interested in discussing new opportunities and technical challenges.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <Mail className="h-6 w-6 text-blue-400" />
                        <a
                          href={`mailto:${linkedInProfile.email}`}
                          className="text-xl font-semibold hover:text-blue-400 transition-colors text-gray-200"
                        >
                          {linkedInProfile.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="border-gray-600 hover:border-blue-400 hover:bg-blue-950"
                      >
                        <a
                          href={linkedInProfile.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit LinkedIn profile"
                          className="gap-2"
                        >
                          <Linkedin className="h-5 w-5" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="border-gray-600 hover:border-gray-400 hover:bg-gray-700"
                      >
                        <a
                          href={linkedInProfile.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit GitHub profile"
                          className="gap-2"
                        >
                          <Github className="h-5 w-5" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-1 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl border border-blue-700/50"
                  >
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Quick Response</h3>
                    <p className="text-gray-300 text-sm">I typically respond to messages within 24 hours</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl border border-green-700/50"
                  >
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Available for</h3>
                    <p className="text-gray-300 text-sm">Consulting, Technical Support, and Development Projects</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800/50 text-center border-t border-gray-700">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © 2024 {linkedInProfile.fullName}. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}
