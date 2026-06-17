import { getMovie } from "@/lib/tmdb";
import type { Metadata } from "next";
import { Poster } from "@/components/Poster";

import { Suspense } from "react";
import CastSkeleton from "@/components/CastSkeleton";
import CastCarousel from "@/components/CastCarousel";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";
import RecommendationsSkeleton from "@/components/RecommendationsSkeleton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovie(Number(id));

  return {
    title: `${movie.title}`,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
          width: 780,
          height: 439,
          alt: `${movie.title} backdrop`,
        },
      ],
    },
  };
}

export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idNum = Number(id);
  const movie = await getMovie(idNum);
  const releaseYear = movie.release_date.slice(0, 4);

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <div className="grid grid-cols-1 gap-6 px-8 py-12 md:grid-cols-[300px_1fr]">
          <Poster
            path={movie.poster_path}
            alt={`${movie.title} poster`}
            priority
          />

          <div className="text-white flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold  mb-2">
              {`${movie.title} (${releaseYear})`}
            </h1>
            <div>{movie.runtime} min</div>
            <div>
              <p>{movie.genres.map((g) => g.name).join(", ")}</p>
            </div>
            <div className="mb-4">
              <p className="">User Score: {movie.vote_average.toFixed(1)}/10</p>
            </div>
            <div>
              <h4 className=" text-xl font-extrabold">Overview</h4>
              <p className="">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <Suspense fallback={<CastSkeleton />}>
          <CastCarousel id={movie.id} />
        </Suspense>
      </div>

      <div className="px-4">
        <div className="font-semibold px-4">
          If you liked <span className="text-cyan-800">{movie.title}</span>, you
          might also enjoy...
        </div>
        <Suspense fallback={<RecommendationsSkeleton />}>
          <RecommendationsCarousel id={movie.id} />
        </Suspense>
      </div>
    </>
  );
}
