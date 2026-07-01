"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function SignInDialog() {
  const [email, setEmail] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="cursor-pointer">
          Sign in
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in to Watchlist</DialogTitle>
          <DialogDescription>
            Use Github or enter your email to receive a sign in link.
          </DialogDescription>
        </DialogHeader>

        <Button
          onClick={() => signIn("github")}
          variant="outline"
          className="w-full cursor-pointer"
        >
          Continue with Github
        </Button>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          <span>OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn("resend", { email });
          }}
          className="flex flex-col gap-2"
        >
          <Input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" className="w-full cursor-pointer">
            Send sign-in link
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
