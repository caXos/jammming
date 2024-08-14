"use client";
import localFont from "next/font/local";
import Track from "./Track";
import CircleButton from "./CircleButton";
import Button from "./Button";
import NoteIcon from "./Icon_Note";
import { useState, useEffect } from "react";
import ErrorMessageContainer from "./ErrorMessageContainer";
import { toast } from "react-toastify";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function TrackList({ tracks }) {
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
      toast.info("Creating Jamm with name: " + jammmName);
    }
  };


  const calculateTotalTime = () => {
    let hours = 0, minutes = 0, seconds = 0;
    const timeStrings = [];
    tracks.forEach((track) => {
      let splitString = track.time.split(":");
      if (splitString.length === 1) {
        seconds += Number(splitString[0])
      } else {
        if (splitString.length === 2) {
          seconds += Number(splitString[1])
          minutes += Number(splitString[0])
        } else {
          seconds += Number(splitString[2])
          minutes += Number(splitString[1])
          hours += Number(splitString[0])
        }
      }
      timeStrings.push(track.time);
    })
    hours *= 60 * 60;
    minutes *= 60;
    let totalTime = hours + minutes + seconds;
    const hrs = ~~(totalTime / 3600);
    const mins = ~~((totalTime % 3600) / 60);
    const secs = ~~totalTime % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    
    return ret;
  }

  useEffect(() => {
    setTotalTime(calculateTotalTime)
  }, [tracks])

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
            {tracks.map((track, index, mockTracks) => {
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
          </div>

          <div className="flex w-full text-center text-xs justify-evenly">
            <p>Track count: {tracks.length}</p>
            <p>Total time: {totalTime}</p>
          </div>
          <Button
            color="secondary"
            action={handleSubmit}
            disabled={tracks.length === 0 || !jammmName ? true : false}
            tooltipText={tracks.length === 0 || !jammmName ? "Name your jammm and add some tracks to it!" : "All set to create your jammm!"}
          >
            <NoteIcon />
            Create!
          </Button>
        </div>
      </div>
    </>
  );
}
