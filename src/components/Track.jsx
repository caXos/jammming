import { convertMsToMin } from "@/methods/calculateTotalTime";
import { concatenateArtistsNames } from "@/methods/concatenateArtistsNames";
import ArrowTopRightIcon from "./Icon_ArrowTopRight";

export default function Track({ track = null, customClass = "" }) {
  const openInSpotify = () => {
    window.open(track.external_urls.spotify, '_blank')
  } 
  console.log(track)

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
            className="col-span-6 text-xs overflow-clip border-e-2"
            title="Album name"
          >
            {track.album.name}
          </div>
          <div className="col-span-1 text-xs overflow-clip" title="Duration">
            {convertMsToMin(track.duration_ms / 1000)}
          </div>
          <button type="button" aria-label="View in Spotify" title="View in Spotify" onClick={openInSpotify}>
            <ArrowTopRightIcon />
          </button>
        </div>
      </>
    );
  }
}
