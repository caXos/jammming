import localFont from "next/font/local";
import Image from "next/image";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 mt-2 p-2 rounded-md w-11/12">
        <div className="flex flex-col items-center md:items-start justify-between md:flex-row">
          <Image
            src="/Disque_Vinyl.svg"
            alt="Vinyl Disc"
            width={100}
            height={100}
          />
          <span
            className={`text-6xl md:text-9xl text-black align-baseline ${amVinylFont.className}`}
          >
            Jammming
          </span>
        </div>

        <p className="py-6 text-center text-accent text-xl">
          How &apos;bout get jammming and grooving and create new playlists to
          your Spotify account?
        </p>

      </div>
    </>
  );
}
