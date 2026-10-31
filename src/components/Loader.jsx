import { useProgress } from "@react-three/drei"

// Rendered outside the <Canvas>: drei's <Html> inside a Suspense fallback
// throws removeChild errors under React 19.
const Loader = () => {
  const { active } = useProgress()
  if (!active) return null

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="w-20 h-20 border-2 border-opacity-20
      border-blue-500 border-t-blue-500 rounded-full animate-spin"/>
    </div>
  )
}

export default Loader
