"use client"

import { ReactNode } from "react"
import dynamic from "next/dynamic"

const SmoothScroll = dynamic(() => import("@/components/smooth-scroll"), {
  ssr: false,
})

const Preloader = dynamic(() => import("@/components/preloader"), {
  ssr: false,
})

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Preloader />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  )
}

