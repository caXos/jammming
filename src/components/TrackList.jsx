'use client'
import localFont from "next/font/local";
import Track from "./Track";
import CircleButton from "./CircleButton";
import Button from "./Button";
import NoteIcon from "./Icon_Note";
import { useState } from 'react';

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

const mockTracks = [
  {
    trackNumber: 0,
    ico: "ico",
    title: "Título 0",
    artist: "Artista 0",
    album: "Album 0",
    time: "03:00",
  },
  {
    trackNumber: 1,
    ico: "ico",
    title: "Título 1",
    artist: "Artista 1",
    album: "Album 1",
    time: "03:01",
  },
  {
    trackNumber: 2,
    ico: "ico",
    title: "Título 2",
    artist: "Artista 2",
    album: "Album 2",
    time: "03:02",
  },
  {
    trackNumber: 3,
    ico: "ico",
    title: "Título 3",
    artist: "Artista 3",
    album: "Album 3",
    time: "03:03",
  },
];
export default function TrackList() {

  const [jammmName, setJammmName] = useState('');
  
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 mx-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-black text-center ${amVinylFont.className}`}
        >
          My New Jammm!
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full">
          <input
            type="text"
            placeholder="My awesome jammm!"
            className="input input-bordered w-full max-w-xs text-accent"
            // value={search}
            // onInput={handleInput}
          />
          {mockTracks.map((track, index, mockTracks) => {
            return (
              <>
                <div className="w-full grid grid-cols-10 justify-between items-center hover:bg-base-200 " key={index}>
                  <p className="row-span-2 pl-2">{index + 1}: </p>
                  <Track track={track} customClass="col-span-9"/>
                  <div className="flex justify-evenly w-full p-2 col-span-9">
                    <CircleButton icon="up" />
                    <CircleButton icon="down" />
                    <CircleButton icon="remove" />
                  </div>
                </div>
              </>
            );
          })}

<div className="flex w-full text-center justify-evenly">
  <p>Track count: 9999</p>
  <p>Total time: 999:99</p>
</div>
          <Button color="secondary">
            <NoteIcon />
            Create!
          </Button>
        </div>
      </div>
    </>
  );
}
