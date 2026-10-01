import { courses } from "@/src/lib/data"
import { CourseProps } from "@/src/types"

export const COURSES_PER_PAGE = 18

const catalog: CourseProps[] = Array.from({ length: COURSES_PER_PAGE * 5 }, (_, index) => ({
  ...courses[index % courses.length],
  id: index + 1,
}))

export const searchTopics: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
]

type SearchOptions = {
  query?: string
  page?: number
}

export const searchCourses = ({ query = "", page = 1 }: SearchOptions) => {
  const term = query.trim().toLowerCase()
  const matches = term
    ? catalog.filter((course) =>
        [course.title, course.author, course.level].some((field) => field.toLowerCase().includes(term))
      )
    : catalog

  const totalPages = Math.max(1, Math.ceil(matches.length / COURSES_PER_PAGE))
  const currentPage = Math.min(Math.max(1, page), totalPages)
  const start = (currentPage - 1) * COURSES_PER_PAGE

  return {
    results: matches.slice(start, start + COURSES_PER_PAGE),
    total: matches.length,
    currentPage,
    totalPages,
  }
}
