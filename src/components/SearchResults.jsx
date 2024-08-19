import localFont from "next/font/local";
import CircleButton from "./CircleButton";
import SearchPagination from "./SearchPagination";
import SortRadios from "./SortRadios";
import Track from "./Track";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function SearchResults({
  tracks,
  addTrack,
  changeSortBy,
  showNextTracksButton = false,
  showPreviousTracksButton = false,
  offset,
  totalTracks,
  searchNextTracks,
  searchPreviousTracks,
}) {
  const handleAddButtonClick = (track) => {
    addTrack(track);
  };
  const sortTracks = (filterString) => {
    if (filterString === "title") changeSortBy("title");
    else if (filterString === "artist") changeSortBy("artist");
    else changeSortBy("album");
  };

  if (tracks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
        <span
          className={`text-2xl text-primary text-center ${amVinylFont.className}`}
        >
          No Tunes found yet, mon!
        </span>
        <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full text-accent">
          <span className="text-accent text-center">
            Try searching somethin&apos;
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
          <span
            className={`text-2xl text-primary text-center ${amVinylFont.className}`}
          >
            Tunes found
          </span>
          <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full">
            <span className="text-accent">Sort by:</span>
            <SortRadios sortTracks={sortTracks} />
            <div className="w-full max-h-[335px] overflow-y-auto overflow-x-clip">
              {tracks.map((track, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex items-center py-2 hover:bg-base-200 rounded-md p-2"
                  >
                    <Track track={track} />
                    <div
                      className="md:tooltip"
                      data-tip="Add to tracklist"
                      onClick={() => handleAddButtonClick(track)}
                    >
                      <CircleButton icon="add" />
                    </div>
                  </div>
                );
              })}
            </div>
            <SearchPagination
              showingTracks={offset}
              totalTracks={totalTracks}
              showLeftButton={showPreviousTracksButton}
              leftButtonAction={searchPreviousTracks}
              showRightButton={showNextTracksButton}
              rightButtonAction={searchNextTracks}
            />
          </div>
        </div>
      </>
    );
  }
}
