import { cn } from "@/src/lib/utils"
import { SectionTitleProps } from "@/src/types"

const SectionTitle = ({
  title,
  description,
  className,
  titleClass,
  descClassName
}:SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col",className)}>
      <h2 className={cn("font-poppins text-3xl md:text-5xl font-semibold leading-10 md:leading-13",titleClass)}>{title}</h2>
      <p className={cn("text-lg font-satoshi text-shuttle-400 leading-7",descClassName)}>{description}</p>
    </div>
  )
}

export default SectionTitle