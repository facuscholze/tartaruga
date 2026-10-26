import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState, Suspense } from 'react'
import type { ShaderMaterial } from 'three'
import { effectiveProgress } from '@/lib/dayState'
import { hasWebGL, isLowPowerDevice } from '@/lib/device'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SkyFallback } from './SkyFallback'
import { skyFrag, skyVert } from './skyShader'

function SkyQuad({ low }: { low: boolean }) {
  const mat = useRef<ShaderMaterial>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uLow: { value: low ? 1 : 0 },
    }),
    [low],
  )

  useFrame(({ clock }) => {
    if (!mat.current) return
    mat.current.uniforms.uTime.value = clock.elapsedTime
    mat.current.uniforms.uScroll.value = effectiveProgress()
  })

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={skyVert}
        fragmentShader={skyFrag}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function SkyCanvas() {
  const reduced = useReducedMotion()
  const [webgl] = useState(() => hasWebGL())
  const [low] = useState(() => isLowPowerDevice())

  if (reduced || !webgl) return <SkyFallback />

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <Suspense fallback={<SkyFallback />}>
        <Canvas
          dpr={low ? 1 : [1, 1.25]}
          gl={{
            antialias: false,
            alpha: false,
            stencil: false,
            depth: false,
            powerPreference: low ? 'low-power' : 'high-performance',
          }}
          frameloop="always"
          style={{ width: '100%', height: '100%' }}
        >
          <SkyQuad low={low} />
        </Canvas>
      </Suspense>
    </div>
  )
}
