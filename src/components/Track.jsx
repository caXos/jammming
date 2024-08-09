export default function Track({ track = null }) {
  if (track) {
    return (
      <>
        <div className="grid grid-cols-3 w-full h-min justify-center">
          <div className="col-span-3 text-center">{track.title}</div>
          <div className="text-sm">{track.artist}</div>
          <div className="text-sm">{track.album}</div>
          <div className="text-sm">{track.time}</div>
        </div>
      </>
    );
  }
}
