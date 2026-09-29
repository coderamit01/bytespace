import ButtonBrand from "@/src/components/shared/ButtonBrand"
import SectionTitle from "@/src/components/shared/SectionTitle"

const CTASection = () => {
  return (
    <section className="relative py-15 lg:py-20 bg-purple overflow-hidden">
      <div className="grid-bg" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-6 lg:gap-10">
          <SectionTitle title="Unlock Your Potential as a Creator with ByteSpace"
            description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
            className="items-center gap-4 w-full lg:w-4/5 mx-auto"
            titleClass="text-center text-[#F5F5F6] lg:w-2/3"
            descClassName="text-center text-[#F5F5F6]"
          />
          <ButtonBrand url="/" text="Join as Creator" />
        </div>
      </div>
    </section>
  )
}

export default CTASection