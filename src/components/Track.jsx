export default function Track({
  search = false,
  trackNumber = 0,
  first = false,
  last = false,
  track = null,
}) {
  if (search) {
    return (
      <>
        <div className="grid grid-cols-10 w-full">
          <div>ICO</div>
          <div className="col-span-3">Title</div>
          <div className="col-span-2">Artist</div>
          <div className="col-span-2">Album</div>
          <div>Time</div>
          <div>+</div>
        </div>
      </>
    );
  } else {
    if (first) {
      return (
        <>
          <div className="grid grid-cols-12 w-full">
            <div>{trackNumber}</div>
            <div>ICO</div>
            <div className="col-span-3">Title</div>
            <div className="col-span-2">Artist</div>
            <div className="col-span-2">Album</div>
            <div>Time</div>
            <div>V</div>
            <div>R</div>
          </div>
        </>
      );
    } else if (last) {
      return (
        <>
          <div className="grid grid-cols-12 w-full">
            <div>{trackNumber}</div>
            <div>ICO</div>
            <div className="col-span-3">Title</div>
            <div className="col-span-2">Artist</div>
            <div className="col-span-2">Album</div>
            <div>Time</div>
            <div>^</div>
            <div>R</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="grid grid-cols-13 w-full">
            <div>{trackNumber}</div>
            <div>{track.ico}</div>
            <div className="col-span-3">{track.title}</div>
            <div className="col-span-2">{track.artist}</div>
            <div className="col-span-2">{track.album}</div>
            <div>{track.time}</div>
            <div>^</div>
            <div>V</div>
            <div>R</div>
          </div>
        </>
      );
    }
  }
}
