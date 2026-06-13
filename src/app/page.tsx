// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { pings } from "@/db/schema";
import { desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

async function addPing() {
  "use server";
  await db.insert(pings).values({ message: "Hello from server action" });
  revalidatePath("/");
}

export default async function Home() {
  const recent = await db
    .select()
    .from(pings)
    .orderBy(desc(pings.createdAt))
    .limit(5);

  return (
    <div>
      <form action={addPing}>
        <Button variant="destructive" type="submit">
          Submit
        </Button>
      </form>
      <ul>
        {recent.map((r) => (
          <li key={r.id}>
            {" "}
            {r.id} : {r.message}
            Created At: {r.createdAt.toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
