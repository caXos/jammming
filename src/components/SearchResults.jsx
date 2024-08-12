import localFont from "next/font/local";
import Track from "./Track";
import CircleButton from "./CircleButton";
import SortRadios from "./SortRadios";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SearchResults() {
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
      artist:
        "Artista 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
      album: "Album 3",
      time: "03:03",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-primary text-center ${amVinylFont.className}`}
        >
          Tunes found
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full">
          <span className="text-accent">Sort by:</span>
          <SortRadios />
          {mockTracks.map((track, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center py-2 hover:bg-base-200 rounded-md p-2"
              >
                <Track track={track} />
                <div className="md:tooltip" data-tip="Add to tracklist">
                  <CircleButton icon="add" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
