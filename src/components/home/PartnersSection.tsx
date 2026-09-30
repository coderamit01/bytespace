import { partners } from "@/src/lib/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PartnersSection = () => {
  return (
    <section className="bg-shuttle-50 py-12 xl:py-20">
      <div className="container">
        <Marquee
          autoFill
          direction="left"
          speed={30}
          pauseOnHover
          gradient
          gradientColor="#F5F5F6"
        >
          {partners.map((item, id) => (
            <Image
              key={id}
              src={item.logo}
              alt={`Partner logo ${id + 1}`}
              className="mx-8 h-10 w-32 object-contain"
              width={100}
              height={100}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default PartnersSection;