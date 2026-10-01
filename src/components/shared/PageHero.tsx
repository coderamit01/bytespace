type PageHeroProps = {
  title: string
  description?: string
  children?: React.ReactNode
}

const PageHero = ({ title, description, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-purple pt-32 pb-14 md:pt-41 md:pb-17.25">
      <div className="grid-bg" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center font-poppins text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-50 md:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-160 text-center font-satoshi text-base leading-[1.6] text-shuttle-100 md:text-lg">{description}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}

export default PageHero
