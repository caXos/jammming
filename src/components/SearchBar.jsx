"use client";
import localFont from "next/font/local";
import Button from "./Button";
import ErrorMessageContainer from "./ErrorMessageContainer";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SearchBar({
  searchParams,
  handleSearchInput,
  validateSearchInput,
  errorMessage = "",
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-primary text-center ${amVinylFont.className}`}
        >
          Whatcha lookin&apos; for, sweetie?
        </span>

        <div className="indicator">
          <span className="indicator-item badge">Required</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-accent"
            value={searchParams}
            onInput={handleSearchInput}
          />
        </div>

        <ErrorMessageContainer error={errorMessage} />

        <Button action={validateSearchInput}>Find tunes!</Button>
      </div>
    </>
  );
}
