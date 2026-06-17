import Image from "next/image";

const POSTER_BASE = "https://image.tmdb.org/t/p/w500";

type BackdropProps = {
  path: string | null;
  alt: string;
  priority?: boolean;
};

export function Backdrop({ path, alt, priority = false }: BackdropProps) {
  if (!path) {
    return (
      <div className="flex aspect-video w-full items-center justify-center  bg-muted text-sm text-muted-foreground">
        No backdrop
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full-overflow-hidden">
      <Image
        src={`${POSTER_BASE}${path}`}
        alt={alt}
        sizes="(max-width: 768px) 100vw, 288px"
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
