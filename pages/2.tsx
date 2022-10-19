import { useRouter } from 'next/router'
import { useState } from 'react'
import Board from '../components/Board'
import { ColourMap, Colours } from '../components/PastGuess'

export default function Second() {
  const [showButton, setShowButton] = useState(false)
  const { push } = useRouter()
  return (
    <div className="w-full h-full flex items-center justify-center py-10 flex-col gap-10">
      <Board word={'bday'} onCorrect={() => setShowButton(true)} />
      {showButton && (
        <button
          className={`text-white py-4 px-6 rounded-sm border-lightGray border font-bold ${
            ColourMap[Colours.GREEN]
          }`}
          onClick={() => push('/3')}
        >
          {'Go To Next Word'}
        </button>
      )}
    </div>
  )
}
