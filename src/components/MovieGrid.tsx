import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import MovieButton from "./MovieButton";
import Image from "next/image";

import type { MovieData } from "@/lib/tmdb";

export type MovieGridProps = {
  movies: MovieData[];
};

const imgPrefix = "https://image.tmdb.org/t/p/w500";

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {movies.map((m, index) => (
          <Card key={m.id} className="">
            {m.poster_path ? (
              <Image
                src={`${imgPrefix}${m.poster_path}`}
                alt={`${m.title} Poster`}
                width={200}
                height={300}
                priority={index < 4}
                className="h-auto w-full rounded-md"
              />
            ) : (
              <div className="aspect-2/3 w-full flex items-center justify-center rounded-md bg-muted -mt-6">
                No poster
              </div>
            )}
            <CardHeader>
              <CardTitle>{m.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{m.overview}</CardDescription>
              <MovieButton ID={m.id} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
