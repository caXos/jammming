"use client";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SearchResultsContainer from "@/components/SearchResultsContainer";
import ThemeSelectorContainer from "@/components/ThemeSelectorContainer";
import { useState } from "react";

export default function Home() {
  const [searchParams, setSearchParams] = useState("");
  const handleSearchInput = (event) => {
    setSearchParams(event.target.value);
  };
  const [searchErrors, setSearchErrors] = useState("");

  const validateSearchInput = () => {
    if (!searchParams) {
      setSearchErrors("You need to type something to search for!");
      alert("Error in the search input!");
    } else {
      setSearchErrors("");
      alert("Final search string: " + searchParams);
      setTracks(mockTracks) // Make request to Spotify's API
    }
  };

  const [tracks, setTracks] = useState([]);

  const mockTracks = [
    {
      title: "Título 0",
      artist: "Artista 0",
      album: "Album 0",
      time: "03:00",
    },
    {
      title: "Título 1",
      artist: "Artista 1",
      album: "Album 1",
      time: "03:01",
    },
    {
      title: "Título 2",
      artist: "Artista 2",
      album: "Album 2",
      time: "03:02",
    },
    {
      title: "Título 3",
      artist:
        "Artista 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
      album: "Album 3",
      time: "03:03",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 bg-base-100">
      <Hero />
      <SearchBar
        searchParams={searchParams}
        handleSearchInput={handleSearchInput}
        validateSearchInput={validateSearchInput}
        errorMessage={searchErrors}
      />
      <SearchResultsContainer tracks={tracks} />
      <ThemeSelectorContainer />
    </main>
  );
}
