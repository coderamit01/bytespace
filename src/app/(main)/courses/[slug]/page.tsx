import type { Metadata } from "next"
import { notFound } from "next/navigation"
import CourseDetailsLayout from "@/src/components/course-details/CourseDetailsLayout"
import CourseAbout from "@/src/components/course-details/CourseAbout"
import CourseLessons from "@/src/components/course-details/CourseLessons"
import CourseReviews from "@/src/components/course-details/CourseReviews"
import CourseContentTabs from "@/src/components/course-details/CourseContentTabs"
import { getCourseDetails, getCourseSlugs } from "@/src/lib/course-details"

type CoursePageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => getCourseSlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({ params }: CoursePageProps): Promise<Metadata> => {
  const { slug } = await params
  const course = getCourseDetails(slug)
  if (!course) return { title: "Course not found | ByteSpace" }

  return {
    title: `${course.headline} | ByteSpace`,
    description: course.subtitle,
  }
}

const CourseDetailsPage = async ({ params }: CoursePageProps) => {
  const { slug } = await params
  const course = getCourseDetails(slug)
  if (!course) notFound()

  const tabs = [
    { id: "about", label: "About", content: <CourseAbout course={course} /> },
    { id: "lessons", label: "Lessons", content: <CourseLessons course={course} /> },
    { id: "reviews", label: "Reviews", content: <CourseReviews course={course} /> },
  ]

  return (
    <CourseDetailsLayout course={course}>
      <CourseContentTabs tabs={tabs} />
    </CourseDetailsLayout>
  )
}

export default CourseDetailsPage
