import DetailHeading from "@/src/components/course-details/DetailHeading"
import RatingSummary from "@/src/components/course-details/RatingSummary"
import ReviewList from "@/src/components/course-details/ReviewList"
import { CourseDetails } from "@/src/lib/course-details"

const CourseReviews = ({ course }: { course: CourseDetails }) => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <DetailHeading>What Learners Are Saying</DetailHeading>
      <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">{course.reviewsIntro}</p>
      <RatingSummary average={course.ratingAverage} breakdown={course.ratingBreakdown} />

      <DetailHeading>Individual Reviews:</DetailHeading>
      <ReviewList reviews={course.reviews} />
    </div>
  )
}

export default CourseReviews
