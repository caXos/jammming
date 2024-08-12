"use client";
import SearchResults from "./SearchResults";
import TrackList from "./TrackList";
import { useState } from "react";

export default function SearchResultsContainer({ tracks }) {
  const [trackList, setTrackList] = useState(tracks);

  const addTrack = (track) => {
    setTrackList([...trackList, track]);
  };

  const [sortBy, setSortBy] = useState("title");

  const changeSortBy = (desiredSort) => {
    setSortBy(desiredSort);
    sortTracks();
  };

  const sortTracks = () => {
    let sortedTracks = [];
    console.log(sortBy + "no searchresultcontainer");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
        <SearchResults
          tracks={tracks}
          addTrack={addTrack}
          changeSortBy={changeSortBy}
        />
        <TrackList tracks={trackList} />
      </div>
    </>
  );
}
