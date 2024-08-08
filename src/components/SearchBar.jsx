"use client";
import localFont from "next/font/local";
import { useState } from "react";
import Button from "./Button";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleInput = (evt) => {
    setSearch(evt.target.value);
  };

  const testeAction = () => {
    console.log("Final search string: " + search)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-black text-center ${amVinylFont.className}`}
        >
          Whatcha lookin&apos; for, sweetie?
        </span>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs text-accent"
          value={search}
          onInput={handleInput}
        />

        <Button action={testeAction}>Find tunes!</Button>
      </div>
    </>
  );
}