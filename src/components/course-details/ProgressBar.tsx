import { cn } from "@/src/lib/utils"

type ProgressBarProps = {
  value: number
  label?: string
  className?: string
}

const ProgressBar = ({ value, label, className }: ProgressBarProps) => {
  const width = Math.min(Math.max(value, 0), 100)
  return (
    <span
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(width)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative block h-2 w-full overflow-hidden rounded-full bg-shuttle-100", className)}
    >
      <span className="absolute inset-y-0 left-0 rounded-full bg-lime" style={{ width: `${width}%` }} />
    </span>
  )
}

export default ProgressBar
