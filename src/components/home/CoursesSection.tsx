import CourseList from "@/src/components/home/CourseList";
import TopicTabs from "@/src/components/home/TopicTabs";
import SectionTitle from "@/src/components/shared/SectionTitle";
import { courses } from "@/src/lib/data";

const CoursesSection = () => {
  return (
    <section className="bg-white py-12 md:py-18">
      <div className="container">
        <SectionTitle title="Discover Your Passion, Build Your Skills" description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="items-center gap-4 w-full md:w-3/4 mx-auto"
          titleClass="text-center md:w-2/3"
          descClassName="text-center"
        />
        <div className="mt-10.5">
          <TopicTabs />
        </div>
        <CourseList courses={courses} />
      </div>
    </section>
  )
}

export default CoursesSection;