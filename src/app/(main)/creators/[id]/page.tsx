import type { Metadata } from "next"
import { notFound } from "next/navigation"
import CreatorHero from "@/src/components/creator/CreatorHero"
import FilterBar from "@/src/components/search/FilterBar"
import CourseGrid from "@/src/components/search/CourseGrid"
import { getCreator, getCreatorCourses, getCreatorIds } from "@/src/lib/creators"

type CreatorPageProps = {
  params: Promise<{ id: string }>
}

export const generateStaticParams = () => getCreatorIds().map((id) => ({ id }))

export const generateMetadata = async ({ params }: CreatorPageProps): Promise<Metadata> => {
  const { id } = await params
  const creator = getCreator(id)
  if (!creator) return { title: "Creator not found | ByteSpace" }

  return {
    title: `${creator.name} | ByteSpace`,
    description: creator.tagline,
  }
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const { id } = await params
  const creator = getCreator(id)
  if (!creator) notFound()

  const creatorCourses = getCreatorCourses(id)

  return (
    <>
      <CreatorHero creator={creator} products={creatorCourses.length} />
      <section className="bg-white py-12 lg:py-15.25">
        <div className="container">
          <div className="flex flex-col gap-10">
            <FilterBar />
            <CourseGrid
              courses={creatorCourses}
              emptyTitle="No courses yet"
              emptyMessage={`${creator.name} hasn't published any courses yet. Follow to get notified when they do.`}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CreatorPage
