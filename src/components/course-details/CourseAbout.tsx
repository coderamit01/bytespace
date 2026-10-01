import Image from "next/image"
import { MdCheckCircle } from "react-icons/md"
import DetailHeading from "@/src/components/course-details/DetailHeading"
import { CourseDetails } from "@/src/lib/course-details"

type CourseAboutProps = {
  course: CourseDetails
}

const CourseAbout = ({ course }: CourseAboutProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <DetailHeading>Description</DetailHeading>
      <div className="flex flex-col gap-[1.6em] font-satoshi text-base leading-[1.6] text-shuttle-700">
        {course.description.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <DetailHeading>Sneak Peak</DetailHeading>
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 xl:gap-[19.33px]">
        {course.sneakPeek.map((src, index) => (
          <div key={src} className="relative aspect-167/125 overflow-hidden rounded-2xl bg-[#D9D9D9]">
            <Image
              src={src}
              alt={`${course.headline} preview ${index + 1}`}
              fill
              sizes="(min-width: 640px) 167px, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <DetailHeading>Key Points</DetailHeading>
      <ul className="flex flex-col gap-3">
        {course.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-2 font-satoshi text-base leading-[1.6] text-shuttle-700">
            <MdCheckCircle size={24} className="shrink-0 text-purple" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseAbout
