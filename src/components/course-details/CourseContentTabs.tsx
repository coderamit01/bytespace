"use client"

import { useId, useState } from "react"
import { cn } from "@/src/lib/utils"

export type ContentTab = {
  id: string
  label: string
  content: React.ReactNode
}

type CourseContentTabsProps = {
  tabs: ContentTab[]
  defaultTab?: string
}

const CourseContentTabs = ({ tabs, defaultTab }: CourseContentTabsProps) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)
  const baseId = useId()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = tabs.findIndex((tab) => tab.id === active)
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0
    if (!offset) return
    event.preventDefault()
    const next = tabs[(index + offset + tabs.length) % tabs.length]
    setActive(next.id)
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus()
  }

  return (
    <div className="flex w-full flex-col items-start gap-10">
      <div role="tablist" aria-label="Course sections" onKeyDown={handleKeyDown} className="flex flex-wrap items-start gap-4">
        {tabs.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-3 font-satoshi text-base font-medium leading-[1.2] transition-colors",
                isActive ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${baseId}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== active}
          className="w-full max-w-181.25"
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}

export default CourseContentTabs
