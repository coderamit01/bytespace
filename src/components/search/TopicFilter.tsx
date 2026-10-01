"use client"

import { useState } from "react"
import { cn } from "@/src/lib/utils"

type TopicFilterProps = {
  topics: string[]
}

const TopicFilter = ({ topics }: TopicFilterProps) => {
  const [active, setActive] = useState(topics[0])

  return (
    <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max items-center gap-4 xl:w-full xl:justify-between">
        {topics.map((topic) => {
          const isActive = topic === active
          return (
            <button
              key={topic}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(topic)}
              className={cn(
                "shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-3 font-satoshi text-base font-medium leading-[1.2] transition-colors",
                isActive ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
              )}
            >
              {topic}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TopicFilter
