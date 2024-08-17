import { convertMsToMin } from "@/methods/calculateTotalTime";
import { concatenateArtistsNames } from "@/methods/concatenateArtistsNames";

export default function Track({ track = null, customClass = "" }) {
  if (track) {
    return (
      <>
        <div
          className={`grid grid-cols-3 w-full h-min justify-center text-accent ${customClass}`}
        >
          <div className="col-span-3 text-center font-extrabold">
            {track.name}
          </div>
          <div className="text-xs overflow-clip">
            {concatenateArtistsNames(track["artists"])}
          </div>
          <div className="text-xs overflow-clip">{track.album.name}</div>
          <div className="text-xs overflow-clip">
            {convertMsToMin(track.duration_ms / 1000)}
          </div>
        </div>
      </>
    );
  }
}
