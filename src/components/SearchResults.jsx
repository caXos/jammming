import localFont from "next/font/local";
import Track from "./Track";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SearchResults() {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-black text-center ${amVinylFont.className}`}
        >
          Tunes found
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full">
          <Track search={true} />
          <Track search={true} />
          <Track search={true} />
          <Track search={true} />
        </div>
      </div>
    </>
  );
}
