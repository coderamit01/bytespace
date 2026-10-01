import CourseCard from "@/src/components/home/CourseCard"
import EmptyState from "@/src/components/shared/EmptyState"
import { CourseProps } from "@/src/types"

type CourseGridProps = {
  courses: CourseProps[]
  emptyTitle?: string
  emptyMessage?: string
}

const CourseGrid = ({
  courses,
  emptyTitle = "No courses found",
  emptyMessage = "Try a different keyword or browse all courses.",
}: CourseGridProps) => {
  if (courses.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />
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
