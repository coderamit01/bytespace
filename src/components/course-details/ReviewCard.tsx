import Image from "next/image"
import StarRating from "@/src/components/course-details/StarRating"
import { CourseReview } from "@/src/lib/course-details"

const ReviewCard = ({ review }: { review: CourseReview }) => {
  return (
    <article className="flex w-full flex-col items-start gap-6 rounded-3xl border border-[#CED0D3] p-6 sm:p-10">
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-start gap-3">
            <Image src={review.avatar} alt={review.name} width={52} height={52} className="size-13 rounded-full object-cover" />
            <div className="flex flex-col items-start">
              <span className="font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950">{review.name}</span>
              <span className="font-satoshi text-base leading-[1.6] text-shuttle-700">{review.role}</span>
            </div>
          </div>
          <StarRating value={review.rating} />
        </div>
        <span className="shrink-0 font-satoshi text-sm leading-[1.6] text-shuttle-700 sm:text-base">{review.postedAt}</span>
      </div>
      <p className="font-satoshi text-base leading-[1.6] text-shuttle-700">{review.comment}</p>
    </article>
  )
}

export default ReviewCard
