import { Fragment } from 'react'
import CurrentGuess from './CurrentGuess'
import PastGuess from './PastGuess'

interface BoardProps {
  word: string
  onKeypress: (key: string) => void
  currentGuess: string
  guesses: string[]
  correct: boolean
}

export default function Board({
  word,
  onKeypress,
  currentGuess,
  guesses,
  correct,
}: BoardProps) {
  return (
    <div className="flex flex-col gap-[5px]">
      {guesses.map((guess, index) => (
        <Fragment key={index}>
          <PastGuess guess={guess} correct={word} />
        </Fragment>
      ))}
      {!correct && (
        <CurrentGuess
          size={word.length}
          onKeypress={onKeypress}
          currentGuess={currentGuess}
        />
      )}
    </div>
  )
}
