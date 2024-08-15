"use client";
import calculateTotalTime from "@/methods/calculateTotalTime";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import CircleButton from "./CircleButton";
import ErrorMessageContainer from "./ErrorMessageContainer";
import NoteIcon from "./Icon_Note";
import Track from "./Track";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function TrackList({
  tracks,
  moveTrackUp,
  moveTrackDown,
  removeTrack,
  submitForm,
}) {
  const [jammmName, setJammmName] = useState("");
  const [totalTime, setTotalTime] = useState("0");

  const handleJammmNameInput = (event) => {
    setJammmName(event.target.value);
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!jammmName) {
      setErrorMessage("You need to input a name for your Playlist!");
      toast.error("Error in the Jammm name input!");
    } else {
      setErrorMessage("");
      submitForm(jammmName)
    }
  };

  useEffect(() => {
    setTotalTime(calculateTotalTime(tracks));
  }, [tracks]);

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 mx-2 gap-2 rounded-md w-11/12 max-h-[565px]">
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

          <div className="w-full max-h-[335px] overflow-y-auto">
            {tracks.map((track, index, tracks) => {
              return (
                <div
                  className="w-full grid grid-cols-10 justify-between items-center hover:bg-base-200  rounded-xl"
                  key={"jammmTrack-" + index}
                >
                  <p className="row-span-2 pl-2">{index + 1}: </p>
                  <Track track={track} customClass="col-span-9" />
                  <div className="flex justify-evenly w-full p-2 col-span-9">
                    {index === 0 ? (
                      ""
                    ) : (
                      <div
                        className="md:tooltip"
                        data-tip="Move up"
                        onClick={() => {
                          moveTrackUp(index);
                        }}
                      >
                        <CircleButton icon="up" />
                      </div>
                    )}
                    {index + 1 === tracks.length ? (
                      ""
                    ) : (
                      <div
                        className="md:tooltip"
                        data-tip="Move down"
                        onClick={() => {
                          moveTrackDown(index);
                        }}
                      >
                        <CircleButton icon="down" />
                      </div>
                    )}
                    <div
                      className="md:tooltip"
                      data-tip="Remove"
                      onClick={() => {
                        removeTrack(index);
                      }}
                    >
                      <CircleButton icon="remove" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex w-full text-center text-xs justify-evenly">
            <p>Track count: {tracks.length}</p>
            <p>Total time: {totalTime}</p>
          </div>
          <Button
            color="secondary"
            action={handleSubmit}
            disabled={tracks.length === 0 || !jammmName ? true : false}
            tooltipText={
              tracks.length === 0 || !jammmName
                ? "Name your jammm and add some tracks to it!"
                : "All set to create your jammm!"
            }
          >
            <NoteIcon />
            Create!
          </Button>
        </div>
      </div>
    </>
  );
}
