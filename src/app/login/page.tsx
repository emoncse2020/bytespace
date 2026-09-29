import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Sign in — ByteSpace",
  description:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
};

/* Both marks are drawn monochrome in the design. */
function FacebookMark() {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" aria-hidden>
      <circle cx="16.5" cy="16.5" r="16.5" fill="#0D0D0D" />
      <path
        d="M21.4 21.1l.73-4.6h-4.42v-2.99c0-1.26.62-2.49 2.6-2.49h2.01V8.1s-1.82-.31-3.57-.31c-3.64 0-6.02 2.2-6.02 6.19v3.51H8.67v4.6h4.06V32.2a16.7 16.7 0 0 0 5 0V21.1h3.67z"
        fill="#fff"
      />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="#0D0D0D" aria-hidden>
      <path d="M12.24 10.29v3.63h5.14a4.4 4.4 0 0 1-1.9 2.9l3.06 2.37c1.79-1.65 2.82-4.08 2.82-6.97 0-.67-.06-1.32-.17-1.93h-8.95z" />
      <path d="M5.5 14.06l-.69.53-2.44 1.9A9.9 9.9 0 0 0 12.24 22c2.7 0 4.96-.89 6.61-2.41l-3.15-2.44c-.86.58-1.96.93-3.46.93-2.66 0-4.92-1.75-5.73-4.11z" />
      <path d="M2.37 7.51A9.83 9.83 0 0 0 1.3 12c0 1.62.39 3.14 1.07 4.49 0 .01 3.14-2.44 3.14-2.44a5.9 5.9 0 0 1 0-4.1L2.37 7.51z" />
      <path d="M12.24 5.78c1.5 0 2.85.52 3.91 1.53l2.92-2.92C17.2 2.77 14.94 1.8 12.24 1.8a9.9 9.9 0 0 0-9.87 5.71l3.14 2.44c.81-2.36 3.07-4.17 5.73-4.17z" />
    </svg>
  );
}

function SocialButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex size-[72px] cursor-pointer items-center justify-center rounded-[16px] border border-gray-100 transition-colors hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      heading="Sign in"
      intro="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex h-full flex-col gap-10">
        <div className="flex flex-col">
          <p className="text-[18px] leading-[1.6] text-blue-800">Sign In</p>
          <p className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-gray-950 sm:text-[44px]">
            Welcome Back
          </p>
        </div>

        <form className="flex flex-col items-end gap-6">
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[14px] leading-[1.2] font-medium text-gray-950"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="designer@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[14px] leading-[1.2] font-medium text-gray-950"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              autoComplete="current-password"
              required
            />
          </div>

          <Button type="submit">Sign In</Button>
        </form>

        {/* rule — "or" — rule, spanning the content column */}
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gray-100" />
          <span className="text-[16px] leading-[1.6] text-gray-700">or</span>
          <span className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="flex justify-center gap-4">
          <SocialButton label="Continue with Facebook">
            <FacebookMark />
          </SocialButton>
          <SocialButton label="Continue with Google">
            <GoogleMark />
          </SocialButton>
        </div>

        <p className="mt-auto text-center text-[18px] leading-[1.6] text-gray-700">
          New user?{" "}
          <Link href="/signup" className="text-blue-800 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
