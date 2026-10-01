import Link from "next/link"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { cn } from "@/src/lib/utils"

type PaginationProps = {
  currentPage: number
  totalPages: number
  buildHref: (page: number) => string
}

const arrowClass = "flex h-12 w-14 items-center justify-center rounded-3xl border border-[#CED0D3] bg-white text-shuttle-700 transition-colors"

const Pagination = ({ currentPage, totalPages, buildHref }: PaginationProps) => {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
  const hasPrev = currentPage > 1
  const hasNext = currentPage < totalPages

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-4 sm:gap-6">
      {hasPrev ? (
        <Link href={buildHref(currentPage - 1)} aria-label="Previous page" className={cn(arrowClass, "hover:border-shuttle-700")}>
          <MdArrowBackIosNew size={24} />
        </Link>
      ) : (
        <span aria-disabled="true" className={cn(arrowClass, "cursor-not-allowed")}>
          <MdArrowBackIosNew size={24} />
        </span>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "font-poppins text-xl font-semibold leading-7 tracking-[-0.01em] transition-colors",
            page === currentPage ? "pointer-events-none text-[#CED0D3]" : "text-shuttle-950 hover:text-purple"
          )}
        >
          {page}
        </Link>
      ))}

      {hasNext ? (
        <Link href={buildHref(currentPage + 1)} aria-label="Next page" className={cn(arrowClass, "hover:border-shuttle-700")}>
          <MdArrowForwardIos size={24} />
        </Link>
      ) : (
        <span aria-disabled="true" className={cn(arrowClass, "cursor-not-allowed")}>
          <MdArrowForwardIos size={24} />
        </span>
      )}
    </nav>
  )
}

export default Pagination
