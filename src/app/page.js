"use client";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SearchResultsContainer from "@/components/SearchResultsContainer";
import SpotifyLoginContainer from "@/components/SpotifyLoginContainer";
import ThemeSelectorContainer from "@/components/ThemeSelectorContainer";
import { getTracks, spotifyLogin } from "@/methods/spotifyApis";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [searchParams, setSearchParams] = useState("");
  const [tracks, setTracks] = useState([]);
  const [searchResponse, setSearchResponse] = useState(null)
  const [searchErrors, setSearchErrors] = useState("");
  const [spotifyUser, setSpotifyUser] = useState(null);

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
      // setTracks(searchResponse.tracks.items);
      setSearchResponse(searchResponse);
      console.log(searchResponse);
    }
  };

  const getSpotifyUser = async () => {
    setSpotifyUser(await spotifyLogin());
    toast.success("Logged to Spotify!");
  };

  useEffect(() => {
    let windowUri = window.location.href;
    if (windowUri.includes("access_token")) {
      getSpotifyUser();
    }
  }, []);

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
          {/* <SearchResultsContainer
            tracks={tracks}
            nextTracksUri={firstSearchResponse.tracks.next}
            totalTracksFound={firstSearchResponse.tracks.total}
          /> */}
          {/* <SearchResultsContainer tracks={tracks}  /> */}
          <SearchResultsContainer searchResponse={searchResponse}  />
        </>
      )}
      <ThemeSelectorContainer />
    </main>
  );
}
