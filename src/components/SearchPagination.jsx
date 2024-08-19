import CircleButton from "./CircleButton";

export default function SearchPagination({showingTracks, totalTracks, leftButtonAction, rigtButtonAction}) {
    const handleLeftButtonClick = () => {

    }

    const handleRightButtonClick = () => {

    }

  return (
    <div
      className="w-full flex flex-row justify-evenly text-accent"
      title={`Showing ${showingTracks} of ${totalTracks} results`}
    >
      <div className="md:tooltip" data-tip="Get previous tracks">
        <CircleButton icon="left" />
      </div>

      <div className="text-center">{showingTracks} of {totalTracks}</div>

      <div className="md:tooltip" data-tip="Get next tracks">
        <CircleButton icon="right" />
      </div>
    </div>
  );
}
