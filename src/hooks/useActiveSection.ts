import { useEffect, useState } from 'react'
import { sectionIds } from '@/lib/scroll'

export function useActiveSection(ready = true) {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    if (!ready) return
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))
    if (!nodes.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [ready])

  return active
}
