import Image from "next/image";
import Button from "@/components/ui/Button";

/**
 * The seven 3D decorations, at their positions on the 488px-tall band.
 * Shapes that run off an edge in the design are anchored to that edge so
 * they stay flush at any viewport width rather than to a fixed 1440 canvas.
 */
type Deco = {
  src: string;
  w: number;
  h: number;
  top: number;
  left?: number;
  right?: number;
};

const DECOS: Deco[] = [
  { src: "spiral-lime-tl", w: 169, h: 175, top: 0, left: 0 },
  { src: "spiral-white-tl", w: 122, h: 130, top: 30, left: 207 },
  { src: "cone-white", w: 119, h: 160, top: 238, left: 0 },
  { src: "torus-lime", w: 246, h: 134, top: 354, left: 66 },
  { src: "pyramid-lime", w: 133, h: 145, top: 18, right: 206 },
  { src: "cylinder-white", w: 169, h: 300, top: 41, right: 0 },
  { src: "spiral-lime-br", w: 199, h: 165, top: 323, right: 66 },
];

export default function CTA() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-blue-800 py-20 lg:h-[488px] lg:py-0"
    >
      {/* the faint 120px grid the design draws over the blue:
          2px lines of white at 12.2%, measured from the source render */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {DECOS.map((d) => (
          <Image
            key={d.src}
            src={`/assets/cta/${d.src}.png`}
            alt=""
            width={d.w}
            height={d.h}
            className="absolute max-w-none"
            style={{
              top: d.top,
              left: d.left,
              right: d.right,
              width: d.w,
              height: d.h,
            }}
          />
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
