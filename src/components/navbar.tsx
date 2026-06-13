import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Watchlist
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/search">Search</Link>
          <Link href="/watchlist">My Watchlist</Link>
          <Link href="/playground">Shadcn Playground</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
