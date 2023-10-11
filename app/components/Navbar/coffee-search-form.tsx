
import React, { useState, useEffect } from 'react';
import CoffeeSearchForm from './search-form';

const CoffeeSearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
   
    setLoading(false);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  useEffect(() => {
    if (query.trim() !== '') {
      handleSearch();
    }
  }, [query]);

  return (
    <div className="bg-black p-6 ">
      <nav className="bg-black w-full -mb-8 ">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="text-white font-bold text-4xl">
            Co<span className="text-yellow-700">ff</span>ee
          </div>
          <div className="sm:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="flex">
            <CoffeeSearchForm
              query={query}
              onQueryChange={setQuery}
              onSearch={handleSearch}
            />
         
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        {loading ? (
          <p className="mt-4 text-center">Loading...</p>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
          
          </div>
        ) : (
          <p className="mt-4 text-center">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default CoffeeSearchPage;



