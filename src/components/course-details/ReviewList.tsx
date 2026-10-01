"use client"

import { useState } from "react"
import { MdStar } from "react-icons/md"
import ReviewCard from "@/src/components/course-details/ReviewCard"
import { CourseReview } from "@/src/lib/course-details"
import { cn } from "@/src/lib/utils"

const ratingFilters = [5, 4, 3, 2, 1]

const filterClass = (active: boolean) =>
  cn(
    "flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full px-4 py-3 font-satoshi text-base font-medium leading-[1.2] transition-colors",
    active ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
  )

const ReviewList = ({ reviews }: { reviews: CourseReview[] }) => {
  const [rating, setRating] = useState<number | null>(null)
  const visible = rating === null ? reviews : reviews.filter((review) => review.rating === rating)

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <div className="flex w-full flex-wrap items-start gap-3 sm:gap-4">
        <button type="button" aria-pressed={rating === null} onClick={() => setRating(null)} className={filterClass(rating === null)}>
          All rating
        </button>
        {ratingFilters.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={rating === value}
            aria-label={`${value} star reviews`}
            onClick={() => setRating(value)}
            className={filterClass(rating === value)}
          >
            <MdStar size={24} aria-hidden="true" />
            {value}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        visible.map((review) => <ReviewCard key={review.id} review={review} />)
      ) : (
        <p className="w-full rounded-3xl bg-shuttle-50 px-6 py-10 text-center font-satoshi text-base leading-[1.6] text-shuttle-700">
          No {rating}-star reviews yet.
        </p>
      )}
    </div>
  )
}

export default ReviewList
