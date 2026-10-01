import Image from "next/image"
import CreatorActions from "@/src/components/creator/CreatorActions"
import { Creator } from "@/src/lib/creators"

type CreatorHeroProps = {
  creator: Creator
  products: number
}

const CreatorHero = ({ creator, products }: CreatorHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-purple pt-28 pb-14 md:pt-36 lg:pt-43 lg:pb-35.75">
      <div className="grid-bg" />
      <div className="container relative">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Image
              src={creator.avatar}
              alt={creator.name}
              width={96}
              height={96}
              priority
              className="size-20 shrink-0 rounded-3xl object-cover sm:size-24"
            />
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-poppins text-2xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-50 md:text-3xl xl:text-4xl">
                  {creator.name}
                </h1>
                <span className="rounded-full bg-lime px-6 py-2 font-satoshi text-base font-medium leading-[1.2] text-shuttle-950 backdrop-blur-[20px]">
                  Creator
                </span>
              </div>
              <p className="font-satoshi text-base leading-[1.6] text-shuttle-50 md:text-lg">{creator.tagline}</p>
            </div>
          </div>
          <div className="font-satoshi text-base leading-[1.6] text-shuttle-50 md:text-lg">
            {creator.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <CreatorActions products={products} followers={creator.followers} />
        </div>
      </div>
    </section>
  )
}

export default CreatorHero
