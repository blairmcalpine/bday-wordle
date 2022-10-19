import { useEffect } from 'react'

export default function useKeyPress(callback: (key: string) => void) {
  function downHandler({ key }: KeyboardEvent) {
    callback(key)
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
