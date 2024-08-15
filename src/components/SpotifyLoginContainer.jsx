"use client";
import localFont from "next/font/local";
import { spotifyLogin } from "@/methods/spotifyApis";
import { useState } from "react";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SpotifyLoginContainer() {
  // window.spotifyCallback = (payload) => {
  //   popup.close()
  //   fetch('https://api.spotify.com/v1/me', {
  //     headers: {
  //       'Authorization': `Bearer ${payload}`
  //     }
  //   }).then(response => {
  //     return response.json()
  //   }).then(data => {
  //     // do something with data
  //     console.log(data, 'success')
  //   })
  // }

  const handleClick = async () => {
    spotifyLogin();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-primary text-center ${amVinylFont.className}`}
        >
          First, tell us who you are
        </span>
        <button type="button" onClick={handleClick}>
          Teste login
        </button>
      </div>
    </>
  );
}
