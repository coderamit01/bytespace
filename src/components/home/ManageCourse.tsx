import SectionTitle from "@/src/components/shared/SectionTitle";
import { FaCheckCircle } from "react-icons/fa"
import TheGirl from "@/public/images/girl.png"
import Image from "next/image";

const ManageCourse = () => {

  const list = [
    {
      title: "Share Your Expertise"
    },
    {
      title: "Monetize Your Passion"
    },
    {
      title: "Flexibility and Autonomy"
    },
    {
      title: "Build a Community"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-15 items-center">
      <div className="grid-col-span-1">
         <Image src={TheGirl} className="w-full" alt="The Girl" />
      </div>
      <div className="grid-col-span-1 ">
        <SectionTitle
          title="Create & Manage Courses Easily."
          className="items-start pb-10"
        />
        <p className="typo-body-l text-shuttle-700 pb-10">
          <strong className="text-lg font-satoshi text-Shuttle-gray-700400 leading-7">ByteSpace</strong>{" "}
          supports individuals or entities in the creation, publication, and administration of
          educational courses.
        </p>
        <div className="flex flex-col gap-3">
          {list.map((item, id) => (
            <li key={id} className="flex items-center justify-start gap-2">
              <FaCheckCircle className="shrink-0 text-lg text-purple" aria-hidden />
              <span className="text-lg font-medium text-shuttle-950">{item.title}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManageCourse