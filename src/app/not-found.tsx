import Header from "@/src/components/layouts/Header/Header";
import Footer from "@/src/components/layouts/Footer/Footer";
import ButtonBrand from "@/src/components/shared/ButtonBrand";

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-purple pt-32 pb-20 md:pt-40 md:pb-31">
          <div className="grid-bg z-1" />
          <div className="container">
            <div className="flex flex-col items-center">
              <p
                aria-hidden="true"
                className="relative z-10 -mb-[0.25em] font-poppins text-[160px] sm:text-[260px] md:text-[360px] lg:text-[480px] font-semibold leading-none tracking-[-0.01em] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,#D4FB20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50.5%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)] select-none"
              >
                404
              </p>
              <div className="relative z-2 flex flex-col items-center gap-6 md:gap-8">
                <h1 className="font-poppins text-4xl sm:text-5xl lg:text-[72px] font-semibold leading-[1.2] tracking-[-0.01em] text-center text-white max-w-233.75">
                  The page you are looking for doesn’t exist
                </h1>
                <p className="font-satoshi text-base md:text-lg leading-[1.6] text-center text-shuttle-100">
                  Try to use a correct url or go back to homepage to start again
                </p>
                <ButtonBrand url="/" text="Back to Home" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
