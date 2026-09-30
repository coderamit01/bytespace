import { FaFacebook, FaGoogle } from "react-icons/fa"

const providers = [
  { name: "Facebook", icon: FaFacebook },
  { name: "Google", icon: FaGoogle },
]

const SocialLogin = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full items-center gap-2.75">
        <span className="h-px flex-1 bg-[#D1D1D1]" />
        <span className="font-satoshi text-lg leading-[1.6] text-[#888888]">or</span>
        <span className="h-px flex-1 bg-[#D1D1D1]" />
      </div>
      <div className="flex items-center gap-4">
        {providers.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Continue with ${name}`}
            className="flex size-15 items-center justify-center rounded-3xl border border-[#D1D1D1] text-black transition-colors hover:bg-shuttle-50 cursor-pointer"
          >
            <Icon size={34} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default SocialLogin
