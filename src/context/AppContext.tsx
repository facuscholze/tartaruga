import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dayState, type TimeMode } from '@/lib/dayState'

type AppContextValue = {
  loaderDone: boolean
  setLoaderDone: (v: boolean) => void
  mode: TimeMode
  setMode: (m: TimeMode) => void
  soundOn: boolean
  setSoundOn: (v: boolean) => void
  egg: boolean
  triggerEgg: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false)
  const [mode, setModeState] = useState<TimeMode>('auto')
  const [soundOn, setSoundOn] = useState(false)
  const [egg, setEgg] = useState(false)

  const setMode = useCallback((m: TimeMode) => {
    dayState.mode = m
    setModeState(m)
  }, [])

  const triggerEgg = useCallback(() => {
    setEgg(true)
    window.setTimeout(() => setEgg(false), 4500)
  }, [])

  const value = useMemo(
    () => ({
      loaderDone,
      setLoaderDone,
      mode,
      setMode,
      soundOn,
      setSoundOn,
      egg,
      triggerEgg,
    }),
    [loaderDone, mode, setMode, soundOn, egg, triggerEgg],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp fuera de AppProvider')
  return ctx
}
