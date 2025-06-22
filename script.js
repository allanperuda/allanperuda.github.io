// Enhanced Portfolio JavaScript with Dark Mode Default

// Profile Data
const profileData = {
  fullName: "Allan Billy Peruda",
  headline: "Technical Support Engineer | RFID & Networking Specialist",
  about:
    "Experienced Technical Support Engineer with expertise in RFID technologies, networking infrastructure, and barcode systems. Passionate about bridging hardware and software solutions to optimize business operations.",
  email: "allan.peruda@email.com",
  linkedinUrl: "https://www.linkedin.com/in/allan-billy-peruda-a32799283/",
  githubUrl: "https://github.com/allanperuda",
  skills: [
    "RFID Technology",
    "Network Administration",
    "JavaScript Development",
    "System Integration",
    "Technical Support",
    "Database Management",
  ],
}

// Certificate Data
const certificates = [
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/2022-TECH_Certificate_Allan%20Billy%20Peruda-1.png",
    title: "2022 TECH Certificate",
    category: "Technical",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Comparing%20Select%20Zebra%20RFID%20and%20Location%20Solutions%20Offerings-1.png",
    title: "Zebra RFID Solutions",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/FX9600%20Industrial%20Fixed%20UHF%20RFID%20Reader%20Product%20Overview-1.png",
    title: "FX9600 RFID Reader",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/FXR90%20Ultra-Rugged%20Fixed%20RFID%20Reader%20Product%20Overview-1.png",
    title: "FXR90 Ultra-Rugged",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Introduction%20to%20Desktop%20Printers%20and-1.png",
    title: "Desktop Printers",
    category: "Hardware",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Level%201%20Troubleshooting%20for%20Barcode%20Label-1.png",
    title: "Barcode Troubleshooting",
    category: "Technical",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Motionworks%20Enterprise%20RFID%20Reader%20Management%20Technical%20Sales%20Enablement-1.png",
    title: "Motionworks Enterprise",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Product%20Overview%20for%20FX7500-1.png",
    title: "FX7500 Overview",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFD40%20RFID%20Sled%20Product%20Overview-1.png",
    title: "RFD40 RFID Sled",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFD90%20Ultra-Rugged%20UHF%20RFID%20Sleds%20Product%20Overview-1.png",
    title: "RFD90 RFID Sleds",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFID%20Labels%20Fundamentals-1.png",
    title: "RFID Labels",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFID%20Sales%20Associate%20Certification%20RFGEN-SA-001-1.png",
    title: "RFID Sales Associate",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/RFID%20Technical%20Associate%20Certification%20RFGEN-TA-001-1.png",
    title: "RFID Technical Associate",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/ST5500%20Transition%20RFID%20Reader%20Product%20Overview-1.png",
    title: "ST5500 Transition",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Selling%20MotionWorks%20Enterprise%20RFID%20Reader%20Management-1.png",
    title: "Selling MotionWorks",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/Selling%20UHF%20RFID%20(EN)-1.png",
    title: "Selling UHF RFID",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/UHF%20RFID%20101%20(EN)-1.png",
    title: "UHF RFID 101",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/UHF%20RFID%20Key%20Technical%20Concepts%20Certificate%20Of%20Completion-1.png",
    title: "UHF RFID Concepts",
    category: "RFID",
  },
  {
    url: "https://raw.githubusercontent.com/allanperuda/images/refs/heads/main/UHF%20RFID%20Portfolio%20Overview%20Certificate%20Of%20Completion-1.png",
    title: "UHF RFID Portfolio",
    category: "RFID",
  },
]

// Global Variables
let showAllCertificates = false
let currentTheme = "dark"

// Theme Icon Update Function (Global Scope)
function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("themeIcon")
  if (themeIcon) {
    themeIcon.className = theme === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill"
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializePortfolio()
})

