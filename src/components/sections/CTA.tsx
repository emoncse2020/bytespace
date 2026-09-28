import Image from "next/image";
import Button from "@/components/ui/Button";
import Ornament, { type OrnamentSpec } from "@/components/ui/Ornament";

const LIME = "#d4fb20";
const OFFWHITE = "#f5f5f6";

/** Ornament cluster framing the CTA band (1440 x 488 canvas). */
const ORNAMENTS: OrnamentSpec[] = [
  { src: "/assets/ornaments/spiral-b.png", mask: "/assets/ornaments/spiral-b-mask.png", tint: LIME,     left: -80,  top: -60,  size: 300 },
  { src: "/assets/ornaments/spiral-a.png", mask: "/assets/ornaments/spiral-a-mask.png", tint: OFFWHITE, left: 120,  top: 10,   size: 150 },
  { src: "/assets/ornaments/cone-c.png",   mask: "/assets/ornaments/cone-c-mask.png",   tint: OFFWHITE, left: -20,  top: 300,  size: 160 },
  { src: "/assets/ornaments/spiral-b.png", mask: "/assets/ornaments/spiral-c-mask.png", tint: LIME,     left: 60,   top: 360,  size: 190 },
  { src: "/assets/ornaments/cone-b.png",   mask: "/assets/ornaments/cone-b-mask.png",   tint: LIME,     left: 1130, top: -20,  size: 180 },
  { src: "/assets/ornaments/cone-a.png",   mask: "/assets/ornaments/cone-a-mask.png",   tint: OFFWHITE, left: 1290, top: 60,   size: 190 },
  { src: "/assets/ornaments/spiral-a.png", mask: "/assets/ornaments/spiral-a-mask.png", tint: LIME,     left: 1200, top: 300,  size: 230 },
];

export default function CTA() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-blue-800 py-20 lg:h-[488px] lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <Image src="/assets/hero/grid.svg" alt="" fill className="object-cover" />
      </div>

      <div
        className="pointer-events-none absolute top-0 left-1/2 hidden h-[488px] w-[1440px] -translate-x-1/2 xl:block"
        aria-hidden
      >
        {ORNAMENTS.map((o) => (
          <Ornament key={`${o.src}-${o.left}-${o.top}`} {...o} />
        ))}
      </div>

      <div className="relative z-10 container-1200 flex flex-col items-center gap-10 text-center lg:pt-[85px]">
        <h2 className="font-display track-tight max-w-[710px] text-[32px] leading-[1.2] font-semibold text-gray-50 sm:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-[18px] leading-[1.6] text-gray-50">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button href="/signup">Join as Creator</Button>
      </div>
    </section>
  );
}
