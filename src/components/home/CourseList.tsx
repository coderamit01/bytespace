import CourseCard from "@/src/components/home/CourseCard"
import { CourseProps } from "@/src/types"


const CourseList = ({ courses }: { courses: CourseProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-8 pt-8 md:pt-15">
      {
        courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))
      }
    </div>
  )
}

export default CourseList