"use client";
export default function SortRadios({ sortTracks }) {
  const handleClick = (event) => {
    sortTracks(event.target.value);
  };

  return (
    <div className="flex justify-evenly w-full bg-base-100 rounded-md">
      <label
        className="label cursor-pointer"
        onClick={handleClick}
      >
        <span
          className="label-text px-2 text-accent"
          onChange={() => {
            handleClick;
          }}
        >
          Title
        </span>
        <input
          type="radio"
          name="sort-radio"
          className="radio"
          value="title"
          defaultChecked
        />
      </label>
      <label
        className="label cursor-pointer"
        onClick={handleClick}
      >
        <span className="label-text px-2 text-accent">Artist</span>
        <input
          type="radio"
          name="sort-radio"
          className="radio"
          value="artist"
        />
      </label>
      <label className="label cursor-pointer" onClick={handleClick}>
        <span className="label-text px-2 text-accent">Album</span>
        <input type="radio" name="sort-radio" className="radio" value="album" />
      </label>
    </div>
  );
}
