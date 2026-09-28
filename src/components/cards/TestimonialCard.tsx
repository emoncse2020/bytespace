import Image from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex w-full max-w-[374px] flex-col gap-6 rounded-card bg-white p-6 shadow-[0_2px_12px_rgba(16,24,40,0.05)]">
      <Image
        src={item.avatar}
        alt=""
        width={80}
        height={80}
        className="rounded-full"
      />
      <figcaption className="flex flex-col">
        <span className="font-display track-tight text-[20px] leading-[28px] font-semibold text-ink-950">
          {item.name}
        </span>
        <span className="text-[18px] leading-[1.6] text-blue-800">{item.role}</span>
      </figcaption>
      <blockquote className="max-w-[326px] text-[18px] leading-[1.6] text-ink-700">
        {item.quote}
      </blockquote>
    </figure>
  );
}
