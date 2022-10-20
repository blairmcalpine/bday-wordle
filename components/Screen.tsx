import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Board from './Board'
import Keyboard from './Keyboard'
import { ColourMap, Colours } from './PastGuess'

interface ScreenProps {
  message: string
  word: string
  pushPath: string
}

export interface KeyboardColours {
  [key: string]: Colours
}

export default function Screen({ message, word, pushPath }: ScreenProps) {
  const [showButton, setShowButton] = useState(false)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [letterColours, setLetterColours] = useState<KeyboardColours>({})
  const guessRef = useRef('')
  const letterRef = useRef<KeyboardColours>({})
  const { push } = useRouter()
  guessRef.current = currentGuess
  letterRef.current = letterColours
  function onSubmit(guess: string) {
    setGuesses((guesses) => [...guesses, guess])
    Array.from(guess).forEach((c, i) => {
      if (word[i] === c) {
        letterRef.current[c] = Colours.GREEN
        setLetterColours(letterRef.current)
      }
    })
    Array.from(guess).forEach((c) => {
      if (word.includes(c) && !letterRef.current[c]) {
        letterRef.current[c] = Colours.YELLOW
        setLetterColours(letterRef.current)
      }
    })
    Array.from(guess).forEach((c) => {
      if (!letterRef.current[c]) {
        letterRef.current[c] = Colours.GRAY
        setLetterColours(letterRef.current)
      }
    })
    if (guess === word) {
      setShowButton(true)
    }
  }
  function onKeypress(key: string) {
    if (
      guessRef.current.length < word.length &&
      key.length == 1 &&
      key.charCodeAt(0) >= 97 &&
      key.charCodeAt(0) <= 122
    ) {
      setCurrentGuess((currentGuess) => currentGuess + key)
    } else if (key === 'Backspace') {
      setCurrentGuess((currentGuess) => currentGuess.slice(0, -1))
    } else if (key === 'Enter' && guessRef.current.length === word.length) {
      setCurrentGuess('')
      onSubmit(guessRef.current)
    }
  }
  return (
    <div className="w-full h-[88vh] flex flex-col items-center fixed bottom-8">
      <div className="flex items-center justify-center w-full h-[3vh]">
        <p className="text-white font-bold text-xl">{message}</p>
      </div>
      <div className="h-full w-full max-h-[70vh] overflow-y-auto flex items-center justify-center flex-col gap-10">
        <Board
          guesses={guesses}
          correct={showButton}
          word={word}
          onKeypress={onKeypress}
          currentGuess={currentGuess}
        />
        {showButton && (
          <button
            className={`text-white py-4 px-6 rounded-sm border-lightGray border font-bold ${
              ColourMap[Colours.GREEN]
            }`}
            onClick={() => push(pushPath)}
          >
            {'Go To Next Word'}
          </button>
        )}
      </div>
      <Keyboard onKeypress={onKeypress} letterColours={letterColours} />
    </div>
  )
}
