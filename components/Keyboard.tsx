import Backspace from '../icons/Backspace'
import { ColourMap } from './PastGuess'
import { KeyboardColours } from './Screen'

const rows = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
]

interface KeyboardProps {
  onKeypress: (key: string) => void
  letterColours: KeyboardColours
}

export default function Keyboard({ onKeypress, letterColours }: KeyboardProps) {
  console.log(letterColours)
  return (
    <div className="flex flex-col items-center gap-1 w-[90vw] max-w-[500px] h-[15dvh] bg-darkGray justify-center">
      {rows.map((row, idx) => (
        <div
          className="grid grid-flow-col gap-1 w-[90vw] max-w-[500px] h-fit"
          key={idx}
        >
          {idx == 1 && <div className="col-span-1 ml-[11px]" />}
          {row.map((key) => (
            <div
              key={key}
              onClick={() => onKeypress(key)}
              className={`${
                letterColours[key] !== undefined
                  ? ColourMap[letterColours[key]]
                  : 'bg-[#818384]'
              } rounded-sm flex items-center justify-center capitalize p-1 cursor-pointer ${
                key === 'Backspace' || key === 'Enter'
                  ? 'col-span-3 px-[11.5px] h-full'
                  : 'col-span-2'
              }`}
              style={
                key === 'Backspace' || key === 'Enter'
                  ? {}
                  : {
                      aspectRatio: 1 / 1.2,
                    }
              }
            >
              {key === 'Backspace' ? (
                <div className="w-[18px]">
                  <Backspace />
                </div>
              ) : (
                <p className="text-white w-[18px] flex items-center justify-center font-semibold">
                  {key}
                </p>
              )}
            </div>
          ))}
          {idx == 1 && <div className="col-span-1 mr-[11px]" />}
        </div>
      ))}
    </div>
  )
}
