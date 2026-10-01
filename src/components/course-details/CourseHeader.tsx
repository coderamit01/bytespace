import Link from "next/link"
import { MdOutlinePeopleAlt, MdSignalCellularAlt, MdStar } from "react-icons/md"
import StatBadge from "@/src/components/course-details/StatBadge"
import ShareButton from "@/src/components/course-details/ShareButton"
import { CourseDetails } from "@/src/lib/course-details"

type CourseHeaderProps = {
  course: CourseDetails
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  const stats = [
    { icon: MdSignalCellularAlt, label: course.level },
    { icon: MdStar, label: `${course.rating} (${course.reviewsCount} reviews)` },
    { icon: MdOutlinePeopleAlt, label: `${course.studentsCount} Students` },
  ]

  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:gap-10">
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-2 font-poppins font-semibold text-shuttle-50">
          <h1 className="text-2xl leading-[1.2] tracking-[-0.01em] md:text-3xl xl:text-4xl">{course.headline}</h1>
          <p className="text-base leading-[1.2] tracking-[-0.01em] md:text-xl">{course.subtitle}</p>
        </div>
        <p className="font-satoshi text-lg font-medium leading-[1.2] text-[#F1F4FE]">
          by{" "}
          <Link href={`/creators/${course.creatorId}`} className="text-lime hover:underline">
            {course.author}
          </Link>
        </p>
        <div className="flex flex-wrap items-start gap-3 sm:gap-4">
          {stats.map((stat) => (
            <StatBadge key={stat.label} icon={stat.icon} label={stat.label} />
          ))}
        </div>
      </div>
      <ShareButton title={course.headline} />
    </div>
  )
}

export default CourseHeader
