import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { MdCheckCircle } from "react-icons/md"
import SectionTitle from "@/src/components/shared/SectionTitle"
import CourseCard from "@/src/components/home/CourseCard"
import { courses, growthStats } from "@/src/lib/data"
import TheBoy from "@/public/images/boy.png"
import TheGirl from "@/public/images/girl.png"
import SquiggleLime from "@/public/icons/squiggle-lime.png"
import SquiggleLime2 from "@/public/icons/squiggle-lime-2.png"

const benefits: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
]

const students: string[] = [
  "/courses/av1.png",
  "/courses/av2.png",
  "/courses/av3.png",
  "/courses/av4.png",
  "/testimonial/alex.png",
  "/testimonial/james.png",
  "/testimonial/sarah.png",
]

const GrowthSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-20 lg:py-30 [--s:0.55] sm:[--s:0.9] lg:[--s:0.75] xl:[--s:0.9] min-[1440px]:[--s:1]">
      <div aria-hidden="true" className="pointer-events-none">
        <div className="brand-shadow size-175 -top-40 left-[10%]" />
        <div className="purple-shadow size-175 top-[35%] -left-80" />
        <div className="purple-shadow size-150 -top-40 -right-60" />
        <div className="brand-shadow size-168 bottom-0 -left-72" />
        <div className="purple-shadow size-175 -bottom-40 -right-40" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-16 lg:gap-18">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-15.75">
            <div className="flex w-full flex-col items-start gap-10 lg:flex-1 lg:max-w-143.5">
              <SectionTitle
                title="Your Path to Professional Growth Starts Here!"
                description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
                className="items-start gap-10"
                titleClass="text-shuttle-950 tracking-[-0.01em]"
                descClassName="text-shuttle-700 max-w-119.25"
              />
              <div className="flex items-end gap-10 whitespace-nowrap sm:gap-14">
                {growthStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-poppins text-4xl font-medium leading-11 tracking-[-0.01em] text-purple">{stat.value}</span>
                    <span className="text-lg leading-[1.6] text-shuttle-700">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative shrink-0 w-[calc(621px*var(--s))] h-[calc(552px*var(--s))]">
              <div className="absolute left-0 top-0 w-155.25 h-138 origin-top-left [scale:var(--s)]">
                <div className="absolute left-0 top-0 w-93.25">
                  <CourseCard course={courses[0]} />
                </div>
                <Image
                  src={TheBoy}
                  alt="Student learning online with headphones and a laptop"
                  className="absolute left-0 top-3 h-135 w-144.25 max-w-none drop-shadow-[25px_37px_36px_rgba(0,0,0,0.1)]"
                />
                <div className="absolute left-86.25 top-53.25 flex flex-col items-start gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
                  <span className="font-satoshi text-sm font-medium leading-6 text-shuttle-950">Learning Progress</span>
                  <span className="w-50 font-poppins text-5xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950">55%</span>
                  <span className="relative h-2 w-50 rounded-3xl bg-[#F6F6F6]">
                    <span className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-lime" />
                  </span>
                </div>
                <Image src={SquiggleLime} alt="" aria-hidden="true" className="pointer-events-none absolute left-101.5 top-16.75 h-auto w-53.75 max-w-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-10 xl:gap-19.75">
            <div className="relative shrink-0 w-[calc(541px*var(--s))] h-[calc(596px*var(--s))]">
              <div className="absolute left-0 top-0 w-135.25 h-149 origin-top-left [scale:var(--s)]">
                <div className="absolute left-0 top-11 flex flex-col items-start gap-2 rounded-2xl bg-purple p-4 backdrop-blur-[10px]">
                  <div className="flex flex-col items-start text-shuttle-50">
                    <span className="font-satoshi text-base font-medium leading-[1.2]">Total Revenue</span>
                    <span className="font-satoshi text-[10px] leading-[1.2]">July 1-28</span>
                  </div>
                  <div className="flex w-50 items-center justify-between">
                    <span className="font-poppins text-2xl font-semibold leading-8 tracking-[-0.01em] text-shuttle-50">$120.29</span>
                    <span className="rounded-3xl bg-[#CBFC01] px-2 py-0.5 font-satoshi text-[10px] font-medium leading-5 text-shuttle-950">+12$</span>
                  </div>
                  <span className="relative h-2 w-50 rounded-3xl bg-white">
                    <span className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-lime" />
                  </span>
                </div>
                <div className="absolute left-0 top-48.5 flex w-33.5 flex-col items-start gap-2 rounded-2xl bg-purple p-4 backdrop-blur-[10px]">
                  <div className="flex flex-col items-start text-shuttle-50 whitespace-nowrap">
                    <span className="font-satoshi text-base font-medium leading-[1.2]">Year to Date</span>
                    <span className="font-satoshi text-[10px] leading-[1.2]">2023</span>
                  </div>
                  <span className="font-poppins text-2xl font-semibold leading-8 tracking-[-0.01em] text-shuttle-50 whitespace-nowrap">$1,200.38</span>
                  <span className="rounded-3xl bg-[#CBFC01] px-2 py-0.5 font-satoshi text-[10px] font-medium leading-5 text-shuttle-950">+12$</span>
                </div>
                <div className="absolute left-7 top-0 h-149 w-108.75 overflow-hidden drop-shadow-[25px_37px_36px_rgba(0,0,0,0.1)]">
                  <Image
                    src={TheGirl}
                    alt="Course creator with headphones holding a tablet"
                    className="absolute -left-31 top-0 size-170.75 max-w-none"
                  />
                </div>
                <div className="absolute left-70.75 top-103.25 flex w-64.5 flex-col justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
                  <div className="flex flex-col items-start">
                    <span className="font-satoshi text-base font-medium leading-6 text-shuttle-950">Happy Students</span>
                    <span className="flex items-center gap-0.5 font-satoshi text-[10px] leading-[1.5] text-shuttle-400">
                      <span className="font-bold text-shuttle-950">4.5</span> (240)
                      <FaStar size={13} className="text-lime" />
                    </span>
                  </div>
                  <div className="flex items-center">
                    {
                      students.map((src, id) => (
                        <Image key={id} src={src} alt="" width={43} height={43} className="-mr-4 size-10.75 rounded-full object-cover" />
                      ))
                    }
                    <span className="flex size-10.75 items-center justify-center rounded-full bg-lime font-satoshi text-xs font-bold leading-[1.5] text-shuttle-950">2K+</span>
                  </div>
                </div>
                <Image src={SquiggleLime2} alt="" aria-hidden="true" className="pointer-events-none absolute left-76.25 top-28.5 h-auto w-53.75 max-w-none" />
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-10 lg:flex-1 lg:max-w-145">
              <SectionTitle
                title="Create & Manage Courses Easily."
                className="items-start"
                titleClass="text-shuttle-950 tracking-[-0.01em] max-w-97.75"
              />
              <p className="font-satoshi text-lg leading-7 text-shuttle-700">
                <strong className="font-bold text-shuttle-950">ByteSpace</strong>{" "}
                supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="flex flex-col gap-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-end gap-2">
                    <MdCheckCircle size={24} className="shrink-0 text-purple" aria-hidden="true" />
                    <span className="font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthSection
