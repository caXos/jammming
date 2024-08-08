import localFont from "next/font/local";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function TrackList() {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-black text-center ${amVinylFont.className}`}
        >
          My New Jam!
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full">
          <p>Track</p>

        </div>
      </div>
    </>
  );
}
