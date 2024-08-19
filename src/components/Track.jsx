import { convertMsToMin } from "@/methods/calculateTotalTime";
import { concatenateArtistsNames } from "@/methods/concatenateArtistsNames";

export default function Track({ track = null, customClass = "" }) {
  if (track) {
    return (
      <>
        <div
          className={`grid grid-cols-3 w-full h-min justify-center text-accent ${customClass}`}
        >
          <div
            className="col-span-3 text-center font-extrabold"
            title="Track name/title"
          >
            {track.name}
          </div>
          <div className="text-xs overflow-clip" title="Artist(s)">
            {concatenateArtistsNames(track["artists"])}
          </div>
          <div className="text-xs overflow-clip" title="Album name">
            {track.album.name}
          </div>
          <div className="text-xs overflow-clip" title="Duration">
            {convertMsToMin(track.duration_ms / 1000)}
          </div>
        </div>
      </>
    );
  }
}
