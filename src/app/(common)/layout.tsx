
import Header from "@/src/components/layouts/Header/Header";
import Footer from "@/src/components/layouts/Footer/Footer";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default layout