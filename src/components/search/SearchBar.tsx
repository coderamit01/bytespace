import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md"

type SearchBarProps = {
  defaultQuery?: string
  defaultType?: string
}

const searchTypes = ["Courses", "Creators"]

const SearchBar = ({ defaultQuery = "", defaultType = "Courses" }: SearchBarProps) => {
  return (
    <form action="/search" role="search" className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4">
      <label className="flex h-13 w-full items-center gap-2 rounded-full bg-white px-6 py-3 sm:w-115.25">
        <MdOutlineSearch size={24} className="shrink-0 text-shuttle-400" aria-hidden="true" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          defaultValue={defaultQuery}
          placeholder="Search"
          className="w-full bg-transparent font-satoshi text-lg leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400"
        />
      </label>
      <label className="relative flex h-13 items-center justify-center rounded-full bg-lime">
        <span className="sr-only">Search in</span>
        <select
          name="type"
          defaultValue={defaultType}
          className="h-full w-full cursor-pointer appearance-none rounded-3xl bg-transparent py-3 pl-6 pr-14 font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950 outline-none"
        >
          {searchTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <MdKeyboardArrowDown size={24} className="pointer-events-none absolute right-6 text-shuttle-950" aria-hidden="true" />
      </label>
    </form>
  )
}

export default SearchBar
