import { IconType } from "react-icons"

type StatBadgeProps = {
  icon: IconType
  label: string
}

const StatBadge = ({ icon: Icon, label }: StatBadgeProps) => {
  return (
    <span className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 backdrop-blur-[20px] sm:px-6">
      <Icon size={24} className="shrink-0 text-purple" aria-hidden="true" />
      <span className="whitespace-nowrap font-satoshi text-base font-medium leading-[1.2] text-shuttle-950">{label}</span>
    </span>
  )
}

export default StatBadge
