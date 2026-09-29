import ManageCourse from "@/src/components/home/ManageCourse";
import ProfessionalGroth from "@/src/components/home/ProfessionalGroth";

const GrowthSection = () => {


  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="flex flex-col gap-20">
          <ProfessionalGroth />
          <ManageCourse />
        </div>
      </div>
    </section>
  )
}

export default GrowthSection