import React, { useState } from "react";

const searchImage = "/search-icon.png";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
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
          <img src={searchImage} alt="Search icon" />
        </button>
      </form>
      <h1>Hello 2</h1>
    </div>
  );
};

export default SearchBar;
