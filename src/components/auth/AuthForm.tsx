"use client"

type AuthFormProps = {
  submitLabel: string
  children: React.ReactNode
}

const AuthForm = ({ submitLabel, children }: AuthFormProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full flex-col items-end gap-6">
      {children}
      <button
        type="submit"
        className="flex items-center justify-center rounded-3xl bg-lime px-6 py-3 font-satoshi text-lg font-medium leading-[1.2] text-shuttle-950 transition-opacity hover:opacity-90 cursor-pointer"
      >
        {submitLabel}
      </button>
    </form>
  )
}

export default AuthForm
