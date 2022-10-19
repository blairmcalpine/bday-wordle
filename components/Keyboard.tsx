import Backspace from '../icons/backspace'

const rows = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
]

export default function Keyboard() {
  return (
    <div className="fixed bottom-0 flex flex-col items-center gap-1 w-[90vw] max-w-[500px] h-fit">
      <div className="grid grid-flow-col gap-1 w-[90vw] max-w-[500px] h-fit">
        {rows[0].map((key) => (
          <div
            key={key}
            className="bg-[#818384] rounded-sm flex items-center justify-center capitalize p-1"
            style={{
              aspectRatio: 1,
            }}
          >
            <p className="text-white w-[18px] flex items-center justify-center font-semibold">
              {key}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-flow-col w-[90vw] max-w-[500px] gap-1 h-fit">
        <div className="col-span-1 ml-[11px]" />
        {rows[1].map((key) => (
          <div
            key={key}
            className="bg-[#818384] rounded-sm flex items-center justify-center capitalize p-1 col-span-2"
            style={{
              aspectRatio: 1,
            }}
          >
            <p className="text-white w-[18px] flex items-center justify-center font-semibold">
              {key}
            </p>
          </div>
        ))}
        <div className="col-span-1 mr-[11px]" />
      </div>
      <div className="grid grid-flow-col grid-cols-[20] gap-1 w-[90vw] max-w-[500px] h-fit">
        {rows[2].map((key) => (
          <div
            key={key}
            className={`bg-[#818384] rounded-sm flex items-center justify-center capitalize p-1 ${
              key === 'Backspace' || key === 'Enter'
                ? 'col-span-3 px-[11.5px] h-full'
                : 'col-span-2'
            }`}
            style={
              key === 'Backspace' || key === 'Enter'
                ? {}
                : {
                    aspectRatio: 1,
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
      </div>
    </div>
  )
}