function initializePortfolio() {
  try {
    // Initialize AOS with enhanced settings
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: "ease-out-cubic",
      })
    }

    // Set dark mode as default
    setDefaultTheme()

    // Initialize components
    initializeScrollProgress()
    initializeTypewriter()
    initializeParticles()
    initializeCertificateGallery()
    initializeThemeToggle()
    initializeScrollEffects()
    initializeContactForm()
    initializeSmoothScrolling()
  } catch (error) {
    console.error("Error initializing portfolio:", error)
  }
}

// Set Dark Mode as Default
function setDefaultTheme() {
  try {
    const savedTheme = localStorage.getItem("theme")
    const defaultTheme = savedTheme || "dark"
    currentTheme = defaultTheme

    document.documentElement.setAttribute("data-bs-theme", defaultTheme)
    updateThemeIcon(defaultTheme)

    if (!savedTheme) {
      localStorage.setItem("theme", "dark")
    }
  } catch (error) {
    console.error("Error setting default theme:", error)
    // Fallback to dark theme
    document.documentElement.setAttribute("data-bs-theme", "dark")
    currentTheme = "dark"
  }
}

// Enhanced Smooth Scrolling
function initializeSmoothScrolling() {
  try {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          const offsetTop = target.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      })
    })
  } catch (error) {
    console.error("Error initializing smooth scrolling:", error)
  }
}

// Smooth Scroll to Section Function
function scrollToSection(sectionId) {
  try {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  } catch (error) {
    console.error("Error scrolling to section:", error)
  }
}

// Scroll Progress Bar
function initializeScrollProgress() {
  try {
    const progressBar = document.getElementById("progressBar")
    if (!progressBar) return

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + "%"
    })
  } catch (error) {
    console.error("Error initializing scroll progress:", error)
  }
}

// Enhanced Typewriter Effect
function initializeTypewriter() {
  try {
    const words = ["Network Support Expert", "RFID Specialist", "Frontend Developer", "Problem Solver"]
    const typewriterElement = document.getElementById("typewriter")

    if (!typewriterElement) return

    let currentWordIndex = 0
    let currentText = ""
    let isDeleting = false

    function type() {
      const currentWord = words[currentWordIndex]

      if (!isDeleting) {
        currentText = currentWord.substring(0, currentText.length + 1)
        typewriterElement.textContent = currentText

        if (currentText === currentWord) {
          setTimeout(() => (isDeleting = true), 2000)
        }
      } else {
        currentText = currentWord.substring(0, currentText.length - 1)
        typewriterElement.textContent = currentText

        if (currentText === "") {
          isDeleting = false
          currentWordIndex = (currentWordIndex + 1) % words.length
        }
      }

      setTimeout(type, isDeleting ? 50 : 100)
    }

    type()
  } catch (error) {
    console.error("Error initializing typewriter:", error)
  }
}

// Enhanced Particle Animation
function initializeParticles() {
  try {
    const particlesContainer = document.querySelector(".particles-container")
    if (!particlesContainer) return

    function createParticle() {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDuration = Math.random() * 10 + 10 + "s"
      particle.style.animationDelay = Math.random() * 5 + "s"

      particlesContainer.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 20000)
    }

    // Create particles periodically
    setInterval(createParticle, 2000)

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, i * 200)
    }
  } catch (error) {
    console.error("Error initializing particles:", error)
  }
}

