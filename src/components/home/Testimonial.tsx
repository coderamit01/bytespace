import { testimonials } from "@/src/lib/data"
import { cn } from "@/src/lib/utils"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"

const navButtonClass = "static inset-auto my-0 size-12 translate-none border-shuttle-100 bg-white text-shuttle-950 hover:bg-lime hover:text-shuttle-950 disabled:opacity-40 [&_svg:not([class*='size-'])]:size-5"

const Testimonial = () => {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-6 lg:-ml-10.25">
        {[...testimonials, ...testimonials].map((item, index) => (
          <CarouselItem key={`${item.name}-${index}`} className="pl-6 md:basis-1/2 lg:basis-1/3 lg:pl-10.25">
            <div className="flex h-full flex-col items-start gap-6 rounded-[24px] bg-white p-6">
              <Image src={item.avatar} alt={item.name} width={70} height={70} className="rounded-full" />
              <div className="flex flex-col items-start whitespace-nowrap">
                <p className={cn("text-xl font-semibold text-black", index % testimonials.length === 0 ?"leading-[1.2]" : "leading-7")}>
                  {item.name}
                </p>
                <p className="text-lg font-normal text-purple">{item.role}</p>
              </div>
              <blockquote className="max-w-81 font-satoshi text-lg font-normal text-[#4F4F4F]">
                &quot;{item.quote}&quot;
              </blockquote>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-4 pt-8 lg:pt-12">
        <CarouselPrevious className={navButtonClass} />
        <CarouselNext className={navButtonClass} />
      </div>
    </Carousel>
  )
}

export default Testimonial
