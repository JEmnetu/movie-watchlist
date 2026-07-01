import Link from "next/link";
import { Button } from "./ui/button";
import SignInDialog from "./SignInDialog";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Watchlist
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Button variant="ghost" asChild>
            <Link href="/search">Search</Link>
          </Button>
          {session && (
            <Button variant="ghost" className="cursor-pointer" asChild>
              <Link href="/watchlist">My Watchlist</Link>
            </Button>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <span className="">
                Hi, {session.user?.name?.split(" ")[0] ?? session.user?.email}
              </span>
              <Button variant="ghost" type="submit" className="cursor-pointer">
                Sign Out
              </Button>
            </form>
          ) : (
            <SignInDialog />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
