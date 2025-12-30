"use client"

import type React from "react"

import { useEffect } from "react"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Dynamically import Lenis only on client
    let lenisInstance: any = null
    let rafId: number | null = null

    import('lenis').then((Lenis) => {
      lenisInstance = new Lenis.default({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time)
          rafId = requestAnimationFrame(raf)
        }
      }

      rafId = requestAnimationFrame(raf)
    })

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (lenisInstance) {
        lenisInstance.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
