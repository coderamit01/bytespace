import type { Metadata } from "next"
import AuthLayout from "@/src/components/auth/AuthLayout"
import AuthCard from "@/src/components/auth/AuthCard"
import AuthForm from "@/src/components/auth/AuthForm"
import FormField from "@/src/components/auth/FormField"
import SocialLogin from "@/src/components/auth/SocialLogin"

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
}

const LoginPage = () => {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        extra={<SocialLogin />}
        footerText="New user?"
        footerLinkText="Create an account"
        footerHref="/signup"
      >
        <AuthForm submitLabel="Sign In">
          <FormField label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" required />
          <FormField label="Password" name="password" type="password" placeholder="********" autoComplete="current-password" required />
        </AuthForm>
      </AuthCard>
    </AuthLayout>
  )
}

export default LoginPage
