import { searchMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";
import SearchInput from "@/components/SearchInput";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const trimmed = q?.trim();

  if (!trimmed) {
    return <SearchInput />;
  }

  const data = await searchMovies({ query: trimmed });
  const searchResults = data.results;

  return (
    <>
      <SearchInput />
      <MovieGrid movies={searchResults} />
    </>
  );
}
