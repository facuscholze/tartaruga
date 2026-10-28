/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module '*?w=*' {
  const src: string
  export default src
}

declare module '*?url' {
  const src: string
  export default src
}
