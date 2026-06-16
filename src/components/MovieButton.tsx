"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export type MovieButtonProps = {
  ID: number;
};

export default function MovieButton({ ID }: MovieButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/${ID}`);
  };
  return <Button onClick={handleClick}>Movie Details</Button>;
}
