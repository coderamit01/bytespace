import ProgressBar from "@/src/components/course-details/ProgressBar"
import StarRating from "@/src/components/course-details/StarRating"
import { RatingBreakdown } from "@/src/lib/course-details"

type RatingSummaryProps = {
  average: number
  breakdown: RatingBreakdown[]
}

const RatingSummary = ({ average, breakdown }: RatingSummaryProps) => {
  return (
    <div className="flex w-full flex-col items-stretch gap-6 rounded-2xl border border-[#CED0D3] bg-white p-6 backdrop-blur-[10px] sm:flex-row sm:items-center sm:p-10">
      <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-lime p-6 text-shuttle-950 backdrop-blur-[20px] sm:p-10">
        <span className="font-satoshi text-sm font-medium leading-[1.2]">Ratings</span>
        <span className="font-poppins text-4xl font-semibold leading-[1.2] tracking-[-0.01em]">{average}</span>
      </div>
      <ul className="flex min-w-0 flex-1 flex-col gap-1">
        {breakdown.map((row) => (
          <li key={row.stars} className="flex items-center gap-3 sm:gap-4">
            <ProgressBar value={row.percent} label={`${row.stars} star reviews`} className="min-w-0 flex-1" />
            <StarRating value={row.stars} className="shrink-0 [&_svg]:size-4 sm:[&_svg]:size-6" />
            <span className="w-10 shrink-0 text-right font-satoshi text-base leading-[1.6] text-shuttle-700">{row.count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RatingSummary
