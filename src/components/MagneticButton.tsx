import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { useFinePointer, useReducedMotion } from '@/hooks/useReducedMotion'

const baseClass =
  'magnetic inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 font-mono text-xs tracking-[0.18em] text-navy uppercase transition-[filter,transform] duration-300 hover:brightness-105'

function magnetize(el: HTMLElement, e: { clientX: number; clientY: number }) {
  const r = el.getBoundingClientRect()
  const x = e.clientX - r.left - r.width / 2
  const y = e.clientY - r.top - r.height / 2
  el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`
}

export function MagneticLink({
  className = '',
  children,
  ...rest
}: { className?: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const node = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()
  const fine = useFinePointer()
  return (
    <a
      {...rest}
      ref={node}
      onMouseMove={(e) => {
        if (reduced || !fine || !node.current) return
        magnetize(node.current, e)
      }}
      onMouseLeave={() => {
        if (node.current) node.current.style.transform = 'translate(0, 0)'
      }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </a>
  )
}

export function MagneticButton({
  className = '',
  children,
  ...rest
}: { className?: string; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const node = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()
  const fine = useFinePointer()
  return (
    <button
      {...rest}
      ref={node}
      onMouseMove={(e) => {
        if (reduced || !fine || !node.current) return
        magnetize(node.current, e)
      }}
      onMouseLeave={() => {
        if (node.current) node.current.style.transform = 'translate(0, 0)'
      }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  )
}
