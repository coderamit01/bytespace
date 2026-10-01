import { courses } from "@/src/lib/data"
import { CourseProps } from "@/src/types"

export type LessonPreview = {
  title: string
  duration: string
}

export type CourseCreator = {
  name: string
  role: string
  avatar: string
  bio: string
}

export type CourseModule = {
  title: string
  summary: string
}

export type RatingBreakdown = {
  stars: number
  count: number
  percent: number
}

export type CourseReview = {
  id: number
  name: string
  role: string
  avatar: string
  rating: number
  postedAt: string
  comment: string
}

export type CourseDetails = CourseProps & {
  headline: string
  subtitle: string
  reviewsCount: number
  studentsCount: number
  lessonsTotal: number
  totalHours: number
  lessonPreviews: LessonPreview[]
  ctaText: string
  includes: string[]
  creator: CourseCreator
  description: string[]
  sneakPeek: string[]
  keyPoints: string[]
  modulesIntro: string
  modules: CourseModule[]
  lessonContent: string
  progressIntro: string
  progress: number
  reviewsIntro: string
  ratingAverage: number
  ratingBreakdown: RatingBreakdown[]
  reviews: CourseReview[]
}

const sharedDetails = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  reviewsCount: 172,
  studentsCount: 199,
  lessonsTotal: 112,
  totalHours: 24,
  lessonPreviews: [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  ctaText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  includes: ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/course-details/creator.png",
    bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [
    "/course-details/sneak-1.jpg",
    "/courses/277ad.jpg",
    "/course-details/sneak-3.jpg",
    "/course-details/sneak-4.jpg",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modulesIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      summary: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      summary: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      summary: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      summary: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      summary: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      summary: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressIntro:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progress: 55,
  reviewsIntro:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  ratingAverage: 4.7,
  ratingBreakdown: [
    { stars: 5, count: 720, percent: 92.28 },
    { stars: 4, count: 120, percent: 36.49 },
    { stars: 3, count: 21, percent: 9.47 },
    { stars: 2, count: 12, percent: 3.51 },
    { stars: 1, count: 16, percent: 5.26 },
  ],
  reviews: [
    {
      id: 1,
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "/course-details/reviewer-1.png",
      rating: 5,
      postedAt: "a year ago",
      comment: "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"",
    },
    {
      id: 2,
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "/course-details/reviewer-2.png",
      rating: 5,
      postedAt: "a year ago",
      comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: 3,
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "/course-details/reviewer-3.png",
      rating: 5,
      postedAt: "a year ago",
      comment: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "/course-details/reviewer-4.png",
      rating: 5,
      postedAt: "a year ago",
      comment: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
}

const headlines: Record<string, string> = {
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
}

export const getCourseDetails = (slug: string): CourseDetails | undefined => {
  const course = courses.find((item) => item.slug === slug)
  if (!course) return undefined

  return {
    ...course,
    ...sharedDetails,
    headline: headlines[slug] ?? course.title,
    level: slug === "build-digital-asset" ? "Intermediate" : course.level,
    rating: slug === "build-digital-asset" ? 4.8 : course.rating,
  }
}

export const getCourseSlugs = () => courses.map((course) => course.slug)
