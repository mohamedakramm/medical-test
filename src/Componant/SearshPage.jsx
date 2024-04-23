import React, { useState } from 'react';

const SearchResults = ({ results }) => (
  <ul>
    {results.map((result) => (
      <li key={result.id}>{result.name}</li>
    ))}
  </ul>
);

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
  );
};

const SearchPage = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Perform a search using the query string
    // and update the results state with the response
    const searchResults = [
      { id: 1, name: 'Heba Omran' },
      { id: 2, name: 'Home Doctors Radiology' },
      { id: 3, name: 'Tests Physiotherapy CareQuick' },
    ];

    setResults(searchResults);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;