// Enhanced Certificate Gallery with View More
function initializeCertificateGallery() {
  try {
    const grid = document.getElementById("certificatesGrid")
    const viewMoreBtn = document.getElementById("viewMoreBtn")
    const viewMoreContainer = document.getElementById("viewMoreContainer")

    if (!grid) return

    function renderCertificates() {
      const displayCount = showAllCertificates ? certificates.length : 8
      const displayedCertificates = certificates.slice(0, displayCount)

      grid.innerHTML = ""

      displayedCertificates.forEach((cert, index) => {
        const col = document.createElement("div")
        col.className = "col-lg-3 col-md-4 col-sm-6"
        col.setAttribute("data-aos", "zoom-in")
        col.setAttribute("data-aos-delay", (index * 50).toString())

        col.innerHTML = `
          <div class="cert-gallery-item" onclick="openCertificateModal('${cert.url}')">
            <img src="${cert.url}" alt="${cert.title}" loading="lazy" crossorigin="anonymous">
            <div class="cert-category">
              <span class="badge bg-secondary text-light border border-secondary">${cert.category}</span>
            </div>
            <div class="cert-overlay">
              <i class="bi bi-eye-fill text-white fs-1"></i>
            </div>
            <div class="cert-title">
              <h6 class="mb-0 text-light">${cert.title}</h6>
            </div>
          </div>
        `

        grid.appendChild(col)
      })

      // Update view more button
      if (certificates.length > 8 && viewMoreContainer && viewMoreBtn) {
        if (showAllCertificates) {
          viewMoreContainer.style.display = "none"
        } else {
          viewMoreContainer.style.display = "block"
          viewMoreBtn.innerHTML = `View All Certificates (${certificates.length - 8} more) <i class="bi bi-arrow-right ms-2"></i>`
        }
      } else if (viewMoreContainer) {
        viewMoreContainer.style.display = "none"
      }

      // Refresh AOS
      if (typeof AOS !== "undefined") {
        AOS.refresh()
      }
    }

    // View More Button Event
    if (viewMoreBtn) {
      viewMoreBtn.addEventListener("click", () => {
        showAllCertificates = true
        renderCertificates()
      })
    }

    // Initial render
    renderCertificates()
  } catch (error) {
    console.error("Error initializing certificate gallery:", error)
  }
}

// Certificate Modal
function openCertificateModal(imageUrl) {
  try {
    const modalElement = document.getElementById("certificateModal")
    const modalImage = document.getElementById("modalImage")

    if (modalElement && modalImage) {
      if (typeof bootstrap !== "undefined") {
        const modal = new bootstrap.Modal(modalElement)
        modalImage.src = imageUrl
        modal.show()
      }
    }
  } catch (error) {
    console.error("Error opening certificate modal:", error)
  }
}

// Enhanced Theme Toggle
function initializeThemeToggle() {
  try {
    const themeToggle = document.getElementById("themeToggle")
    const html = document.documentElement

    if (!themeToggle) return

    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-bs-theme")
      const newTheme = currentTheme === "light" ? "dark" : "light"

      html.setAttribute("data-bs-theme", newTheme)
      localStorage.setItem("theme", newTheme)
      updateThemeIcon(newTheme)

      // Update global theme variable
      window.currentTheme = newTheme
    })
  } catch (error) {
    console.error("Error initializing theme toggle:", error)
  }
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
  try {
    // Navbar background on scroll
    const navbar = document.querySelector(".navbar")
    if (!navbar) return

    window.addEventListener("scroll", () => {
      const currentTheme = document.documentElement.getAttribute("data-bs-theme")

      if (window.scrollY > 100) {
        if (currentTheme === "dark") {
          navbar.style.backgroundColor = "rgba(26, 26, 26, 0.95)"
        } else {
          navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
        }
      } else {
        if (currentTheme === "dark") {
          navbar.style.backgroundColor = "rgba(26, 26, 26, 0.9)"
        } else {
          navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
        }
      }
    })

    // Enhanced scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    // Observe elements for animations
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el)
    })
  } catch (error) {
    console.error("Error initializing scroll effects:", error)
  }
}

// Enhanced Contact Form
function initializeContactForm() {
  try {
    const contactForm = document.getElementById("contactForm")
    const formStatus = document.getElementById("formStatus")

    if (!contactForm) return

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<div class="spinner me-2"></div>Sending...'
      submitBtn.disabled = true

      try {
        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Create mailto link with form data
        const subject = encodeURIComponent(data.subject || "Portfolio Contact")
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)
        const mailtoLink = `mailto:${profileData.email}?subject=${subject}&body=${body}`

        window.open(mailtoLink, "_blank")

        // Show success message
        if (formStatus) {
          formStatus.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <i class="bi bi-check-circle me-2"></i>
              Message sent successfully! I'll get back to you soon.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
          `
        }

        // Reset form
        contactForm.reset()
      } catch (error) {
        // Show error message
        if (formStatus) {
          formStatus.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <i class="bi bi-exclamation-triangle me-2"></i>
              Something went wrong. Please try again or email me directly.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
          `
        }
      } finally {
        // Restore button
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false

        // Clear status after 5 seconds
        setTimeout(() => {
          if (formStatus) {
            formStatus.innerHTML = ""
          }
        }, 5000)
      }
    })
  } catch (error) {
    console.error("Error initializing contact form:", error)
  }
}

// Enhanced PDF Download Function
function downloadPDF() {
  try {
    // Create enhanced HTML content for PDF with styling
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${profileData.fullName} - Resume</title>
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
            <div class="name">${profileData.fullName}</div>
            <div class="title">${profileData.headline}</div>
            <div class="contact">
              📧 ${profileData.email} | 
              💼 LinkedIn: ${profileData.linkedinUrl} | 
              🔗 GitHub: ${profileData.githubUrl}
            </div>
          </div>

          <div class="content">
            <div class="section">
              <div class="section-title">Professional Summary</div>
              <div class="about-text">${profileData.about}</div>
            </div>

            <div class="section">
              <div class="section-title">Professional Experience</div>
              
              <div class="job">
                <div class="job-header">
                  <div>
                    <div class="job-title">Senior Technical Support Engineer</div>
                    <div class="company">TechCorp Solutions</div>
                    <div class="location">📍 Remote</div>
                  </div>
                  <div class="duration">2024 - Present</div>
                </div>
                <ul class="bullets">
                  <li>Leading RFID implementation projects for enterprise clients, reducing inventory discrepancies by 95%</li>
                  <li>Managing network infrastructure upgrades and troubleshooting for 500+ endpoints</li>
                  <li>Developing custom integration solutions using JavaScript and REST APIs</li>
                </ul>
              </div>

              <div class="job">
                <div class="job-header">
                  <div>
                    <div class="job-title">Technical Support Engineer</div>
                    <div class="company">NetworkPro Inc.</div>
                    <div class="location">📍 San Francisco, CA</div>
                  </div>
                  <div class="duration">2022 - 2024</div>
                </div>
                <ul class="bullets">
                  <li>Specialized in network troubleshooting and barcode system integration</li>
                  <li>Reduced average ticket resolution time by 40% through process optimization</li>
                  <li>Trained junior technicians on RFID reader configuration and deployment</li>
                </ul>
              </div>

              <div class="job">
                <div class="job-header">
                  <div>
                    <div class="job-title">IT Support Specialist</div>
                    <div class="company">DataFlow Systems</div>
                    <div class="location">📍 Oakland, CA</div>
                  </div>
                  <div class="duration">2020 - 2022</div>
                </div>
                <ul class="bullets">
                  <li>Provided technical support for 200+ users across multiple departments</li>
                  <li>Developed internal tools using HTML, CSS, and JavaScript</li>
                  <li>Maintained 99.5% system uptime through proactive monitoring</li>
                </ul>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Education</div>
              <div class="education-card">
                <div class="education-title">Bachelor of Science in Computer Science</div>
                <div class="education-school">California State University</div>
                <div class="education-details">🎓 Graduated 2019 | Focus on Networking and Database Systems</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Technical Skills</div>
              <div class="skills-grid">
                ${profileData.skills.map((skill) => `<div class="skill">${skill}</div>`).join("")}
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
                  <div class="cert-org">
FreeCodeCamp (2023)</div>
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
    } else {
      // Fallback: create downloadable HTML file
      const blob = new Blob([htmlContent], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${profileData.fullName.replace(/\s+/g, "_")}_Resume.html`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("Error generating PDF. Please try again.")
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Performance optimization
const debouncedScrollHandler = debounce(() => {
  // Handle scroll events
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)

// Error handling
window.addEventListener("error", (e) => {
  console.error("Portfolio error:", e.error)
})

// Service Worker for offline functionality (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Export functions for global access
window.scrollToSection = scrollToSection
window.openCertificateModal = openCertificateModal
window.downloadPDF = downloadPDF
window.updateThemeIcon = updateThemeIcon
