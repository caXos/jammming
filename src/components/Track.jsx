import { convertMsToMin } from "@/methods/calculateTotalTime";

export default function Track({ track = null, customClass = '' }) {
  if (track) {
    const concatenateArtistsNames = () => {
      let artistsNames = '';
      let artistsArray = track['artists'];
      artistsArray.forEach((artist, index, artistsArray) => {
        if (index+1 < artistsArray.length) {
          artistsNames += artist.name + ", "
        } else {
          artistsNames += artist.name
        }
      })
      return artistsNames
    }
    return (
      <>
        <div className={`grid grid-cols-3 w-full h-min justify-center text-accent ${customClass}`}>
          <div className="col-span-3 text-center">{track.name}</div>
          <div className="text-xs overflow-clip">{concatenateArtistsNames()}</div>
          <div className="text-xs overflow-clip">{track.album.name}</div>
          <div className="text-xs overflow-clip">{convertMsToMin(track.duration_ms/1000)}</div>
        </div>
      </>
    );
  }
}
