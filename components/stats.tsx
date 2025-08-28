"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: 50, suffix: "+", label: "Projetos Concluídos" },
    { number: 25, suffix: "+", label: "Clientes Satisfeitos" },
    { number: 5, suffix: "+", label: "Anos de Experiência" },
    { number: 98, suffix: "%", label: "Taxa de Satisfação" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const AnimatedNumber = ({ number, suffix }: { number: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = number / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, number])

    return (
      <span className="font-geist text-4xl md:text-5xl font-bold text-primary">
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section id="stats-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-geist text-3xl sm:text-4xl font-bold text-primary mb-6">Números Que Falam</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alguns números que representam minha jornada e dedicação ao desenvolvimento web.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                <p className="font-manrope text-muted-foreground mt-2 text-sm md:text-base">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
