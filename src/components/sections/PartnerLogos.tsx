import Image from "next/image";

export default function PartnerLogos() {
  return (
    <section className="bg-gray-50 py-20" aria-label="Our partners">
      <div className="container-1200 flex justify-center">
        <Image
          src="/assets/brand/partners.png"
          alt="Partner logos"
          width={1132}
          height={42}
          className="h-auto w-full max-w-[1132px] object-contain"
        />
      </div>
    </section>
  );
}
