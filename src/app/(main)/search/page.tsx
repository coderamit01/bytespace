import type { Metadata } from "next"
import SearchHero from "@/src/components/search/SearchHero"
import FilterBar from "@/src/components/search/FilterBar"
import TopicFilter from "@/src/components/search/TopicFilter"
import CourseGrid from "@/src/components/search/CourseGrid"
import Pagination from "@/src/components/search/Pagination"
import { searchCourses, searchTopics } from "@/src/lib/search"

export const metadata: Metadata = {
  title: "Search Courses | ByteSpace",
  description: "Find your next course on ByteSpace.",
}

type SearchParams = Promise<Record<string, string | string[] | undefined>>

const readParam = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? ""

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams
  const query = readParam(params.q)
  const type = readParam(params.type) || "Courses"
  const page = Number(readParam(params.page)) || 1

  const { results, currentPage, totalPages } = searchCourses({ query, page })

  const buildHref = (target: number) => {
    const next = new URLSearchParams()
    if (query) next.set("q", query)
    if (type !== "Courses") next.set("type", type)
    if (target > 1) next.set("page", String(target))
    const search = next.toString()
    return search ? `/search?${search}` : "/search"
  }

  return (
    <>
      <SearchHero query={query} type={type} />
      <section className="bg-white pt-10 pb-14 md:pt-18 md:pb-18">
        <div className="container">
          <FilterBar />
          <div className="mt-6 md:mt-8">
            <TopicFilter topics={searchTopics} />
          </div>
          <div className="mt-10 md:mt-19.25">
            <CourseGrid courses={results} />
          </div>
          <div className="mt-12 md:mt-18">
            <Pagination currentPage={currentPage} totalPages={totalPages} buildHref={buildHref} />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchPage
