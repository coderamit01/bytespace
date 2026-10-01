import Image from "next/image"
import Link from "next/link"
import { MdArrowForward } from "react-icons/md"
import CreatorStat from "@/src/components/creator/CreatorStat"
import { Creator } from "@/src/lib/creators"

type CreatorCardProps = {
  creator: Creator
  coursesCount: number
}

const CreatorCard = ({ creator, coursesCount }: CreatorCardProps) => {
  return (
    <article className="group relative flex h-full flex-col gap-6 rounded-3xl border border-[#CED0D3] bg-white p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-start gap-4">
        <Image
          src={creator.avatar}
          alt={creator.name}
          width={72}
          height={72}
          className="size-18 shrink-0 rounded-3xl object-cover"
        />
        <div className="flex min-w-0 flex-col items-start gap-1">
          <span className="rounded-full bg-lime px-3 py-1 font-satoshi text-xs font-medium leading-[1.2] text-shuttle-950">Creator</span>
          <h3 className="w-full truncate font-poppins text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950">
            <Link href={`/creators/${creator.id}`} className="after:absolute after:inset-0 after:rounded-3xl after:content-['']">
              {creator.name}
            </Link>
          </h3>
          <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">{creator.tagline}</p>
        </div>
      </div>

      <p className="line-clamp-3 font-satoshi text-base leading-[1.6] text-shuttle-700">{creator.bio[0]}</p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <CreatorStat variant="card" value={coursesCount} label={coursesCount === 1 ? "Course" : "Courses"} />
          <CreatorStat variant="card" value={creator.followers} label="Followers" />
        </div>
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-full border border-[#CED0D3] text-shuttle-950 transition-colors group-hover:border-lime group-hover:bg-lime"
        >
          <MdArrowForward size={20} />
        </span>
      </div>
    </article>
  )
}

export default CreatorCard
