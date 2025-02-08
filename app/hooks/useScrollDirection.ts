import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll <= 0) {
        setScrollDirection("up")
        return
      }

      if (currentScroll > lastScroll && scrollDirection !== "down") {
        setScrollDirection("down")
      } else if (currentScroll < lastScroll && scrollDirection !== "up") {
        setScrollDirection("up")
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll, scrollDirection])

  return scrollDirection
} 