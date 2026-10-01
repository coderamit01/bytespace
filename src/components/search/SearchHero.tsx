import SearchBar from "@/src/components/search/SearchBar"

type SearchHeroProps = {
  query?: string
  type?: string
}

const SearchHero = ({ query, type }: SearchHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-purple pt-32 pb-14 md:pt-41 md:pb-17.25">
      <div className="grid-bg" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center font-poppins text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-50 md:text-4xl">
            Find Your Next Course
          </h1>
          <SearchBar defaultQuery={query} defaultType={type} />
        </div>
      </div>
    </section>
  )
}

export default SearchHero
