import { useState } from "react";
import { sampleSearchResults } from "../data/sample-search-result";
import SearchResultsFeeder from "./SearchResults";
import { type SearchDataType } from "../types/smart-search-type";
import SmartSearchInput from "./SmartSearchInput";

function SmartSearchInputWrapper() {
  const [searchResults, setSearchResults] =
    useState<SearchDataType[]>(sampleSearchResults);

  const debounceFn = (fn: (searchValue: string) => void, delay: number) => {
    let debouncedTimer: number;

    return (searchValue: string) => {
      clearTimeout(debouncedTimer);
      debouncedTimer = setTimeout(() => {
        fn(searchValue);
      }, delay);
    };
  };

  const onChange = (searchValue: string) => {
    console.log("value change", searchValue);
    const filteredSearchResults = sampleSearchResults.filter((result) => {
      console.log(result, result.name.includes(searchValue));
      if (result.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return result;
      }
    });
    setSearchResults(filteredSearchResults);
  };

  const debouncedOnChange = debounceFn(onChange, 400);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SmartSearchInput onChange={debouncedOnChange} />
      <SearchResultsFeeder searchResults={searchResults} />
    </div>
  );
}

export default SmartSearchInputWrapper;
