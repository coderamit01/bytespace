import Link from "next/link"

type AuthCardProps = {
  eyebrow: string
  title: string
  children: React.ReactNode
  extra?: React.ReactNode
  footerText: string
  footerLinkText: string
  footerHref: string
}

const AuthCard = ({ eyebrow, title, children, extra, footerText, footerLinkText, footerHref }: AuthCardProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10 rounded-3xl bg-white px-6 py-10 sm:px-15.75 sm:py-15.25 lg:min-h-196">
      <div className="flex w-full flex-col items-start gap-10">
        <div className="flex flex-col items-start">
          <p className="font-satoshi text-lg leading-[1.6] text-purple">{eyebrow}</p>
          <h1 className="font-poppins text-3xl sm:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950">{title}</h1>
        </div>
        {children}
      </div>
      {extra}
      <p className="flex flex-wrap justify-center gap-1 font-satoshi text-base leading-[1.6]">
        <span className="text-shuttle-700">{footerText}</span>
        <Link href={footerHref} className="text-purple hover:underline">{footerLinkText}</Link>
      </p>
    </div>
  )
}

export default AuthCard
