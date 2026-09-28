
import Image from "next/image";
import Link from "next/link";
import LogoDark from "@/public/logo-dark.png";

const linkColumns = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];


const Footer = () => {
  return (
    <footer className="bg-white font-satoshi text-neutral-900">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-8 md:gap-12 pb-5 pt-12">
          <div className="col-span-12 lg:col-span-6 md:pe-12">
            <Link href="/" className="inline-block">
              <Image
                src={LogoDark.src}
                alt="ByteSpace"
                width={171}
                height={33}
                priority
                className="h-8 w-auto"
              />
            </Link>

            <p className="mt-2 text-sm leading-6">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 box-border">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-13 w-full rounded-full border border-neutral-300 bg-white px-6 text-base text-neutral-900 placeholder:text-neutral-700 focus:border-neutral-900 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#D6FF1F] px-6 text-lg font-[500] text-neutral-900 transition hover:bg-[#c8f000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Search
              </button>
            </form>

            <p className="mt-8 text-xs leading-5 text-neutral-800">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <nav className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-3"
          >
            {linkColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-4 text-neutral-800 transition hover:text-neutral-950 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
        <div className="flex flex-col-reverse gap-4 border-t border-neutral-300 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center md:text-start">@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer