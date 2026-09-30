import Image from "next/image"
import { MdOutlineSearch } from "react-icons/md"
import { FaStar } from "react-icons/fa"
import Boy from "@/public/images/boy.png"
import SquiggleLime from "@/public/icons/squiggle-lime.png"
import SquiggleLime2 from "@/public/icons/squiggle-lime-2.png"
import SquiggleWhite from "@/public/icons/squiggle-white.png"
import RingWhite from "@/public/icons/ring-white.png"
import CylinderLime from "@/public/icons/cylinder-lime.png"
import PyramidWhite from "@/public/icons/pyramid-white.png"

const students: string[] = [
  "/courses/av1.png",
  "/courses/av2.png",
  "/courses/av3.png",
  "/courses/av4.png",
  "/testimonial/alex.png",
  "/testimonial/james.png",
  "/testimonial/sarah.png",
]

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-purple [--s:0.5] [--c:0.75] md:[--s:0.6] lg:[--s:0.72] lg:[--c:0.8] xl:[--s:0.85] xl:[--c:0.9] min-[1440px]:[--s:1] min-[1440px]:[--c:1]">
      <div className="grid-bg" />

      <div aria-hidden="true" className="absolute inset-x-0 z-0 top-0 pointer-events-none select-none hidden lg:block">
        <Image src={SquiggleLime2} alt="" className="absolute h-auto max-w-none w-[calc(385px*var(--s))] left-[calc(-118px*var(--s))] top-[calc(221px*var(--s))]" />
        <Image src={CylinderLime} alt="" className="absolute h-auto max-w-none w-[calc(370px*var(--s))] right-[calc(-161px*var(--s))] top-[calc(221px*var(--s))]" />
      </div>

      <div className="container relative z-20 pt-32 md:pt-40 lg:pt-42.25">
        <div className="flex flex-col items-center gap-10 lg:gap-15">
          <div className="flex flex-col items-center gap-4 md:gap-8 text-center">
            <h1 className="font-poppins text-4xl sm:text-5xl xl:text-6xl min-[1440px]:text-[72px] font-semibold leading-[1.2] tracking-[-0.01em] text-white max-w-233.75">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="font-satoshi text-base md:text-lg leading-[1.6] text-shuttle-100 max-w-200">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>
          <form action="/courses" role="search" className="flex w-full flex-col sm:flex-row sm:w-auto items-stretch sm:items-start gap-3 sm:gap-5">
            <label className="flex h-13 w-full sm:w-115.25 items-center gap-2 rounded-4xl bg-white px-6 py-3">
              <MdOutlineSearch size={24} className="shrink-0 text-shuttle-400" />
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent font-satoshi text-lg leading-[1.6] text-shuttle-950 placeholder:text-shuttle-400 outline-none"
              />
            </label>
            <button type="submit" className="w-2/4 md:w-auto mx-auto flex items-center justify-center rounded-4xl bg-lime px-6 py-3 font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950 h-13">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full h-[calc(512px*var(--s))]">
        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(70px*var(--s))] w-[calc(1149px*var(--s))] aspect-square rounded-full bg-lime" />

        <Image
          src={Boy}
          alt="Student learning online with headphones and a laptop"
          priority
          className="absolute left-1/2 -translate-x-1/2 top-0 h-auto max-w-none w-[calc(578px*var(--s))] drop-shadow-[25px_37px_36px_rgba(0,0,0,0.1)]"
        />

        <div className="absolute left-1/2 ml-[calc(122px*var(--s))] top-[calc(139px*var(--s))] origin-top-left scale-(--c) md:flex flex-col items-start gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
          <span className="font-satoshi inline-flex text-sm font-medium leading-[1.2] text-shuttle-950">Learning Progress</span>
          <span className="w-50 font-poppins text-2xl md:text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950 py-1 md:py-0">55%</span>
          <span className="relative h-2 w-full max-w-50 block rounded-3xl bg-[#F6F6F6]">
            <span className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-lime" />
          </span>
        </div>

        <div className="absolute left-1/2 ml-[calc(-392px*var(--s))] top-[calc(325px*var(--s))] origin-top-left scale-(--c) md:flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
          <div className="flex flex-col items-start">
            <span className="font-satoshi text-base font-medium leading-[1.2] text-shuttle-950">Happy Students</span>
            <span className="flex items-center gap-0.5 font-satoshi text-xs leading-[1.6] text-shuttle-400">
              <span className="text-shuttle-950">4.5</span> (240)
              <FaStar size={14} className="text-lime" />
            </span>
          </div>
          <div className="flex items-center">
            {
              students.map((src, id) => (
                <Image key={id} src={src} alt="" width={43} height={43} className="-mr-4 size-10.75 rounded-full object-cover" />
              ))
            }
            <span className="flex size-10.75 items-center justify-center rounded-full bg-lime font-satoshi text-xs font-bold leading-normal text-shuttle-950">2K+</span>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none select-none">
          <Image src={SquiggleWhite} alt="" className="absolute h-auto max-w-none w-[calc(175px*var(--s))] 2xl:left-80 xl:left-[calc(200px*var(--s))] top-[calc(-35px*var(--s))] md:left-2 lg:left-12 hidden md:block" />

          <Image src={PyramidWhite} alt="" className="absolute h-auto max-w-none w-[calc(188px*var(--s))] 2xl:right-50 top-[calc(-48px*var(--s))] md:right-2 lg:right-12 xl:right-30  hidden md:block" />
          
          <Image src={RingWhite} alt="" className="absolute h-auto max-w-none w-[calc(342px*var(--s))] 2xl:left-65 xl:left-32.5 lg:left-5 md:-left-4 2xl:top-30 xl:top-25 lg:top-20 md:top-15 hidden md:block" />
          <Image src={SquiggleLime} alt="" className="absolute h-auto max-w-none w-[calc(330px*var(--s))] lg:right-[calc(-17px*var(--s))] md:-right-8 xl:right-24 2xl:right-60 top-[calc(160px*var(--s))] grayscale brightness-110 hidden md:block" />
        </div>

        <div className="absolute left-1/2 -ml-50 md:ml-[calc(-350px*var(--s))] top-5 md:top-[calc(127px*var(--s))] origin-top-left scale-(--c) md:flex flex-col items-start rounded-2xl bg-white p-4 backdrop-blur-[10px]">
          <span className="font-satoshi text-base font-medium leading-[1.2] text-shuttle-950 whitespace-nowrap">UI/UX Design</span>
          <span className="flex items-center gap-2 font-satoshi text-xs leading-[1.6] text-shuttle-400 whitespace-nowrap">
            200 Courses
            <span className="text-[10px] leading-normal">•</span>
            1000+ Students
          </span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
