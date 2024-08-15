"use client";
import { spotifyAuthorize } from "@/methods/spotifyApis";
import localFont from "next/font/local";
import Button from "./Button";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SpotifyLoginContainer({ spotifyUser }) {
  const handleClick = () => {
    spotifyAuthorize();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-primary text-center ${amVinylFont.className}`}
        >
          First, tell us who you are
        </span>
        <Button action={handleClick}>Log in to Spotify</Button>

        {spotifyUser ? <div>{spotifyUser.display_name}</div> : ""}
      </div>
    </>
  );
}
