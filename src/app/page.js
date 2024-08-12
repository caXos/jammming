"use client";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SearchResultsContainer from "@/components/SearchResultsContainer";
import ThemeSelectorContainer from "@/components/ThemeSelectorContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 bg-base-100">
      <Hero />
      <SearchBar />
      <SearchResultsContainer />
      <ThemeSelectorContainer />
    </main>
  );
}
