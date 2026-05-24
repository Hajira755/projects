import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const validateInput = (value) => {
    const regex = /^[A-Za-z\s]*$/;
    setInput(value);
    setError(!regex.test(value));
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-l px-4 py-2"
          value={input}
          onChange={(e) => validateInput(e.target.value)}
        />
        <button className="bg-red-900 text-white px-4 py-2 rounded-r">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {error && <p className="text-red-600 text-sm mt-1">Only letters and spaces are allowed.</p>}
    </div>
  );
};

export default SearchBar;
