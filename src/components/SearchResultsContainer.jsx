"use client";
import { extractTracksUris } from "@/methods/extractTracksUris";
import { sortTracks } from "@/methods/sortTracks";
import {
  addTracksToPlaylist,
  createPlaylist,
  getNextTracks,
  getPreviousTracks,
} from "@/methods/spotifyApis";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchResults from "./SearchResults";
import TrackList from "./TrackList";

export default function SearchResultsContainer({
  foundTracks,
  setFoundTracks,
  nextTracksUri,
  setNextTracksUri,
  previousTracksUri,
  setPreviousTracksUri,
  totalTracks,
  offset,
  setOffset,
  spotifyUser,
  setJammmUri,
}) {
  const [jammmTracks, setJammmTracks] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    sortResults();
  }, [sortBy]);

  const addTrack = (track) => {
    if (jammmTracks.length < 100) {
      setJammmTracks([...jammmTracks, track]);
    } else {
      toast.error("Sorry! Maximum number of tracks is 100!");
    }
  };

  const changeSortBy = (desiredSort) => {
    setSortBy(desiredSort);
  };

  const sortResults = () => {
    setFoundTracks(sortTracks([...foundTracks], sortBy));
    setIsLoading(false);
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

  const searchNextTracks = async () => {
    setIsLoading(true);
    setFoundTracks([]);
    const searchNextTracksToast = toast.loading("Searching next tracks");
    const searchNextResponse = await getNextTracks(nextTracksUri);
    const newlyFoundTracks = [...searchNextResponse.tracks.items];
    setFoundTracks(newlyFoundTracks);
    setPreviousTracksUri(searchNextResponse.tracks.previous);
    setNextTracksUri(searchNextResponse.tracks.next);
    setOffset(searchNextResponse.tracks.offset);
    setIsLoading(false);
    changeSortBy("title");
    toast.update(searchNextTracksToast, {
      render: 'Tracks found!',
      type: 'success',
      isLoading: false,
      autoClose: 1000
    });
  };

  const searchPreviousTracks = async () => {
    setIsLoading(true);
    setFoundTracks([]);
    const searchPreviousTracksToast = toast.loading("Searching previous tracks");
    const searchPreviousResponse = await getPreviousTracks(previousTracksUri);
    const newlyFoundTracks = [...searchPreviousResponse.tracks.items];
    setFoundTracks(newlyFoundTracks);
    setPreviousTracksUri(searchPreviousResponse.tracks.previous);
    setNextTracksUri(searchPreviousResponse.tracks.next);
    setOffset(searchPreviousResponse.tracks.offset);
    setIsLoading(false);
    changeSortBy("title");
    toast.update(searchPreviousTracksToast, {
      render: 'Tracks found!',
      type: 'success',
      isLoading: false,
      autoClose: 1000
    });
  };

  const submitForm = async (jammmName) => {
    const submitFormToast = toast.loading("Creating Jammm!")
    const tracksUrisArray = extractTracksUris(jammmTracks);
    const createPlayListResponse = await createPlaylist(
      spotifyUser.id,
      jammmName
    );
    const addTracksResponse = await addTracksToPlaylist(
      createPlayListResponse.id,
      tracksUrisArray
    );
    setJammmUri(createPlayListResponse.external_urls.spotify);
    toast.update(submitFormToast, {
      render: 'Created Jammm!',
      type: 'success',
      isLoading: false,
      autoClose: 1000
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
      <SearchResults
        tracks={foundTracks}
        addTrack={addTrack}
        changeSortBy={changeSortBy}
        offset={offset}
        totalTracks={totalTracks}
        showNextTracksButton={nextTracksUri ? true : false}
        showPreviousTracksButton={previousTracksUri ? true : false}
        searchNextTracks={searchNextTracks}
        searchPreviousTracks={searchPreviousTracks}
        isLoading={isLoading}
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
