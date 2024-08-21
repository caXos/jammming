import CircleButton from "./CircleButton";

export default function SearchPagination({
  showingTracks,
  totalTracks,
  showLeftButton = false,
  leftButtonAction,
  showRightButton = false,
  rightButtonAction,
}) {
  return (
    <div
      className="w-full grid grid-cols-3 justify-evenly text-accent"
      title={`Showing ${showingTracks + 1} - ${
        50 + showingTracks
      } of ${totalTracks} results`}
    >
      {!showLeftButton ? (
        <span className="transparent text-xs text-transparent">placeholder</span>
      ) : (
        <div
          className="md:tooltip"
          data-tip="Get previous tracks"
          onClick={() => leftButtonAction()}
        >
          <CircleButton icon="left" />
        </div>
      )}

      <div className="text-center">
        {showingTracks + 1} - {50 + showingTracks} of {totalTracks}
      </div>

      {!showRightButton ? (
        <span className="transparent text-xs text-transparent">placeholder</span>
      ) : (
        <div
          className="md:tooltip"
          data-tip="Get next tracks"
          onClick={() => rightButtonAction()}
        >
          <CircleButton icon="right" />
        </div>
      )}
    </div>
  );
}
