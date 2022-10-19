import { useRef, useState } from 'react'
import useKeyPress from '../hooks/useKeyPress'

interface CurrentGuessProps {
  size: number
  onSubmit: (guess: string) => void
}

export default function CurrentGuess({ size, onSubmit }: CurrentGuessProps) {
  const [letters, setLetters] = useState<string>('')
  const stateRef = useRef<string>('')
  stateRef.current = letters
  useKeyPress((key: string) => {
    if (
      stateRef.current.length < size &&
      key.length == 1 &&
      key.charCodeAt(0) >= 97 &&
      key.charCodeAt(0) <= 122
    ) {
      setLetters((letters) => letters + key)
    } else if (key === 'Backspace') {
      setLetters((letters) => letters.slice(0, -1))
    } else if (key === 'Enter' && stateRef.current.length === size) {
      setLetters('')
      onSubmit(stateRef.current)
    }
  })
  return (
    <div className="flex gap-[5px]">
      {Array.from(letters).map((letter, index) => (
        <div
          key={index}
          className="h-[62px] w-[62px] bg-darkGray border-2 border-lightGray flex items-center justify-center"
        >
          <p
            className="text-white text-3xl font-bold capitalize"
            style={{
              fontSize: '36px',
              lineHeight: '36px',
            }}
          >
            {letter}
          </p>
        </div>
      ))}
      {letters.length < size &&
        Array.from(Array(size - letters.length)).map((_, index) => (
          <div
            key={index}
            className="h-[62px] w-[62px] bg-darkGray border-2 border-lightGray"
          />
        ))}
    </div>
  )
}
