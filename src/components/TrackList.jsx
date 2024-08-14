"use client";
import localFont from "next/font/local";
import Track from "./Track";
import CircleButton from "./CircleButton";
import Button from "./Button";
import NoteIcon from "./Icon_Note";
import { useState } from "react";
import ErrorMessageContainer from "./ErrorMessageContainer";
import { toast } from "react-toastify";

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
    time: "50:03",
  },
  {
    trackNumber: 4,
    ico: "ico",
    title: "Título 3",
    artist: "Artista 3",
    album: "Album 3",
    time: "01:03:03",
  },
];

function calculateTotalTime() {
  // let hours = 0, minutes = 0, seconds = 0;
  // const timeStrings = [];
  // mockTracks.forEach((track) => {
  //   let splitString = track.time.split(":");
  //   console.log(splitString)
  //   if (splitString.length === 1) {
  //     seconds += Number(splitString[0])
  //   } else {
  //     if (splitString.length === 2) {
  //       seconds += Number(splitString[1])
  //       minutes += Number(splitString[0])
  //     } else {
  //       seconds += Number(splitString[2])
  //       minutes += Number(splitString[1])
  //       hours += Number(splitString[0])
  //     }
  //   }
  //   timeStrings.push(track.time);
  // })
  // if (seconds > 59) {
  //   minutes += Math.floor(seconds/60);
  //   seconds -= 60;
  // }
  // if 
  // console.log(hours, minutes, seconds)
  // let timeString = "";
  // timeString += hours > 10 ? hours : "0"+hours;
  // timeString += minutes > 10 ? minutes : "0"+minutes;
  // timeString += seconds > 10 ? seconds : "0"+seconds;
  // console.log(timeString)
}

/*
function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}

console.log(
  fancyTimeFormat(1),
  fancyTimeFormat(10),
  fancyTimeFormat(100),
  fancyTimeFormat(1000),
  fancyTimeFormat(10000),
);
*/

// function addTimes(timeArray) {
//   const times = [];
//   mockTracks.forEach((track) => {
//     times.push(track.time)
//   })
//   let mins = times.reduce((acc, time) => {
//     let [h, m] = time.split(':');
//     acc += h*60 + m*1;
//     return acc;
//   }, 0);
//   console.log((mins/60|0) + ':' + ('0'+(mins%60)).slice(-2))
//   // return (mins/60|0) + ':' + ('0'+(mins%60)).slice(-2);
// }

// https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
// https://stackoverflow.com/questions/54323174/how-to-sum-time-string-in-an-array
// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

export default function TrackList({ tracks }) {
  const [jammmName, setJammmName] = useState("");

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
          <button type="button" onClick={calculateTotalTime}>esse</button>

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
            <p>Total time: 999:99</p>
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
