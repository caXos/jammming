import localFont from "next/font/local";
import Track from "./Track";
import { render } from "react-dom";

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

    const renderTracks = () => {
        mockTracks.map((track, index, mockTracks) => {
            console.log(track)
            return (<Track key={track.trackNumber}
              trackNumber={track.trackNumber}
              first={index === 0 ? true : false}
              last={index + 1 === mockTracks.length}
              track={track}
            />);
          })
    }
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-black text-center ${amVinylFont.className}`}
        >
          My New Jam!
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full">
          {renderTracks()}
        </div>
      </div>
    </>
  );
}
