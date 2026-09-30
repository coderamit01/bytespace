import Image from "next/image"
import Link from "next/link"
import LogoMark from "@/public/favicon.png"
import AuthShowcase from "@/src/components/auth/AuthShowcase"

type AuthLayoutProps = {
  title: string
  description: string
  children: React.ReactNode
}

const AuthLayout = ({ title, description, children }: AuthLayoutProps) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-purple pt-8.75 pb-16 lg:pb-30">
      <div className="grid-bg" />
      <div className="container relative z-10 ">
        <Link href="/" aria-label="ByteSpace home" className="flex justify-center lg:justify-start">
          <Image src={LogoMark} alt="ByteSpace" width={29} height={32} priority />
        </Link>
        <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:pt-13.25">
          <div className="flex flex-col gap-10 lg:gap-15">
            <div className="flex flex-col gap-4 text-shuttle-50">
              <h2 className="text-center lg:text-start font-poppins text-xl font-semibold leading-[1.2] tracking-[-0.01em]">{title}</h2>
              <p className="text-center lg:text-start w-full md:max-w-118.75 md:mx-auto font-satoshi text-lg leading-[1.6]">{description}</p>
            </div>
            <div className="hidden lg:block">
              <AuthShowcase />
            </div>
          </div>
          <div className="w-full lg:max-w-144.75 lg:shrink-0">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
