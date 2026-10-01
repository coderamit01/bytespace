"use client"

import { useState } from "react"
import { MdOutlineShare } from "react-icons/md"

type ShareButtonProps = {
  title: string
}

const ShareButton = ({ title }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        return
      }
      return
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-lime px-6 py-2 font-satoshi text-base font-medium leading-6 text-shuttle-950 backdrop-blur-[20px] transition-opacity hover:opacity-90"
    >
      <MdOutlineShare size={24} aria-hidden="true" />
      {copied ? "Link copied" : "Share"}
    </button>
  )
}

export default ShareButton
