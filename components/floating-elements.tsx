"use client"

import { useEffect, useState } from "react"
import { Code2, Palette, Zap, Sparkles, Layers, Monitor } from "lucide-react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const icons = [Code2, Palette, Zap, Sparkles, Layers, Monitor]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((Icon, index) => {
        const delay = index * 0.5
        const offsetX = (mousePosition.x - window.innerWidth / 2) * (0.02 + index * 0.01)
        const offsetY = (mousePosition.y - window.innerHeight / 2) * (0.02 + index * 0.01)

        return (
          <div
            key={index}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + index * 10}%`,
              transform: `translate(${offsetX}px, ${offsetY}px)`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon size={24 + index * 8} className="text-accent" />
          </div>
        )
      })}
    </div>
  )
}
