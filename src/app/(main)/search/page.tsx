import { permanentRedirect } from "next/navigation"

type SearchParams = Promise<Record<string, string | string[] | undefined>>

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams
  const next = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    const values = Array.isArray(value) ? value : value ? [value] : []
    values.forEach((item) => next.append(key, item))
  })

  const search = next.toString()
  permanentRedirect(search ? `/courses?${search}` : "/courses")
}

export default SearchPage
