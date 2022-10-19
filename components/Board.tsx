import { Fragment, useState } from 'react'
import CurrentGuess from './CurrentGuess'
import PastGuess from './PastGuess'

interface BoardProps {
  word: string
  onCorrect: () => void
}

export default function Board({ word, onCorrect }: BoardProps) {
  const [guesses, setGuesses] = useState<Array<string>>([])
  const [correct, setCorrect] = useState(false)
  function onSubmit(guess: string) {
    setGuesses((guesses) => [...guesses, guess])
    if (guess === word) {
      setCorrect(true)
      onCorrect()
    }
  }
  return (
    <div className="flex flex-col gap-[5px]">
      {guesses.map((guess, index) => (
        <Fragment key={index}>
          <PastGuess guess={guess} correct={word} />
        </Fragment>
      ))}
      {!correct && <CurrentGuess size={word.length} onSubmit={onSubmit} />}
    </div>
  )
}
