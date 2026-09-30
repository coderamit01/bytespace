import Image from "next/image"
import { FaStar } from "react-icons/fa"
import CourseCard from "@/src/components/home/CourseCard"
import { courses } from "@/src/lib/data"
import RingLime from "@/public/icons/ring-lime.png"
import PyramidLime from "@/public/icons/pyramid-lime.png"
import SquiggleWhite from "@/public/icons/squiggle-white.png"

const students: string[] = [
  "/courses/av1.png",
  "/courses/av2.png",
  "/courses/av3.png",
  "/courses/av4.png",
  "/testimonial/alex.png",
  "/testimonial/james.png",
  "/testimonial/sarah.png",
]

const AuthShowcase = () => {
  return (
    <div aria-hidden="true" className="relative -ml-[calc(25px*var(--s))] w-[calc(548px*var(--s))] h-[calc(585px*var(--s))] [--s:0.65] xl:[--s:0.85] min-[1440px]:[--s:1]">
      <div className="absolute left-0 top-0 h-146.25 w-137 origin-top-left [scale:var(--s)]">
        <div className="absolute left-6.25 top-22.25 w-93.25">
          <CourseCard course={courses[1]} />
        </div>
        <div className="absolute left-34 top-0 w-93.25">
          <CourseCard course={courses[2]} />
        </div>
        <div className="absolute left-62.75 top-108.75 flex w-64.5 flex-col justify-center gap-2 rounded-2xl bg-lime p-4 backdrop-blur-[10px]">
          <div className="flex flex-col items-start">
            <span className="font-satoshi text-base font-medium leading-6 text-shuttle-950">Happy Students</span>
            <span className="flex items-center gap-0.5 font-satoshi text-[10px] leading-[1.5] text-shuttle-400">
              <span className="font-bold text-shuttle-950">4.5</span> (240)
              <FaStar size={13} className="text-purple" />
            </span>
          </div>
          <div className="flex items-center">
            {students.map((src, id) => (
              <Image key={id} src={src} alt="" width={43} height={43} className="-mr-4 size-10.75 rounded-full object-cover" />
            ))}
            <span className="flex size-10.75 items-center justify-center rounded-full bg-shuttle-950 font-satoshi text-xs font-bold leading-[1.5] text-shuttle-50">2K+</span>
          </div>
        </div>
        <Image src={SquiggleWhite} alt="" className="pointer-events-none absolute left-93.25 top-80.25 h-auto w-43.75 max-w-none" />
        <Image src={RingLime} alt="" className="pointer-events-none absolute left-13.5 top-3.75 h-auto w-36.5 max-w-none" />
        <Image src={PyramidLime} alt="" className="pointer-events-none absolute left-0 top-99.25 h-auto w-47 max-w-none" />
      </div>
    </div>
  )
}

export default AuthShowcase
