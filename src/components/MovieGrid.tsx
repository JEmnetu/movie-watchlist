import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Poster } from "./Poster";

import type { MovieData } from "@/lib/tmdb";
import { formatDate } from "@/lib/format";

export type MovieGridProps = {
  movies: MovieData[];
};

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {movies.map((m, index) => (
          <Link href={`/movies/${m.id}`} key={m.id}>
            <Card className="p-0 gap-0 overflow-hidden">
              <Poster
                path={m.poster_path}
                alt={`${m.title} poster`}
                priority={index < 4}
              />

              <CardHeader className="p-3">
                <CardTitle className="line-clamp-1">{m.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {formatDate(m.release_date)}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
