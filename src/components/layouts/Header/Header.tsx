import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/public/logo-light.png";
import LogoDark from "@/public/logo-dark.png";
import { NavItem } from "@/src/types/type";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/src/components/ui/sheet";
import { RiMenu3Line } from "react-icons/ri";

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
    <header className="py-5">
      <div className="container">
        <nav className="flex items-center justify-between gap-3">
          <Link href="/">
            <Image src={LogoLight} className="w-30 md:w-40 max-w-40" height={100} width={160} alt="Logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {
              navItems.map((item, id) => (
                <Link key={id} href={item.href} className="text-base font-satoshi font-normal text-[#F5F5F6] hover:text-white">
                  {item.label}
                </Link>
              ))
            }
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="text-base font-satoshi font-normal text-[#F5F5F6] hover:text-white">Sign In</Link>
            <Link href="/signup" className="text-base font-satoshi font-normal text-[#F5F5F6] hover:text-white">Join Us</Link>
            <MdOutlineShoppingBag size="22" className="text-[#F5F5F6]" />
          </div>
          {/* Mobile Menu  */}
          <div className="flex space-x-3 items-center md:hidden">
             <MdOutlineShoppingBag size="24" className="text-[#F5F5F6]" />
            <Sheet>
              <SheetTrigger>
                <button
                  className="rounded-md p-2 hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <RiMenu3Line size="24" className="text-white" />
                </button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <Image src={LogoDark} className="w-30 md:w-40 max-w-40" height={100} width={160} alt="Logo" />
                </SheetHeader>

                <div className="pt-2 flex flex-col gap-5 px-4">
                  {
                    navItems.map((item, id) => (
                      <Link key={id} href={item.href} className="text-base font-satoshi font-normal text-[#040819] hover:text--[#003BE2]">
                        {item.label}
                      </Link>
                    ))
                  }

                  <div className="h-px bg-border" />
                  <div className="flex items-center space-x-3">
                    <Link href="/login" className="text-[#242528] font-satoshi font-semibold rounded-full flex items-center justify-center px-5 py-2 border border-[#D4FB20] bg-[#D4FB20]">
                      Sign In
                    </Link>

                    <Link href="/signup" className="text-[#242528] font-satoshi font-semibold rounded-full flex items-center justify-center px-5 py-2 border border-[#242528] bg-white hover:border-[#D4FB20] hover:bg-[#D4FB20]">
                      Join Us
                    </Link>
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