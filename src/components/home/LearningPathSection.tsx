import SectionTitle from "@/src/components/shared/SectionTitle"
import { categories } from "@/src/lib/data"
import Image from "next/image"
import Link from "next/link"

const LearningPathSection = () => {
  return (
    <section className="bg-white pb-12 lg:pb-18">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionTitle
            title="Explore Diverse Learning Paths at Bytespace"
            description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
            className="items-center gap-4 w-full md:w-4/5"
            titleClass="md:text-4xl text-center"
            descClassName="text-center"
          />
          <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-5 lg:gap-8">
            {categories.map((category) => (
              <li key={category.label}>
                <div
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-[24px] border border-shuttle-200 transition-colors hover:outline-1 hover:outline-purple"
                >
                  <span className="flex items-center justify-center rounded-[40px] bg-lime p-3">
                    <Image src={category.icon} alt="" width={32} height={32} />
                  </span>
                  <span className="text-xl font-medium whitespace-nowrap text-shuttle-950">
                    {category.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LearningPathSection