"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
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
        {/* the design labels this button "Search" — a copy bug carried over
            from the hero search bar; shipped as Subscribe */}
        <Button type="submit">{done ? "Subscribed" : "Subscribe"}</Button>
      </div>
      <p className="max-w-[504px] text-[12px] leading-[1.6] text-gray-950">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
    </form>
  );
}
