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
      <div className="flex aspect-2/3 w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
        No backdrop
      </div>
    );
  }

  return (
    <Image
      src={`${POSTER_BASE}${path}`}
      alt={alt}
      width={169}
      height={300}
      priority={priority}
      className="h-auto w-full rounded-md"
    />
  );
}
