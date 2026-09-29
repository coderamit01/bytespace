import SectionTitle from "@/src/components/shared/SectionTitle"
import { growthStats } from "@/src/lib/data"
import TheBoy from "@/public/images/boy.png"
import Image from "next/image"


const ProfessionalGroth = () => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-12 items-center">
      <div className="grid-col-span-1">
        <SectionTitle
          title="Your Path to Professional Growth Starts Here!"
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          className="items-start gap-10 pb-10"
          descClassName="text-shuttle-700"
        />
        <div className="flex items-end gap-10 whitespace-nowrap sm:gap-14">
          {growthStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <h3 className="text-4xl font-medium text-purple">{stat.value}</h3>
              <p className="text-lg text-shuttle-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid-col-span-1">
        <Image src={TheBoy} className="w-full" alt="The Boy" />
      </div>
    </div>
  )
}

export default ProfessionalGroth