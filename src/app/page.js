"use client";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SearchResultsContainer from "@/components/SearchResultsContainer";
import SpotifyLoginContainer from "@/components/SpotifyLoginContainer";
import ThemeSelectorContainer from "@/components/ThemeSelectorContainer";
import Rules from "@/components/Rules";
import { getTracks, spotifyLogin } from "@/methods/spotifyApis";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [searchParams, setSearchParams] = useState("");
  const [foundTracks, setFoundTracks] = useState([]);
  const [searchErrors, setSearchErrors] = useState("");
  const [spotifyUser, setSpotifyUser] = useState(null);
  const [nextTracksUri, setNextTracksUri] = useState("");
  const [previousTracksUri, setPreviousTracksUri] = useState("");
  const [totalTracks, setTotalTracks] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let windowUri = window.location.href;
    if (windowUri.includes("access_token") && !spotifyUser) {
      getSpotifyUser();
    }
  }, []);

  const handleSearchInput = (event) => {
    setSearchParams(event.target.value);
  };

  const validateSearchInput = async () => {
    if (!searchParams) {
      toast.error("Error in the search input!");
      setSearchErrors("You need to type something to search for!");
    } else {
      setSearchErrors("");
      toast.warning("Searching: " + searchParams); // Change this toast to a promise toast
      const searchResponse = await getTracks(searchParams);
      setFoundTracks(searchResponse.tracks.items);
      setNextTracksUri(searchResponse.tracks.next);
      setPreviousTracksUri(searchResponse.tracks.previous);
      setOffset(searchResponse.tracks.offset);
      setTotalTracks(searchResponse.tracks.total);
    }
  };

  const getSpotifyUser = async () => {
    setSpotifyUser(await spotifyLogin());
    toast.success("Logged to Spotify!", {
      toastId: "loginSuccessToast",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 bg-base-100">
      <Hero />
      <SpotifyLoginContainer spotifyUser={spotifyUser} />
      {!spotifyUser ? (
        ""
      ) : (
        <>
          <SearchBar
            searchParams={searchParams}
            handleSearchInput={handleSearchInput}
            validateSearchInput={validateSearchInput}
            errorMessage={searchErrors}
          />
          <SearchResultsContainer
            foundTracks={foundTracks}
            nextTracksUri={nextTracksUri}
            setNextTracksUri={setNextTracksUri}
            previousTracksUri={previousTracksUri}
            setPreviousTracksUri={setPreviousTracksUri}
            totalTracks={totalTracks}
            offset={offset}
            setOffset={setOffset}
            spotifyUser={spotifyUser}
          />
        </>
      )}
      <Rules />
      <ThemeSelectorContainer />
    </main>
  );
}
