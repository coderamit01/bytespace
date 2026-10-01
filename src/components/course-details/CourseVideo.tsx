import Image from "next/image"
import Thumbnail from "@/public/course-details/video-thumbnail.jpg"
import PlayIcon from "@/public/course-details/play.svg"

type CourseVideoProps = {
  title: string
}

const CourseVideo = ({ title }: CourseVideoProps) => {
  return (
    <div className="relative aspect-720/479 w-full overflow-hidden rounded-3xl bg-[#443131]">
      <Image
        src={Thumbnail}
        alt={`${title} course preview`}
        fill
        priority
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
      <button
        type="button"
        aria-label={`Play ${title} preview`}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-3xl border border-[#4F4F4F] bg-[rgba(61,61,61,0.24)] p-3 backdrop-blur-[20px] transition-transform hover:scale-105 sm:p-4"
      >
        <Image src={PlayIcon} alt="" width={72} height={72} className="size-14 sm:size-18" />
      </button>
    </div>
  )
}

export default CourseVideo
