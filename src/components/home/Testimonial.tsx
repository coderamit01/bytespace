import { testimonials } from "@/src/lib/data"
import { cn } from "@/src/lib/utils"
import Image from "next/image"



const Testimonial = () => {
  return (
    <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10.25 xl:-mx-0.5">
      {testimonials.map((item, index) => (
        <div key={item.name} className="flex flex-col items-start gap-6 rounded-[24px] bg-white p-6">
          <Image src={item.avatar} alt={item.name} width={70} height={70} className="rounded-full" />
          <div className="flex flex-col items-start whitespace-nowrap">
            <p className={cn("text-xl font-semibold text-black", index === 0 ? "leading-[1.2]" : "leading-7")}>
              {item.name}
            </p>
            <p className="text-lg font-normal text-purple">{item.role}</p>
          </div>
          <blockquote className="max-w-81 font-satoshi text-lg font-normal text-[#4F4F4F]">
            &quot;{item.quote}&quot;
          </blockquote>
        </div>
      ))}
    </div>
  )
}

export default Testimonial