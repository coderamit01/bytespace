import CourseCard from "@/src/components/home/CourseCard"
import { CourseProps } from "@/src/types"

const CourseGrid = ({ courses }: { courses: CourseProps[] }) => {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-3xl bg-shuttle-50 px-6 py-16 text-center">
        <p className="font-poppins text-xl font-semibold leading-7 text-shuttle-950">No courses found</p>
        <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">Try a different keyword or browse all courses.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseGrid
