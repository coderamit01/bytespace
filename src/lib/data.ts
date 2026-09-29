import { Category, CourseProps, Partner } from "@/src/types";

export const partners: Partner[] = [
  { name: "logolipsum", logo: "/partners/partner1.png" },
  { name: "logolipsum", logo: "/partners/partner2.png" },
  { name: "logolipsum", logo: "/partners/partner3.png" },
  { name: "logolipsum", logo: "/partners/partner4.png" },
  { name: "logolipsum", logo: "/partners/partner5.png" },
]

export const courseTopics: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking"
];

export const avatars: string[] = [
  "/courses/av1.png",
  "/courses/av2.png",
  "/courses/av3.png",
  "/courses/av4.png",
]

export const courses: CourseProps[] = [
  {
    "id": 1,
    "slug": "learn-figma-from-basic",
    "title": "Learn Figma from Basic",
    "creatorId": "purepearl-studio",
    "author": "purepearl studio",
    "level": "Beginner",
    "rating": 4.5,
    "lessonsCount": 17,
    "duration": "2 hours 16 mins",
    "commentsCount": 59,
    "enrolledPreview": "26+",
    "price": 25,
    "currency": "USD",
    "pricingType": "lifetime",
    "image": "/courses/c1.jpg"
  },
  {
    "id": 2,
    "slug": "build-digital-asset",
    "title": "Build Digital Asset",
    "creatorId": "purepearl-studio",
    "author": "purepearl studio",
    "level": "Beginner",
    "rating": 4.5,
    "lessonsCount": 17,
    "duration": "2 hours 16 mins",
    "commentsCount": 59,
    "enrolledPreview": "26+",
    "price": 25,
    "currency": "USD",
    "pricingType": "lifetime",
    "image": "/courses/c2.jpg"
  },
  {
    "id": 3,
    "slug": "the-power-of-big-data",
    "title": "The Power of Big Data",
    "creatorId": "purepearl-studio",
    "author": "purepearl studio",
    "level": "Beginner",
    "rating": 4.5,
    "lessonsCount": 17,
    "duration": "2 hours 16 mins",
    "commentsCount": 59,
    "enrolledPreview": "26+",
    "price": 25,
    "currency": "USD",
    "pricingType": "lifetime",
    "image": "/courses/c3.jpg"
  },
  {
    "id": 4,
    "slug": "balancing-productivity-and-self-care",
    "title": "Balancing Productivity and Self-Care",
    "creatorId": "purepearl-studio",
    "author": "purepearl studio",
    "level": "Beginner",
    "rating": 4.5,
    "lessonsCount": 17,
    "duration": "2 hours 16 mins",
    "commentsCount": 59,
    "enrolledPreview": "26+",
    "price": 25,
    "currency": "USD",
    "pricingType": "lifetime",
    "image": "/courses/c4.jpg"
  },
  {
    "id": 5,
    "slug": "mastering-money-management",
    "title": "Mastering Money Management",
    "creatorId": "purepearl-studio",
    "author": "purepearl studio",
    "level": "Beginner",
    "rating": 4.5,
    "lessonsCount": 17,
    "duration": "2 hours 16 mins",
    "commentsCount": 59,
    "enrolledPreview": "26+",
    "price": 25,
    "currency": "USD",
    "pricingType": "lifetime",
    "image": "/courses/c5.jpg"
  },
  {
    "id": 6,
    "slug": "from-idea-to-startup-success",
    "title": "From Idea to Startup Success",
    "creatorId": "purepearl-studio",
    "author": "purepearl studio",
    "level": "Beginner",
    "rating": 4.5,
    "lessonsCount": 17,
    "duration": "2 hours 16 mins",
    "commentsCount": 59,
    "enrolledPreview": "26+",
    "price": 25,
    "currency": "USD",
    "pricingType": "lifetime",
    "image": "/courses/c6.jpg"
  }
]

export const categories: Category[] = [
  { label: "Design", icon: '/images/design.png' },
  { label: "Development", icon: '/images/develop.png' },
  { label: "IT & Software",icon: '/images/it.png' },
  { label: "Business", icon: '/images/business.png' },
  { label: "Marketing", icon: '/images/marketting.png' },
  { label: "Photography", icon: '/images/photo.png' },
];

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];