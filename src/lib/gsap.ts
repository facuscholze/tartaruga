import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

let registered = false

export function registerGsap() {
  if (registered) return
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    Flip,
    DrawSVGPlugin,
    MorphSVGPlugin,
    MotionPathPlugin,
    ScrollSmoother,
  )
  registered = true
}

export { gsap, ScrollTrigger, SplitText, Flip, DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin }
