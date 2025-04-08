import { useState } from 'react'
import useEffectOnUpdates from './useEffectOnUpdates'

// creating a toggle hook for boolean values. Which can take a parameter, true or false
// when renders first does not call the effect function

export default function useToggle(
  initialValue = false,
  onToggle = () => {}
) {

  const [on, setOn] = useState(initialValue)

  function toggle() {
    setOn(prev => !prev)
  }

  useEffectOnUpdates(onToggle, [on])

  return [on, toggle]
}
