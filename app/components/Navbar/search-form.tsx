// // MovieSearchForm.tsx
// import React from 'react';

// interface CoffeeSearchFormProps {
//   query: string;
//   onQueryChange: (query: string) => void;
//   onSearch: () => void;
// }

// const MovieSearchForm: React.FC<CoffeeSearchFormProps> = ({
//   query,
//   onQueryChange,
//   onSearch,
// }) => {
//   return (
//     <div className="flex">
//       <input
//         type="text"
//         placeholder="Search for movies..."
//         className="search px-40 py-1 rounded-full border border-white text-white bg-black text-lg mr-96 focus:outline-none focus:ring focus:border-white-300"
//         value={query}
//         onChange={(e) => onQueryChange(e.target.value)}
//       />
//       <button
//         onClick={onSearch}
//         className="text-lg font-semibold ml-90 bg-yellow-700 px-9 py-2 rounded-lg text-white"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default MovieSearchForm;


import React from 'react';

interface CoffeeSearchFormProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
}

const CoffeeSearchForm: React.FC<CoffeeSearchFormProps> = ({
  query,
  onQueryChange,
  onSearch,
}) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search px-4 py-2 rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-300 mb-2 sm:mb-0"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="text-lg font-semibold ml-0 sm:ml-2 bg-yellow-700 px-4 py-2 rounded-lg text-white"
      >
        Search
      </button>
    </div>
  );
};

export default CoffeeSearchForm;

