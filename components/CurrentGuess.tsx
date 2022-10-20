import useKeyPress from '../hooks/useKeyPress'

interface CurrentGuessProps {
  size: number
  onKeypress: (key: string) => void
  currentGuess: string
}

export default function CurrentGuess({
  size,
  onKeypress,
  currentGuess,
}: CurrentGuessProps) {
  useKeyPress(onKeypress)
  return (
    <div className="flex gap-[5px]">
      {Array.from(currentGuess).map((letter, index) => (
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
      {currentGuess.length < size &&
        Array.from(Array(size - currentGuess.length)).map((_, index) => (
          <div
            key={index}
            className="h-[62px] w-[62px] bg-darkGray border-2 border-lightGray"
          />
        ))}
    </div>
  )
}
