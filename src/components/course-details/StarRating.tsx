import { MdStar } from "react-icons/md"
import { cn } from "@/src/lib/utils"

type StarRatingProps = {
  value: number
  max?: number
  size?: number
  className?: string
}

const StarRating = ({ value, max = 5, size = 24, className }: StarRatingProps) => {
  return (
    <span role="img" aria-label={`${value} out of ${max} stars`} className={cn("flex items-start gap-1", className)}>
      {Array.from({ length: max }, (_, index) => (
        <MdStar
          key={index}
          size={size}
          aria-hidden="true"
          className={index < value ? "text-shuttle-700" : "text-[#CED0D3]"}
        />
      ))}
    </span>
  )
}

export default StarRating
