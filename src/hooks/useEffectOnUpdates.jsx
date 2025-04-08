import { useEffect, useRef } from 'react'

// this hook will only run the effect function when the component updates
// will not run when the component mounts
// deps -> must be an array: [something]


export default function useEffectOnUpdates(effectFunction, deps) {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else {
      effectFunction()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
