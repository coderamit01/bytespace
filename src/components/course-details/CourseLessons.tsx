import DetailHeading from "@/src/components/course-details/DetailHeading"
import ModuleItem from "@/src/components/course-details/ModuleItem"
import ProgressBar from "@/src/components/course-details/ProgressBar"
import { CourseDetails } from "@/src/lib/course-details"

const bodyText = "font-satoshi text-base leading-[1.6] text-shuttle-700"

const CourseLessons = ({ course }: { course: CourseDetails }) => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <DetailHeading>Explore the Modules</DetailHeading>
      <p className={bodyText}>{course.modulesIntro}</p>

      <DetailHeading>Lesson List</DetailHeading>
      <ul className="flex flex-col gap-6">
        {course.modules.map((module) => (
          <ModuleItem key={module.title} module={module} />
        ))}
      </ul>

      <DetailHeading>Lesson Content</DetailHeading>
      <p className={bodyText}>{course.lessonContent}</p>

      <DetailHeading>Lesson Progress Tracking</DetailHeading>
      <p className={bodyText}>{course.progressIntro}</p>

      <div className="flex w-full flex-col items-start gap-2 rounded-2xl border border-[#CED0D3] bg-white p-4 backdrop-blur-[10px]">
        <span className="font-satoshi text-sm font-medium leading-[1.2] text-shuttle-950">Learning Progress</span>
        <span className="font-poppins text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950">{course.progress}%</span>
        <ProgressBar value={course.progress} label="Learning progress" />
      </div>
    </div>
  )
}

export default CourseLessons
