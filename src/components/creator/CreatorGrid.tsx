import CreatorCard from "@/src/components/creator/CreatorCard"
import EmptyState from "@/src/components/shared/EmptyState"
import { Creator, getCreatorCourses } from "@/src/lib/creators"

const CreatorGrid = ({ creators }: { creators: Creator[] }) => {
  if (creators.length === 0) {
    return <EmptyState title="No creators yet" message="Check back soon to meet the creators joining ByteSpace." />
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} coursesCount={getCreatorCourses(creator.id).length} />
      ))}
    </div>
  )
}

export default CreatorGrid
