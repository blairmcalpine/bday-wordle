import { useState } from 'react'
import Board from '../components/Board'

export default function Third() {
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div className="w-full h-full flex items-center justify-center py-10 flex-col gap-10">
      <Board word={'boo'} onCorrect={() => setShowMessage(true)} />
      {showMessage && (
        <div className="fixed m-auto bg-darkGray border-lightGray border h-[40vh] w-[40vw] rounded-md p-4 flex justify-center">
          <p className="text-white font-bold text-3xl">
            {'Happy Birthday Boo 😁'}
          </p>
        </div>
      )}
    </div>
  )
}
