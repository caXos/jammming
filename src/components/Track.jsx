import { convertMsToMin } from "@/methods/calculateTotalTime";
import { concatenateArtistsNames } from "@/methods/concatenateArtistsNames";

export default function Track({ track = null, customClass = "" }) {
  if (track) {
    return (
      <>
        <div
          className={`grid grid-cols-12 gap-x-2 w-full h-min justify-center text-accent ${customClass}`}
        >
          <div
            className="col-span-12 text-center font-extrabold"
            title="Track name/title"
          >
            {track.name}
          </div>
          <div
            className="col-span-4 text-xs overflow-clip border-e-2"
            title="Artist(s)"
          >
            {concatenateArtistsNames(track["artists"])}
          </div>
          <div
            className="col-span-7 text-xs overflow-clip border-e-2"
            title="Album name"
          >
            {track.album.name}
          </div>
          <div className="col-span-1 text-xs overflow-clip" title="Duration">
            {convertMsToMin(track.duration_ms / 1000)}
          </div>
        </div>
      </>
    );
  }
}
