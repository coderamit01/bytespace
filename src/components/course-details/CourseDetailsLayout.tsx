import CourseHeader from "@/src/components/course-details/CourseHeader"
import CourseVideo from "@/src/components/course-details/CourseVideo"
import CourseSidebar from "@/src/components/course-details/CourseSidebar"
import { CourseDetails } from "@/src/lib/course-details"

type CourseDetailsLayoutProps = {
  course: CourseDetails
  children: React.ReactNode
}

const CourseDetailsLayout = ({ course, children }: CourseDetailsLayoutProps) => {
  return (
    <>
      <section className="relative z-10 bg-purple pt-28 pb-10 md:pt-36 lg:pt-43 lg:pb-15.5">
        <div className="grid-bg" />
        <div className="container relative">
          <CourseHeader course={course} />
          <div className="relative mt-10 lg:mt-15 lg:pr-98 xl:pr-112">
            <CourseVideo title={course.headline} />
            <div className="mt-8 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-90 xl:w-103">
              <CourseSidebar course={course} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-12 lg:py-21">
        <div className="container">
          <div className="lg:pr-98 xl:pr-112">{children}</div>
        </div>
      </section>
    </>
  )
}

export default CourseDetailsLayout
