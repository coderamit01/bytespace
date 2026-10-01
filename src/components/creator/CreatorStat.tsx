import { cn } from "@/src/lib/utils"

type CreatorStatProps = {
  value: number
  label: string
  variant?: "hero" | "card"
}

const CreatorStat = ({ value, label, variant = "hero" }: CreatorStatProps) => {
  return (
    <span
      className={cn(
        "flex items-center justify-center gap-2 rounded-full font-satoshi font-medium leading-[1.2]",
        variant === "hero" ? "bg-white px-6 py-3 text-lg backdrop-blur-[20px]" : "bg-shuttle-50 px-4 py-2 text-base"
      )}
    >
      <span className="text-purple">{value}</span>
      <span className="text-shuttle-950">{label}</span>
    </span>
  )
}

export default CreatorStat
