export default function Track({ track = null, customClass = '' }) {
  if (track) {
    return (
      <>
        <div className={`grid grid-cols-3 w-full h-min justify-center ${customClass}`}>
          <div className="col-span-3 text-center">{track.title}</div>
          <div className="text-xs overflow-clip">{track.artist}</div>
          <div className="text-xs overflow-clip">{track.album}</div>
          <div className="text-xs overflow-clip">{track.time}</div>
        </div>
      </>
    );
  }
}
