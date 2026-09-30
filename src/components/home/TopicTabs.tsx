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

    <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-5 xl:flex-col xl:flex-nowrap xl:gap-y-5.25">
      {rows.map((row, rowId) => (
        <div key={rowId} className="contents xl:flex xl:items-center xl:justify-center xl:gap-x-4">
          {row.map((item) => (
            <Pill key={item} topic={item} active={item === active} activeItem={activeItem} />
          ))}
          {rowId === rows.length - 1 && (
            <button type="button" className="typo-label-m whitespace-nowrap text-purple hover:underline">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default TopicTabs