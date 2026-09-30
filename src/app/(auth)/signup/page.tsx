import type { Metadata } from "next"
import AuthLayout from "@/src/components/auth/AuthLayout"
import AuthCard from "@/src/components/auth/AuthCard"
import AuthForm from "@/src/components/auth/AuthForm"
import FormField from "@/src/components/auth/FormField"

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
}

const SignUp = () => {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footerText="Already have an account?"
        footerLinkText="Login"
        footerHref="/login"
      >
        <AuthForm submitLabel="Continue">
          <FormField label="Full Name" name="name" type="text" placeholder="Jamie Davis" autoComplete="name" required />
          <FormField label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" required />
          <FormField label="Password" name="password" type="password" placeholder="********" autoComplete="new-password" required />
        </AuthForm>
      </AuthCard>
    </AuthLayout>
  )
}

export default SignUp
