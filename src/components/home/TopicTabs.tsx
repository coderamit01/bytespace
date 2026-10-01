"use client"
import Pill from "@/src/components/shared/Pill";
import { courseTopics } from "@/src/lib/data";
import { useState } from "react";



const TopicTabs = () => {
  const [active, setActive] = useState(courseTopics[0])

  const activeItem = (item: string) => {
    setActive(item)
  }

  const rows = [courseTopics.slice(0, 8), courseTopics.slice(8, 14), courseTopics.slice(14)]

  return (

    <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0">
      <div className="flex w-max items-center flex-nowrap gap-x-4 gap-y-5 md:w-auto md:flex-wrap md:justify-center xl:flex-col xl:flex-nowrap xl:gap-y-5.25">
        {rows.map((row, rowId) => (
          <div key={rowId} className="contents xl:flex xl:items-center xl:justify-center xl:gap-x-4">
            {row.map((item) => (
              <Pill key={item} topic={item} active={item === active} activeItem={activeItem} />
            ))}
            {rowId === rows.length - 1 && (
              <button type="button" className="shrink-0 typo-label-m whitespace-nowrap text-purple hover:underline">
                + More
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopicTabs