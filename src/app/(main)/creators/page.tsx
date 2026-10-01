import type { Metadata } from "next"
import PageHero from "@/src/components/shared/PageHero"
import CreatorGrid from "@/src/components/creator/CreatorGrid"
import CTASection from "@/src/components/home/CTASection"
import { getCreators } from "@/src/lib/creators"

export const metadata: Metadata = {
  title: "Creators | ByteSpace",
  description: "Meet the creators sharing their expertise on ByteSpace.",
}

const CreatorsPage = () => {
  const creators = getCreators()

  return (
    <>
      <PageHero
        title="Meet Our Creators"
        description="Learn from passionate designers, developers, and storytellers who share their craft through hands-on courses."
      />
      <section className="bg-white pt-10 pb-14 md:pt-18 md:pb-18">
        <div className="container">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <h2 className="font-poppins text-2xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950 md:text-[28px]">
                All Creators
              </h2>
              <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">
                {creators.length} {creators.length === 1 ? "creator" : "creators"}
              </p>
            </div>
            <CreatorGrid creators={creators} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

export default CreatorsPage
