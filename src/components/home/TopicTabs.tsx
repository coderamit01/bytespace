"use client"
import Pill from "@/src/components/shared/Pill";
import { courseTopics } from "@/src/lib/data";
import { useState } from "react";



const TopicTabs = () => {
  const [active, setActive] = useState(courseTopics[0])

  const activeItem = (item: string) => {
    setActive(item)
  }

  return (

    <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-5">
      {courseTopics.map((item, id) => (
        <Pill key={id} topic={item} active={item === active} activeItem={activeItem} />
      ))}
      <button type="button" className="typo-label-m whitespace-nowrap text-purple hover:underline">
        + More
      </button>
    </div>
  )
}

export default TopicTabs