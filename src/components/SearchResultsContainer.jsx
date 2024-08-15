"use client";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import TrackList from "./TrackList";

export default function SearchResultsContainer({ tracks }) {
  const [trackList, setTrackList] = useState([]);
  const [jammmTracks, setJammmTracks] = useState([]);
  const [sortBy, setSortBy] = useState("title");

  const addTrack = (track) => {
    setJammmTracks([...jammmTracks, track]);
  };

  const changeSortBy = (desiredSort) => {
    setSortBy(desiredSort);
  };

  useEffect(() => {
    sortTracks();
  }, [sortBy]);

  
  const sortTracks = () => {
    const sortedTracks = [...tracks];
    sortedTracks.sort((t1, t2) => {
      let t1LowerCase = t1[sortBy].toLowerCase();
      let t2LowerCase = t2[sortBy].toLowerCase();
      if (t1LowerCase < t2LowerCase) return -1;
      if (t1LowerCase > t2LowerCase) return 1;
      return 0;
    });
    setTrackList(sortedTracks);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
        <SearchResults
          tracks={trackList.length > 0 ? trackList : tracks}
          addTrack={addTrack}
          changeSortBy={changeSortBy}
        />
        <TrackList tracks={jammmTracks} />
      </div>
    </>
  );
}
