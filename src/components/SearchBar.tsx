import React, { useState } from "react";

const searchImage = "/search-icon.png";

type SearchBarProps = {
  // Define an onSearch prop type that accepts a search query string and returns void
  onSearch?: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const search = (query: string) => {
    // Do the search operation here and set the search results in the state
    const results = ["Result 1", "Result 2", "Result 3"]; // Sample search results
    setSearchResults(results);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(query); // Call the search function with the entered query
    setQuery(""); // Clear the input field
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full bg-gray-200 px-4 py-2 rounded-md"
        />
        <button type="submit">
          <img src={searchImage} className="h-4 w-4" />
        </button>
      </form>
      {searchResults.length > 0 && (
        <div>
          {searchResults.map((result, index) => (
            <p key={index}>{result}</p>
          ))}
        </div>
      )}
      <h1>Hello 2</h1>
    </div>
  );
};

export default SearchBar;
