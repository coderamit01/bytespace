import Testimonial from "@/src/components/home/Testimonial"
import SectionTitle from "@/src/components/shared/SectionTitle"

const TestimonialSection = () => {
  return (
    <section className="py-10 lg:py-16 relative bg-[#FAFAFA] overflow-hidden">
      <div className="brand-circle-shadow size-120 top-[-10%] left-[35%]" />
      <div className="purple-shadow size-280 bottom-[-60%] left-[-25%]" />
      <div className="brand-shadow size-280 top-[-30%] right-[-30%]" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 pb-12 lg:pb-18">
          <SectionTitle title="Discover What Our Community Is Saying" 
          className="col-span-2 lg:col-span-1"
          titleClass="text-center lg:text-start"/>
          <p className="col-span-2 lg:col-span-1 text-lg text-center lg:text-start font-satoshi text-[#4F4F4F] leading-7 pt-4 lg:pt-0">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <Testimonial />
      </div>
    </section>
  )
}

export default TestimonialSection