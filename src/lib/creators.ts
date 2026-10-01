import { courses } from "@/src/lib/data"
import { CourseProps } from "@/src/types"

export type Creator = {
  id: string
  name: string
  tagline: string
  avatar: string
  bio: string[]
  followers: number
}

const creators: Creator[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/creators/purepearl-studio.png",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    followers: 12,
  },
  {
    id: "albert-flores",
    name: "Albert Flores",
    tagline: "Product designer & design systems lead",
    avatar: "/course-details/reviewer-2.png",
    bio: [
      "I help teams build consistent, scalable interfaces. My lessons focus on design systems, component thinking, and shipping polished products with confidence.",
    ],
    followers: 248,
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    tagline: "Digital illustrator & brand storyteller",
    avatar: "/testimonial/sarah.png",
    bio: [
      "From sketch to final artwork, I share the techniques I use every day to craft memorable illustrations and brand visuals that tell a story.",
    ],
    followers: 186,
  },
  {
    id: "cody-fisher",
    name: "Cody Fisher",
    tagline: "Front-end developer & educator",
    avatar: "/course-details/reviewer-3.png",
    bio: [
      "I teach modern web development the practical way: real projects, clean code, and the habits that turn beginners into confident developers.",
    ],
    followers: 132,
  },
  {
    id: "james-lee",
    name: "James Lee",
    tagline: "Marketing strategist & growth coach",
    avatar: "/testimonial/james.png",
    bio: [
      "Learn how to grow an audience, launch products, and measure what matters. My courses turn marketing theory into repeatable playbooks.",
    ],
    followers: 97,
  },
  {
    id: "brooklyn-simmons",
    name: "Brooklyn Simmons",
    tagline: "Photographer & visual content creator",
    avatar: "/course-details/reviewer-4.png",
    bio: [
      "Light, composition, and editing are the pillars of great visuals. I break them down into simple steps anyone can follow with any camera.",
    ],
    followers: 74,
  },
  {
    id: "alex-brown",
    name: "Alex Brown",
    tagline: "Motion designer & animator",
    avatar: "/testimonial/alex.png",
    bio: [
      "Bring your designs to life. I teach motion principles, animation workflows, and how to add delightful movement to digital products.",
    ],
    followers: 63,
  },
]

export const getCreator = (id: string) => creators.find((creator) => creator.id === id)

export const getCreatorIds = () => creators.map((creator) => creator.id)

export const getCreatorCourses = (id: string): CourseProps[] => courses.filter((course) => course.creatorId === id)

export const getCreators = () => creators
