import Image from "next/image"
import Link from "next/link"
import { IconType } from "react-icons"
import { MdConnectWithoutContact, MdOutlineBadge, MdOutlineSource, MdOutlineVideocam } from "react-icons/md"
import DetailHeading from "@/src/components/course-details/DetailHeading"
import { CourseDetails } from "@/src/lib/course-details"

const includeIcons: IconType[] = [MdOutlineSource, MdOutlineVideocam, MdOutlineBadge, MdConnectWithoutContact]

type CourseSidebarProps = {
  course: CourseDetails
}

const CourseSidebar = ({ course }: CourseSidebarProps) => {
  const remaining = course.lessonsTotal - course.lessonPreviews.length

  return (
    <aside className="flex w-full flex-col items-start gap-6 rounded-3xl border border-[#CED0D3] bg-white p-6 sm:p-10">
      <div className="flex w-full flex-col items-start gap-6">
        <DetailHeading>
          {course.lessonsTotal} Lessons ({course.totalHours} hours)
        </DetailHeading>
        <ol className="flex w-full flex-col gap-3 font-satoshi text-base">
          {course.lessonPreviews.map((lesson, index) => (
            <li key={lesson.title} className="flex items-start justify-between gap-4">
              <span className="flex items-start gap-2 font-medium leading-[1.2] text-shuttle-950">
                <span className="w-6 shrink-0">{String(index + 1).padStart(2, "0")}</span>
                <span className="max-w-50">{lesson.title}</span>
              </span>
              <span className="shrink-0 whitespace-nowrap leading-[1.6] text-purple">{lesson.duration}</span>
            </li>
          ))}
          <li className="leading-[1.6] text-shuttle-700">{remaining} more videos</li>
        </ol>
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">{course.ctaText}</p>
        <p className="flex items-end">
          <span className="font-poppins text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-purple">${course.price}</span>
          <span className="font-satoshi text-base leading-[1.6] text-shuttle-700">/{course.pricingType}</span>
        </p>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center rounded-full bg-lime px-6 py-3 font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950 transition-opacity hover:opacity-90"
        >
          Enroll Now
        </button>
      </div>

      <DetailHeading as="h3">This course include</DetailHeading>
      <ul className="flex flex-col gap-3">
        {course.includes.map((item, index) => {
          const Icon = includeIcons[index % includeIcons.length]
          return (
            <li key={item} className="flex items-start gap-2 font-satoshi text-base leading-[1.6] text-shuttle-700">
              <Icon size={24} className="shrink-0 text-purple" aria-hidden="true" />
              {item}
            </li>
          )
        })}
      </ul>

      <hr className="w-full border-[#D1D1D1]" />

      <div className="flex flex-col items-start gap-6">
        <div className="flex items-start gap-3">
          <Image src={course.creator.avatar} alt={course.creator.name} width={52} height={52} className="size-13 rounded-full object-cover" />
          <div className="flex flex-col items-start">
            <span className="font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950">{course.creator.name}</span>
            <span className="font-satoshi text-base leading-[1.6] text-shuttle-700">{course.creator.role}</span>
          </div>
        </div>
        <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">{course.creator.bio}</p>
        <Link
          href={`/creators/${course.creatorId}`}
          className="flex items-center justify-center rounded-full border border-[#CED0D3] px-4 py-2 font-satoshi text-base font-medium leading-[1.2] text-shuttle-700 transition-colors hover:border-shuttle-700"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  )
}

export default CourseSidebar
