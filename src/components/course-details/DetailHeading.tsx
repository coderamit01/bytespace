import { cn } from "@/src/lib/utils"

type DetailHeadingProps = {
  children: React.ReactNode
  as?: "h2" | "h3"
  className?: string
}

const DetailHeading = ({ children, as: Tag = "h2", className }: DetailHeadingProps) => {
  return (
    <Tag className={cn("font-poppins text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950", className)}>
      {children}
    </Tag>
  )
}

export default DetailHeading
