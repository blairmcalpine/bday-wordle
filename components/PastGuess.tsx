import { useMemo } from 'react'

export enum Colours {
  GRAY,
  GREEN,
  YELLOW,
}

export const ColourMap: Record<Colours, string> = {
  [Colours.GRAY]: 'bg-[#3a3a3c]',
  [Colours.YELLOW]: 'bg-[#b59f3b]',
  [Colours.GREEN]: 'bg-[#538d4e]',
}

interface PastGuessProps {
  guess: string
  correct: string
}

export default function PastGuess({ guess, correct }: PastGuessProps) {
  const colours = useMemo(() => {
    const correctArray = Array.from(correct)
    const guessArray = Array.from(guess)
    const colours = correctArray.map(() => Colours.GRAY)
    guessArray.forEach((c, i) => {
      if (c === correctArray[i]) {
        colours[i] = Colours.GREEN
        correctArray[i] = '0'
        guessArray[i] = '1'
      }
    })
    guessArray.forEach((c, i) => {
      if (correctArray.includes(c)) {
        colours[i] = Colours.YELLOW
        correctArray[i] = '2'
        guessArray[i] = '3'
      }
    })
    return colours
  }, [guess, correct])
  return (
    <div className="flex gap-[5px]">
      {Array.from(guess).map((letter, index) => (
        <div
          key={index}
          className={`h-[62px] w-[62px] flex items-center justify-center ${
            ColourMap[colours[index]]
          }`}
        >
          <p
            className="text-white font-bold capitalize"
            style={{
              fontSize: '36px',
              lineHeight: '36px',
            }}
          >
            {letter}
          </p>
        </div>
      ))}
    </div>
  )
}
