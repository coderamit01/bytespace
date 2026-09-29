export interface NavItem {
  label: string,
  href: string
}

export interface Partner {
  name: string,
  logo: string
}
export interface SectionTitleProps {
  title:string,
  description?: string,
  className?:string,
  titleClass?:string,
  descClassName?:string
}

export interface CourseProps {
  id: number;
  slug: string;
  title: string;
  image: string,
  creatorId: string;
  author: string,
  level: string;
  rating: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  enrolledPreview: string;
  price: number;
  currency: string;
  pricingType: string;
}