"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { watchlistEntries } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function addToWatchlist(
  tmdbId: number,
  title: string,
  posterPath: string | null,
) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }
  const userId = session.user.id;

  await db
    .insert(watchlistEntries)
    .values({ userId, tmdbId, title, posterPath, status: "want_to_watch" });

  revalidatePath("/watchlist");
  revalidatePath(`/movies/${tmdbId}`);
}
