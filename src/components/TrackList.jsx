"use client";
import localFont from "next/font/local";
import Track from "./Track";
import CircleButton from "./CircleButton";
import Button from "./Button";
import NoteIcon from "./Icon_Note";
import { useState } from "react";
import ErrorMessageContainer from "./ErrorMessageContainer";

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

const trackTimes = null;
// https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript

export default function TrackList({ tracks }) {
  const [jammmName, setJammmName] = useState("");

  const handleJammmNameInput = (event) => {
    setJammmName(event.target.value);
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!jammmName) {
      setErrorMessage("You need to input a name for your Playlist!");
      alert("erro");
    } else {
      setErrorMessage("");
      alert(jammmName);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 mx-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-primary text-center ${amVinylFont.className}`}
        >
          My New Jammm!
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full text-accent">
          <div className="indicator my-1">
            <span className="indicator-item badge">Required</span>
            <input
              type="text"
              placeholder="My awesome jammm!"
              className="input input-bordered w-full max-w-xs text-accent"
              value={jammmName}
              onInput={handleJammmNameInput}
            />
          </div>

          <ErrorMessageContainer error={errorMessage} />

          {mockTracks.map((track, index, mockTracks) => {
            return (
              <div
                className="w-full grid grid-cols-10 justify-between items-center hover:bg-base-200 "
                key={"jammmTrack-" + index}
              >
                <p className="row-span-2 pl-2">{index + 1}: </p>
                <Track track={track} customClass="col-span-9" />
                <div className="flex justify-evenly w-full p-2 col-span-9">
                  {index === 0 ? (
                    ""
                  ) : (
                    <div className="md:tooltip" data-tip="Move up">
                      <CircleButton icon="up" />
                    </div>
                  )}

                  {index + 1 === mockTracks.length ? (
                    ""
                  ) : (
                    <div className="md:tooltip" data-tip="Move down">
                      <CircleButton icon="down" />
                    </div>
                  )}

                  <div className="md:tooltip" data-tip="Remove">
                    <CircleButton icon="remove" />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex w-full text-center justify-evenly">
            <p>Track count: 9999</p>
            <p>Total time: 999:99</p>
          </div>
          <Button color="secondary" action={handleSubmit}>
            <NoteIcon />
            Create!
          </Button>
        </div>
      </div>
    </>
  );
}
