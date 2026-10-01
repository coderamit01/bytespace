import { IconType } from "react-icons"
import { cn } from "@/src/lib/utils"

type FilterButtonProps = React.ComponentProps<"button"> & {
  icon: IconType
  label: string
}

const FilterButton = ({ icon: Icon, label, className, ...props }: FilterButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-12 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#CED0D3] bg-white px-4 py-3 font-satoshi text-base font-medium leading-[1.2] text-shuttle-700 transition-colors hover:border-shuttle-700",
        className
      )}
      {...props}
    >
      <Icon size={24} className="shrink-0 text-shuttle-950" aria-hidden="true" />
      {label}
    </button>
  )
}

export default FilterButton
