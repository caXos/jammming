import localFont from "next/font/local";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function Rules() {
  return (
    <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
      <span
        className={`text-2xl text-primary text-center ${amVinylFont.className}`}
      >
        Da Rules
      </span>
      <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full text-accent">
        <ul className="list-disc">
            <li>Jammming! allows users to create playlists directly to their Spotify&apos;s account</li>
            <li>Start by clicking in the fist button to login. Don&apos; worry, Jammming! only requests permission to playlists, nothing else!</li>
            <li>Jammming! does not edit or remove previously created playlists</li>
            <li>Spotify allows the insertion of a maximum of 100 tracks per request, so Jammming is, for now, limited to creating playlists with 100 tracks maximum.</li>
            <li>After creating a playlist successfully, to avoid loosing your search, Jammming cleans only the tracklist. This is to avoid creating repeated playlists </li>
        </ul>
      </div>
    </div>
  );
}
