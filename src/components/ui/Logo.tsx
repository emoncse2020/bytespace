import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ByteSpace home">
      <Image
        src={dark ? "/assets/icons/logo-mark-dark.svg" : "/assets/icons/logo-mark.svg"}
        alt=""
        width={29}
        height={32}
        priority
      />
      <span
        className={`font-brand text-[24px] font-bold ${dark ? "text-gray-950" : "text-gray-50"}`}
      >
        ByteSpace
      </span>
    </Link>
  );
}
