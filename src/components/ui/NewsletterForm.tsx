"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-wrap items-center gap-6">
        <div className="w-full max-w-[376px]">
          <Input
            variant="pill"
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
          />
        </div>
        <Button type="submit">Search</Button>
      </div>
      <p className="max-w-[504px] text-[12px] leading-[1.6] text-gray-950">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
    </form>
  );
}
