import Image from "next/image"
import ButtonBrand from "@/src/components/shared/ButtonBrand"
import SectionTitle from "@/src/components/shared/SectionTitle"
import SquiggleLime from "@/public/icons/squiggle-lime.png"
import SquiggleLime2 from "@/public/icons/squiggle-lime-2.png"
import SquiggleWhite from "@/public/icons/squiggle-white.png"
import ConeWhite from "@/public/icons/cone-white.png"
import RingLime from "@/public/icons/ring-lime.png"
import PyramidLime from "@/public/icons/pyramid-lime.png"
import CylinderWhite from "@/public/icons/cylinder-white.png"

const CTASection = () => {
  return (
    <section className="relative py-15 lg:py-20 bg-purple overflow-hidden">
      <div className="grid-bg" />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none [--s:0.35] md:[--s:0.6] lg:[--s:0.72] xl:[--s:0.85] min-[1440px]:[--s:1]">

        <Image src={SquiggleLime2} alt="" className="absolute h-auto max-w-none w-[calc(385px*var(--s))] left-[calc(-118px*var(--s))] top-[calc(-162px*var(--s))]" />
        <Image src={SquiggleWhite} alt="" className="absolute h-auto max-w-none w-[calc(175px*var(--s))] left-[calc(178px*var(--s))] top-[calc(5px*var(--s))] hidden lg:block" />
        <Image src={ConeWhite} alt="" className="absolute h-auto max-w-none w-[calc(188px*var(--s))] left-[calc(-48px*var(--s))] bottom-[calc(75px*var(--s))] hidden lg:block" />
        <Image src={RingLime} alt="" className="absolute h-auto max-w-none w-[calc(342px*var(--s))] left-[calc(20px*var(--s))] bottom-[calc(-95px*var(--s))]" />
     
        <Image src={PyramidLime} alt="" className="absolute h-auto max-w-none w-[calc(188px*var(--s))] right-[calc(172px*var(--s))] top-0 hidden lg:block" />
        <Image src={CylinderWhite} alt="" className="absolute h-auto max-w-none w-[calc(370px*var(--s))] right-[calc(-156px*var(--s))] top-[calc(6px*var(--s))] hidden lg:block" />
        <Image src={SquiggleLime} alt="" className="absolute h-auto max-w-none w-[calc(330px*var(--s))] right-0 bottom-[calc(-131px*var(--s))]" />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-6 lg:gap-10">
          <SectionTitle title="Unlock Your Potential as a Creator with ByteSpace"
            description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
            className="items-center gap-4 w-full lg:w-3/4 xl:w-4/5 mx-auto"
            titleClass="text-center text-[#F5F5F6] lg:w-2/3"
            descClassName="text-center text-[#F5F5F6]"
          />
          <ButtonBrand url="/" text="Join as Creator" />
        </div>
      </div>
    </section>
  )
}

export default CTASection
