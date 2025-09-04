"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    const sections = ["home", "about", "projects", "skills", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contato" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-lg"
          : "bg-background/70 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="font-geist font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-accent hover:to-primary transition-all duration-300 flex items-center gap-2 group"
          >
            <Zap className="h-6 w-6 text-accent group-hover:rotate-12 transition-transform duration-300" />
            Mateus Tomaz
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-manrope transition-all duration-300 relative px-3 py-2 ${
                  activeSection === item.id ? "text-accent font-medium" : "text-gray-300 hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent transition-all duration-300 ${
                    activeSection === item.id ? "w-6" : "w-0"
                  }`}
                ></span>
              </button>
            ))}

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hover:bg-accent/0 transition-all duration-300 ml-4"
            >
              {isDark ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-blue-400" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hover:bg-accent/10 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isDark ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-blue-400" />}
              </div>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent/10 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 transition-transform duration-300">
                {isOpen ? (
                  <X className="h-5 w-5 rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-manrope text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:bg-accent/10 relative group ${
                    activeSection === item.id
                      ? "text-accent font-medium bg-accent/10"
                      : "text-gray-300 hover:text-foreground"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fade-in-up 0.5s ease-out forwards",
                  }}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-r-full"></span>
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
