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
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 bg-base-100">
      <Hero />
      <SearchBar
        searchParams={searchParams}
        handleSearchInput={handleSearchInput}
        validateSearchInput={validateSearchInput}
        errorMessage={searchErrors}
      />
      <SearchResultsContainer />
      <ThemeSelectorContainer />
    </main>
  );
}
