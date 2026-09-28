/**
 * The 3D decorations in the design are a PNG with a Mask Group painted over
 * it in `mix-blend-mode: hard-light`, which is what recolours them lime or
 * off-white. Reproduced here rather than baking the tint into the image.
 */
export type OrnamentSpec = {
  src: string;
  mask: string;
  tint: string;
  /** all values are design px on the 1440 canvas */
  left: number;
  top: number;
  size: number;
  flip?: boolean;
  className?: string;
};

export default function Ornament({
  src,
  mask,
  tint,
  left,
  top,
  size,
  flip,
  className = "",
}: OrnamentSpec) {
  return (
    <div
      className={`ornament ${className}`}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="block h-full w-full object-contain" />
      <span
        className="ornament-tint"
        style={{
          background: tint,
          WebkitMaskImage: `url(${mask})`,
          maskImage: `url(${mask})`,
        }}
      />
    </div>
  );
}
