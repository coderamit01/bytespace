import { MdOutlineCategory, MdOutlineFilterAlt, MdSignalCellularAlt, MdSort } from "react-icons/md"
import FilterButton from "@/src/components/search/FilterButton"

const filters = [
  { label: "Filter", icon: MdOutlineFilterAlt },
  { label: "Level", icon: MdSignalCellularAlt },
  { label: "Category", icon: MdOutlineCategory },
]

const FilterBar = () => {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
      <div className="flex flex-wrap items-start gap-3 sm:gap-4">
        {filters.map((filter) => (
          <FilterButton key={filter.label} icon={filter.icon} label={filter.label} />
        ))}
      </div>
      <FilterButton icon={MdSort} label="Most relevant" />
    </div>
  )
}

export default FilterBar
