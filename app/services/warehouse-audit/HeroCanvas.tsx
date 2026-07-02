'use client'

import React, { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<Point>({ x: 0, y: 0 })
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const smoothing = 0.08
    const influenceRadius = 140

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || 600
    }

    const recenterMouse = () => {
      const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 }
      mouseRef.current = centerPoint
      targetMouseRef.current = centerPoint
    }

    const handleResize = () => {
      resizeCanvas()
      recenterMouse()
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }
    }

    const handleMouseLeave = () => {
      recenterMouse()
    }

    resizeCanvas()
    recenterMouse()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const dotSpacing = 32

      for (let x = dotSpacing / 2; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < canvas.height; y += dotSpacing) {
          const dx = x - mouseRef.current.x
          const dy = y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let radius = 1.0
          let opacity = 0.12

          if (distance < influenceRadius) {
            const factor = 1 - distance / influenceRadius
            radius = 1.0 + factor * 2.5
            opacity = 0.12 + factor * 0.45
            ctx.fillStyle = `rgba(255, 107, 0, ${opacity})`
          } else {
            ctx.fillStyle = `rgba(0, 28, 85, ${opacity})`
          }

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationId = window.requestAnimationFrame(animate)
    }

    animationId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-60"
      aria-hidden="true"
    />
  )
}
