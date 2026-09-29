import { cn } from "@/src/lib/utils";




const Pill = ({ topic, active, activeItem }: { topic: string, active: boolean, activeItem: (topic: string) => void }) => {

  return (
    <button type="button" aria-pressed={active} onClick={() => activeItem(topic)} className={cn(
      "inline-flex shrink-0 items-center justify-center rounded-[24px] px-4 py-2 typo-label-m whitespace-nowrap transition-colors",
      active ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100")}>{topic}</button>
  )
}

export default Pill