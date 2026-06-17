import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Headshot } from "./Headshot";
import { getMovie } from "@/lib/tmdb";

export default async function CastCarousel({ id }: { id: number }) {
  const movie = await getMovie(Number(id));
  const topBilledCast = movie.credits.cast
    .toSorted((a, b) => a.order - b.order)
    .slice(0, 10);
  return (
    <div>
      <div className="font-semibold text-xl mt-4 px-4">Top Billed Cast</div>
      <div className="flex gap-3 overflow-x-auto pb-4 px-4">
        {topBilledCast.map((c) => (
          <Card
            key={c.id}
            className="w-40 shrink-0 shadow-lg [--card-spacing:--spacing(3)]"
          >
            <Headshot path={c.profile_path} alt={`${c.name} headshot`} />
            <CardHeader>
              <CardTitle>{c.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{c.character}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
