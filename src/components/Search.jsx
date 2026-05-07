import { FaSearch } from 'react-icons/fa';
function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-6 relative">
      <input
        type="text"
        placeholder="well Sparrow lets search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white pl-16"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default Search;