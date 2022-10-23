import Image from 'next/image'

export default function Fourth() {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-10 md:gap-0 items-center justify-center">
      <Image
        priority={true}
        src="/IMG_0032.jpg"
        alt=""
        className="z-[-1]"
        layout="fill"
      />
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
        <h1 className="text-white font-bold text-3xl max-w-[80vw] text-center">
          {'Happy Birthday Booooo :))'}
        </h1>

        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
      </div>
      <p className="text-white font-semibold text-xl max-w-[90vw] text-center">
        {
          "I hope you have a wonderful day and I can't wait to see you this weekend :))) Finally get to see whats inside the box :] Have a great birthday cutie patootie I love you so so so much :)"
        }
      </p>
    </div>
  )
}
