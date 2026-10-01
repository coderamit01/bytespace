import { MdOutlineVideocam } from "react-icons/md"
import { CourseModule } from "@/src/lib/course-details"

const ModuleItem = ({ module }: { module: CourseModule }) => {
  return (
    <li className="flex items-center gap-3.25">
      <span className="flex shrink-0 items-center justify-center rounded-3xl bg-lime p-3 sm:p-4">
        <MdOutlineVideocam aria-hidden="true" className="size-8 text-shuttle-950 sm:size-10" />
      </span>
      <span className="flex flex-col items-start gap-1 font-satoshi text-base">
        <span className="font-medium leading-[1.2] text-shuttle-950">{module.title}</span>
        <span className="max-w-159.5 leading-[1.6] text-shuttle-700">{module.summary}</span>
      </span>
    </li>
  )
}

export default ModuleItem
