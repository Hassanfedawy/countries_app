"use client";
import { useState } from "react";
import CountriesFeed from "./components/CountriesFeed";
import data from './data/data.json'; // Your JSON file with country data
import Region from "./components/Region";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('');  // For region filtering
  const [searchResults, setSearchResults] = useState(data);  // Holds search results

  // Filter data based on region
  const filteredData = selectedRegion
    ? searchResults.filter(country => country.region === selectedRegion)
    : searchResults;

  return (
    <div className="bg-Light_Mode_Background dark:bg-Dark_Mode_Background min-h-screen">
      <div className="flex justify-between p-5 items-center">
        <SearchBar data={data} setSearchResults={setSearchResults} />
        <Region setSelectedRegion={setSelectedRegion} />
      </div>
      <CountriesFeed data={filteredData} />
    </div>
  );
}
