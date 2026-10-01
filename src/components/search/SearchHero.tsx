import PageHero from "@/src/components/shared/PageHero"
import SearchBar from "@/src/components/search/SearchBar"

type SearchHeroProps = {
  title?: string
  description?: string
  query?: string
  type?: string
}

const SearchHero = ({ title = "Find Your Next Course", description, query, type }: SearchHeroProps) => {
  return (
    <PageHero title={title} description={description}>
      <SearchBar defaultQuery={query} defaultType={type} />
    </PageHero>
  )
}

export default SearchHero
