import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/src/components/shared/avatar";
import { avatars } from "@/src/lib/data";
import { CourseProps } from "@/src/types"
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";

const CourseCard = ({ course }: { course: CourseProps }) => {
  const {
    title,
    image,
    level,
    rating,
    lessonsCount,
    duration,
    commentsCount,
    price,
    author
  } = course;
  return (
    <article
      className="relative flex flex-col rounded-[24px] border border-shuttle-200 bg-white p-3.75 pb-5 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[341/195.145] w-full shrink-0 overflow-hidden rounded-[12px] bg-[#443131]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <ul className="absolute top-[76.87%] left-3 flex gap-3">
          <li className="text-xs font-satoshi font-medium rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-1.5 typo-label-xs whitespace-nowrap text-ink-700 backdrop-blur-xs">
            {lessonsCount} Lessons
          </li>
          <li className="text-xs font-satoshi font-medium rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-1.5 typo-label-xs whitespace-nowrap text-ink-700 backdrop-blur-xs">
            {duration}
          </li>
          <li className="text-xs font-satoshi font-medium rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-1.5 typo-label-xs whitespace-nowrap text-ink-700 backdrop-blur-xs">
            {commentsCount} Comments
          </li>
        </ul>
      </div>

      <div className="mt-5.25 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col items-start gap-4 w-full">
          <div className="flex justify-between items-start gap-2 w-full">
            <div className="flex flex-col items-start min-w-0 w-full">
              <h3 className="text-black min-w-0 w-full">
                <Link
                  href={`/`}
                  className="text-xl truncate font-semibold font-poppins block w-full"
                  title={title}
                >
                  {title}
                </Link>
              </h3>
              <p className="text-sm font-satoshi text-ink-700 truncate w-full">
                by{" "}
                <Link
                  href={`/`}
                  className="relative z-10 text-brand hover:underline text-purple"
                >
                  {author}
                </Link>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <span className="font-lg text-ink-700">{rating} </span>
              <FaStar fill="#CED0D3" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-[24px] bg-shuttle-50 px-3 py-1.5">
              <FiBarChart fill="#4B4C53" />
              <span className="text-sm font-medium text-shuttle-700">{level}</span>
            </span>
            <AvatarGroup>
              {
                avatars.map((av, id) => (
                  <Avatar key={id}>
                    <AvatarImage src={av} />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                ))
              }
              <AvatarGroupCount className="bg-lime text-shuttle-gray-950 font-sm">26+</AvatarGroupCount>
            </AvatarGroup>
          </div>
          <p className="flex items-end">
            <span className="flex items-end font-poppins text-xl font-semibold text-purple leading-6">
              <span className="font-medium">$</span>
              {price}
            </span>
            <span className="text-sm text-[#4F4F4F] leading-5">/lifetime</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default CourseCard