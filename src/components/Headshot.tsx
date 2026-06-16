import Image from "next/image";

const HEADSHOT_BASE = "https://image.tmdb.org/t/p/w500";

type HeadshotProps = {
  path: string | null;
  alt: string;
  priority?: boolean;
};

export function Headshot({ path, alt, priority = false }: HeadshotProps) {
  if (!path) {
    return (
      <div className="flex aspect-2/3 w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
        No headshot
      </div>
    );
  }

  return (
    <Image
      src={`${HEADSHOT_BASE}${path}`}
      alt={alt}
      width={100}
      height={150}
      priority={priority}
      className="h-auto w-full rounded-md"
    />
  );
}
