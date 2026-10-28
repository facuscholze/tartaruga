import { useSyncExternalStore } from 'react'

function subscribe(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getServerSnapshot() {
  return false
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function subscribeFine(cb: () => void) {
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getFine() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export function useFinePointer() {
  return useSyncExternalStore(subscribeFine, getFine, getServerSnapshot)
}
