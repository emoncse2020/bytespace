import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const GRID =
  "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)";

/** The numerals fade from lime into the blue field. */
const FADE = {
  backgroundImage:
    "linear-gradient(180deg, #CBFC01 0%, #CBFC01 20%, rgba(203,252,1,0.55) 62%, rgba(203,252,1,0) 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

export default function NotFound() {
  return (
    <>
      <Header active="Home" />
      <main>
        <section className="relative overflow-hidden bg-blue-800">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: GRID }}
            aria-hidden
          />

          {/* desktop: the design's 1440 x 957 canvas */}
          <div className="relative mx-auto hidden h-[957px] w-[1440px] xl:block">
            <p
              aria-hidden
              className="font-display track-tight absolute inset-x-0 text-center text-[480px] leading-[480px] font-semibold select-none"
              style={{ top: 160, ...FADE }}
            >
              404
            </p>

            <div
              className="absolute left-1/2 flex w-[935px] -translate-x-1/2 flex-col items-center"
              style={{ top: 521 }}
            >
              <h1 className="font-display track-tight text-center text-[72px] leading-[84px] font-semibold text-white">
                The page you are looking for doesn&apos;t exist
              </h1>
              <p className="mt-[36px] text-center text-[18px] leading-[1.6] text-white">
                Try to use a correct url or go back to homepage to start again
              </p>
              <div className="mt-[32px]">
                <Button href="/">Back to Home</Button>
              </div>
            </div>
          </div>

          {/* below xl */}
          <div className="relative z-10 container-1200 flex flex-col items-center gap-6 py-32 text-center xl:hidden">
            <p
              aria-hidden
              className="font-display track-tight text-[160px] leading-[1] font-semibold select-none sm:text-[260px]"
              style={FADE}
            >
              404
            </p>
            <h1 className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-white sm:text-[44px]">
              The page you are looking for doesn&apos;t exist
            </h1>
            <p className="text-[18px] leading-[1.6] text-white">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Button href="/">Back to Home</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
