import { courseImages } from "./courseImages";

type Props = { name: string; caption?: string };

export function ImagePlaceholder({ name, caption }: Props) {
  const img = courseImages[name];

  if (!img) {
    return (
      <div className="my-8 flex min-h-40 items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center">
        <span className="text-sm text-neutral-400">
          Изображение: <span className="font-mono">{name}</span>
        </span>
      </div>
    );
  }

  const ratio = img.h / img.w;
  const isTall = ratio > 1.05;
  // Cap the natural display width so tiny screenshots don't get upscaled.
  const naturalMax = Math.min(img.w, 720);

  const borderColorClass =
    img.borderColor === "green"
      ? "border-4 border-green-500"
      : img.borderColor === "red"
        ? "border-4 border-red-500"
        : "border border-neutral-200";

  return (
    <figure className="my-8 flex flex-col items-center">
      <div
        className={`w-full max-w-[720px] rounded-xl ${borderColorClass} bg-neutral-50 p-3 shadow-sm`}
      >
        <img
          src={img.url}
          alt={img.alt}
          loading="lazy"
          className={
            isTall
              ? "mx-auto block max-h-[560px] w-auto rounded-md"
              : "mx-auto block h-auto w-full rounded-md"
          }
          style={isTall ? undefined : { maxWidth: `${naturalMax}px` }}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-neutral-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
