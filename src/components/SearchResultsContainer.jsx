"use client";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import TrackList from "./TrackList";
import { toast } from "react-toastify";

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

  const moveTrackUp = (index) => {
    if (index > 0) {
      let tempArray = [...jammmTracks];
      let tempTrack1 = jammmTracks[index];
      let tempTrack2 = jammmTracks[index-1];
      tempArray[index-1] = tempTrack1;
      tempArray[index] = tempTrack2;
      setJammmTracks(tempArray)
      toast.success("Moved track up!")
    } else {
      toast.error("Cannot move this track up, it is the first!")
    }
  }

  const moveTrackDown = (index) => {
    if (index < jammmTracks.length) {
      let tempArray = [...jammmTracks];
      let tempTrack1 = jammmTracks[index];
      let tempTrack2 = jammmTracks[index+1];
      tempArray[index+1] = tempTrack1;
      tempArray[index] = tempTrack2;
      setJammmTracks(tempArray)
      toast.success("Moved track down!")
    } else {
      toast.error("Cannot move this track down, it is the last!")
    }
  }
  const removeTrack = (index) => {
    let newArray = [...jammmTracks];
    newArray.splice(index, 1);
    setJammmTracks(newArray);
    toast.success("Track removed!")
  }

  const submitForm = (jammmName) => {
    toast.info("Submiting Form!")
    console.log(jammmName, jammmTracks)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
        <SearchResults
          tracks={trackList.length > 0 ? trackList : tracks}
          addTrack={addTrack}
          changeSortBy={changeSortBy}
        />
        <TrackList tracks={jammmTracks} moveTrackUp={moveTrackUp} moveTrackDown={moveTrackDown} removeTrack={removeTrack} submitForm={submitForm} />
      </div>
    </>
  );
}
