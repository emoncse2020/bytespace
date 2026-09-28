import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Sign up — ByteSpace",
  description:
    "The registration process is straightforward, uncomplicated, and efficient.",
};

const FIELDS = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
  { id: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
];

export default function SignUpPage() {
  return (
    <AuthLayout
      eyebrow="Sign up and come in"
      heading="Create an account"
      intro="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <p className="text-[18px] leading-[1.6] text-blue-800">
            Create an Account
          </p>
          <p className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-gray-950 sm:text-[44px]">
            Welcome to ByteSpace
          </p>
        </div>

        <form className="flex flex-col items-end gap-6">
          {FIELDS.map((f) => (
            <div key={f.id} className="flex w-full flex-col gap-2">
              <label
                htmlFor={f.id}
                className="text-[14px] leading-[1.2] font-medium text-gray-950"
              >
                {f.label}
              </label>
              <Input
                id={f.id}
                name={f.id}
                type={f.type}
                placeholder={f.placeholder}
                autoComplete={f.autoComplete}
                required
              />
            </div>
          ))}

          <Button type="submit">Continue</Button>
        </form>

        <p className="text-[18px] leading-[1.6] text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-800 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
