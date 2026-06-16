"use client";

import {
  InputGroup,
  InputGroupAddon,
  //   InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const path = usePathname();

  const params = new URLSearchParams({
    q: inputValue,
  });

  return (
    <form
      className="mx-auto max-w-md px-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
          router.push(`${path}?${params}`);
        } else {
          alert("Please enter a value to search.");
        }
      }}
    >
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
