import type { SearchDataType } from "../types/smart-search-type";
import "../styles/smart-search-input.css";

interface SearchResultsFeederProps {
  searchResults: SearchDataType[];
}

function SearchResultsFeeder({ searchResults }: SearchResultsFeederProps) {
  return (
    <div
      style={{
        height: "200px",
        overflowY: "scroll",
        border: "1px solid #bebebe",
        background: "white",
        boxShadow: "#000003",
        transition: "150ms ease-in-out",
      }}
      className="searchResultContainer"
    >
      {searchResults.length ? (
        searchResults.map((result, index) => (
          <div className="searchResultDiv slide-in" key={index}>
            {result.name}
          </div>
        ))
      ) : (
        <div>No match found</div>
      )}
    </div>
  );
}

export default SearchResultsFeeder;
