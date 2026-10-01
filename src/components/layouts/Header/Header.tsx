import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/public/logo-light.png";
import { NavItem } from "@/src/types";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Creators",
      href: "/creators",
    },
  ];


  return (
    <header className="absolute left-0 top-0 w-full z-30 py-6 md:py-10">
      <div className="container">
        <nav className="flex items-center justify-between gap-3">
          <Link href="/">
            <Image src={LogoLight} className="w-30 md:w-40 max-w-40" height={100} width={160} alt="Logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {
              navItems.map((item, id) => (
                <Link key={id} href={item.href} className="text-base font-satoshi font-normal text-shuttle-50 hover:text-white transition-all hover:-translate-y-1">
                  {item.label}
                </Link>
              ))
            }
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="text-base font-satoshi font-normal text-shuttle-50 hover:text-white">Sign In</Link>
            <Link href="/signup" className="text-base font-satoshi font-normal text-shuttle-50 hover:text-white">Join Us</Link>
            <MdOutlineShoppingBag size="22" className="text-shuttle-50" />
          </div>
          {/* Mobile Menu  */}
          <div className="flex space-x-3 relative z-95 items-center md:hidden">
            <MdOutlineShoppingBag size="24" fill="#F5F5F6" className="text-shuttle" />
            <Sheet>
              <SheetTrigger className="text-shuttle-50 lg:hidden" aria-label="Open menu">
                <RiMenu3Line size="24" className="text-white" />
              </SheetTrigger>

              <SheetContent className="bg-purple" showCloseButton={false}>
                <SheetHeader className="flex-row items-center justify-between">
                  <Image src={LogoLight} className="w-30 md:w-40 max-w-40" height={100} width={160} alt="Logo" />
                  <SheetClose
                    aria-label="Close menu"
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full text-shuttle-50 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <IoClose size={28} />
                  </SheetClose>
                </SheetHeader>

                <div className="pt-2 flex flex-col gap-5 px-4">
                  {
                    navItems.map((item, id) => (
                      <SheetClose
                        key={id}
                        render={<Link href={item.href} />}
                        nativeButton={false}
                        className="text-base font-satoshi font-normal text-shuttle-50 hover:text-white"
                      >
                        {item.label}
                      </SheetClose>
                    ))
                  }

                  <div className="h-px bg-border border-slate-300" />
                  <div className="flex items-center space-x-3">
                    <SheetClose
                      render={<Link href="/login" />}
                      nativeButton={false}
                      className="text-[#242528] font-satoshi font-semibold rounded-full flex items-center justify-center px-5 py-2 border border-lime bg-lime"
                    >
                      Sign In
                    </SheetClose>

                    <SheetClose
                      render={<Link href="/signup" />}
                      nativeButton={false}
                      className="text-[#242528] font-satoshi font-semibold rounded-full flex items-center justify-center px-5 py-2 border border-[#242528] bg-white hover:border-lime hover:bg-lime"
                    >
                      Join Us
                    </SheetClose>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header