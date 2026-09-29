import Link from "next/link"


const ButtonBrand = ({text,url}: {text:string,url:string}) => {
  return (
    <Link href={url} className="text-lg font-medium font-satoshi py-3 px-6 rounded-full bg-lime flex justify-center items-center">
      {text}
    </Link>
  )
}

export default ButtonBrand
