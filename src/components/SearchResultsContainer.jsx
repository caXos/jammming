"use client";
import { sortTracks } from "@/methods/sortTracks";
import { getNextTracks, getPreviousTracks } from "@/methods/spotifyApis";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchResults from "./SearchResults";
import TrackList from "./TrackList";

export default function SearchResultsContainer({
  foundTracks,
  nextTracksUri,
  setNextTracksUri,
  previousTracksUri,
  setPreviousTracksUri,
  totalTracks,
  offset,
  setOffset,
}) {
  const [trackList, setTrackList] = useState([]);
  const [jammmTracks, setJammmTracks] = useState([]);
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    sortResults();
  }, [sortBy]);

  const addTrack = (track) => {
    setJammmTracks([...jammmTracks, track]);
  };

  const changeSortBy = (desiredSort) => {
    setSortBy(desiredSort);
  };

  const sortResults = () => {
    const sortedTracks = [];
    if (trackList.length > 0) {
      sortTracks([...trackList], sortBy);
    } else {
      sortTracks([...foundTracks], sortBy);
    }
    setTrackList(sortedTracks);
  };

  const moveTrackUp = (index) => {
    if (index > 0) {
      let tempArray = [...jammmTracks];
      let tempTrack1 = jammmTracks[index];
      let tempTrack2 = jammmTracks[index - 1];
      tempArray[index - 1] = tempTrack1;
      tempArray[index] = tempTrack2;
      setJammmTracks(tempArray);
      toast.success("Moved track up!");
    } else {
      toast.error("Cannot move this track up, it is the first!");
    }
  };

  const moveTrackDown = (index) => {
    if (index < jammmTracks.length) {
      let tempArray = [...jammmTracks];
      let tempTrack1 = jammmTracks[index];
      let tempTrack2 = jammmTracks[index + 1];
      tempArray[index + 1] = tempTrack1;
      tempArray[index] = tempTrack2;
      setJammmTracks(tempArray);
      toast.success("Moved track down!");
    } else {
      toast.error("Cannot move this track down, it is the last!");
    }
  };
  const removeTrack = (index) => {
    let newArray = [...jammmTracks];
    newArray.splice(index, 1);
    setJammmTracks(newArray);
    toast.success("Track removed!");
  };

  const submitForm = (jammmName) => {
    toast.info("Submiting Form!");
    console.log(jammmName, jammmTracks);
  };

  const searchNextTracks = async () => {
    setTrackList(new Array());
    toast.info("Clicked to search next tracks");
    const searchNextResponse = await getNextTracks(nextTracksUri);
    const newlyFoundTracks = searchNextResponse.tracks.items;
    setTrackList(newlyFoundTracks);
    setPreviousTracksUri(searchNextResponse.tracks.previous);
    setNextTracksUri(searchNextResponse.tracks.next);
    setOffset(searchNextResponse.tracks.offset);
  };
  
  const searchPreviousTracks = async () => {
    setTrackList(new Array());
    toast.info("Clicked to search previous tracks");
    const searchNextResponse = await getPreviousTracks(previousTracksUri);
    const newlyFoundTracks = searchNextResponse.tracks.items;
    setTrackList(newlyFoundTracks);
    setPreviousTracksUri(searchNextResponse.tracks.previous);
    setNextTracksUri(searchNextResponse.tracks.next);
    setOffset(searchNextResponse.tracks.offset);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
      <SearchResults
        tracks={trackList.length > 0 ? trackList : foundTracks} // Change this to foundTracks
        addTrack={addTrack}
        changeSortBy={changeSortBy}
        offset={offset}
        totalTracks={totalTracks}
        showNextTracksButton={nextTracksUri ? true : false}
        showPreviousTracksButton={previousTracksUri ? true : false}
        searchNextTracks={searchNextTracks}
        searchPreviousTracks={searchPreviousTracks}
      />
      <TrackList
        jammmtracks={jammmTracks}
        moveTrackUp={moveTrackUp}
        moveTrackDown={moveTrackDown}
        removeTrack={removeTrack}
        submitForm={submitForm}
      />
    </div>
  );
}
