import MovieGrid from "@/components/MovieGrid";
import { discoverMovies } from "@/lib/tmdb";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);
  const { results: movies } = await discoverMovies();
  return (
    <div className="w-full">
      <div className="text-center mt-8 mb-8 text-xl font-semibold">
        Trending Movies
      </div>
      <MovieGrid movies={movies} />
    </div>
  );
}
