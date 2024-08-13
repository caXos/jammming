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
    sortedTracks = tracks.toSorted((t1, t2) => {
      let t1LowerCase = t1[sortBy].toLowerCase();
      let t2LowerCase = t2[sortBy].toLowerCase();
      if (t1LowerCase < t2LowerCase) return -1;
      if (t1LowerCase > t2LowerCase) return 1;
      return 0;
    });
    setTrackList(sortedTracks)
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
