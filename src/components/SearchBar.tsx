import React, { useState } from "react";

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.5 17.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM21.71 20.29l-3.83-3.83A8.47 8.47 0 0 0 19.5 10.5c0-4.69-3.81-8.5-8.5-8.5S2.5 5.81 2.5 10.5s3.81 8.5 8.5 8.5a8.47 8.47 0 0 0 6.96-3.71l3.83 3.83a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM3.5 10.5c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5-5.5-2.47-5.5-5.5z" />
          </svg>
        </button>
      </form>
      <h1>Hello 2</h1>
    </div>
  );
};

export default SearchBar;
