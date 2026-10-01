"use client"

import { useState } from "react"
import CreatorStat from "@/src/components/creator/CreatorStat"
import { cn } from "@/src/lib/utils"

type CreatorActionsProps = {
  products: number
  followers: number
}

const CreatorActions = ({ products, followers }: CreatorActionsProps) => {
  const [following, setFollowing] = useState(false)

  return (
    <div className="flex w-full flex-wrap items-start justify-between gap-4">
      <div className="flex flex-wrap items-start gap-3 sm:gap-4">
        <CreatorStat value={products} label={products === 1 ? "Product" : "Products"} />
        <CreatorStat value={followers + (following ? 1 : 0)} label="Followers" />
      </div>
      <button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((value) => !value)}
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-full px-6 py-3 font-satoshi text-lg font-medium leading-[1.2] transition-colors",
          following ? "bg-white text-shuttle-950 hover:bg-shuttle-50" : "bg-lime text-[#040819] hover:opacity-90"
        )}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  )
}

export default CreatorActions
