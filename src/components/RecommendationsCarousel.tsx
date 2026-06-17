import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Backdrop } from "./Backdrop";
import Link from "next/link";
import { getRecommendations } from "@/lib/tmdb";

export default async function RecommendationsCarousel({ id }: { id: number }) {
  const recommendedMovies = await getRecommendations(id);
  return (
    <div className="flex items-start gap-x-4 overflow-x-auto pt-4 pb-12 px-4">
      {recommendedMovies.results.map((r) => (
        <Link
          href={`/movies/${r.id}`}
          key={r.id}
          className="w-72 shrink-0 transition hover:scale-[1.02]"
        >
          <Card className=" ring-0 shadow-lg p-0 gap-0 overflow-hidden">
            <Backdrop
              path={r.backdrop_path}
              alt={`${r.title}'s Backdrop Image`}
            />
            <CardHeader className="p-4">
              <CardTitle className="line-clamp-1 text-sm">{r.title}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
