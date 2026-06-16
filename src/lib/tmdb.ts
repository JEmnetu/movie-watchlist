export type MoviesResponse = {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
};

export type MovieData = {
  id: number;
  title: string;
  overview: string;
  genre_ids: number[];
  poster_path: string | null;

  release_date: string;
  vote_average: number;
  vote_count: number;
};

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
};

export type CrewMember = CastMember & {
  job: string;
};

export type Credits = {
  cast: CastMember[];
  crew: CrewMember[];
};

// MovieDetails type extends MovieData to include more fields
export type MovieDetails = MovieData & {
  backdrop_path?: string | null;
  runtime: number | null;
  tagline: string;
  genres: { id: number; name: string }[];
  credits: Credits;
};

export type SearchOptions = {
  query: string;
  page?: number;
  year?: string;
  include_adult?: boolean;
};

// poster sizes (w185, w342, w500, w780, original)
const tmdbBase = "https://api.themoviedb.org/3";

async function tmdb<T>(path: string): Promise<T> {
  const res = await fetch(`${tmdbBase}${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      accept: "application/json",
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`TMDB ${res.status}`);
  return res.json();
}
export const searchMovies = ({
  query,
  page = 1,
  year,
  include_adult = false,
}: SearchOptions) => {
  const params = new URLSearchParams({
    query,
    page: String(page),
    include_adult: String(include_adult),
  });
  if (year) params.set("year", String(year));

  return tmdb<MoviesResponse>(`/search/movie?${params}`);
};

export const getMovie = (id: number) => {
  return tmdb<MovieDetails>(`/movie/${id}?append_to_response=credits`);
};

export const getRecommendations = (id: number) => {
  return tmdb<MoviesResponse>(`/movie/${id}/recommendations`);
};

export const discoverMovies = () => {
  return tmdb<MoviesResponse>("/discover/movie");
};
