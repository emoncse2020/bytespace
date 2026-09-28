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

function GoogleMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.2 3.5-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8h-4v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6v-3.1h-4a12 12 0 0 0 0 10.8l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8Z"
      />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#242528" aria-hidden>
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.6 2.3 2.8 2.3 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.2.9-1.2 1.2-2.4 1.2-2.5 0 0-2.3-.9-2.3-3.7ZM14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.6-1.3Z" />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      heading="Sign in"
      intro="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col gap-10">
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

        <div className="flex flex-col items-center gap-6">
          <span className="text-[16px] leading-[1.6] text-gray-400">or</span>
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Continue with Google"
              className="flex size-[72px] cursor-pointer items-center justify-center rounded-card border border-gray-100 transition-colors hover:bg-gray-50"
            >
              <GoogleMark />
            </button>
            <button
              type="button"
              aria-label="Continue with Apple"
              className="flex size-[72px] cursor-pointer items-center justify-center rounded-card border border-gray-100 transition-colors hover:bg-gray-50"
            >
              <AppleMark />
            </button>
          </div>
        </div>

        <p className="text-[18px] leading-[1.6] text-gray-700">
          New user?{" "}
          <Link href="/signup" className="text-blue-800 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
