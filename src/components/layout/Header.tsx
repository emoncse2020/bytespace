import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

/**
 * 1440x120, transparent, sitting over the hero. The active item is
 * distinguished by font weight only — there is no underline in the design.
 * `minimal` renders the logo-only header used by the auth screens.
 */
export default function Header({
  active = "Home",
  dark = false,
  minimal = false,
}: {
  active?: string;
  dark?: boolean;
  minimal?: boolean;
}) {
  const text = dark ? "text-gray-950" : "text-gray-50";

  return (
    <header className="absolute inset-x-0 top-0 z-30 h-[120px]">
      <div className="container-1200 flex h-full items-center justify-between gap-6">
        <Logo dark={dark} />

        {minimal ? null : (
          <>
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${text} text-[16px] transition-opacity hover:opacity-80 ${
                    active === item.label
                      ? "font-medium leading-[1.2]"
                      : "font-normal leading-[1.6]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <Link
                href="/login"
                className={`${text} hidden text-[16px] leading-[24px] transition-opacity hover:opacity-80 sm:inline`}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className={`${text} hidden text-[16px] leading-[24px] transition-opacity hover:opacity-80 sm:inline`}
              >
                Join Us
              </Link>
              <button aria-label="Cart" className="cursor-pointer transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/shopping-bag.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={dark ? "" : "brightness-0 invert"}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
