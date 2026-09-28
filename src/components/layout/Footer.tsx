import NewsletterForm from "@/components/ui/NewsletterForm";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const BROWSE = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];
const BROWSE_MORE = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const PLATFORM = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

const LEGAL = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

function LinkColumn({ title, items }: { title?: string; items: string[] }) {
  return (
    <div className="flex w-[167px] flex-col gap-6">
      {/* the middle column has no heading in the design; the spacer keeps
          all three lists on the same baseline */}
      <p
        className={`text-[16px] leading-[24px] font-medium ${title ? "text-gray-950" : "invisible"}`}
        aria-hidden={title ? undefined : true}
      >
        {title ?? "."}
      </p>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-[14px] leading-[1.6] text-gray-950 transition-colors hover:text-blue-800"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-1200 pt-[71px] pb-10">
        <div className="flex flex-col gap-[92px] xl:flex-row xl:justify-between">
          {/* brand + newsletter */}
          <div className="flex max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo dark />
              <p className="text-[14px] leading-[1.6] text-gray-950">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <NewsletterForm />
          </div>

          {/* link columns */}
          <div className="flex flex-wrap gap-10">
            <LinkColumn title="Browse" items={BROWSE} />
            <LinkColumn items={BROWSE_MORE} />
            <LinkColumn title="Platform" items={PLATFORM} />
          </div>
        </div>

        <div className="mt-[130px] flex flex-col gap-6">
          <hr className="border-gray-200" />
          <div className="flex flex-col justify-between gap-4 text-[12px] leading-[1.6] text-gray-950 sm:flex-row">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              {LEGAL.map((item) => (
                <Link key={item} href="#" className="transition-colors hover:text-blue-800">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
