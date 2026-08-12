import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center bg-[#161616] border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/20 focus-within:border-red-500/60 transition-all duration-300"
    >
      <input
        type="text"
        placeholder="Search videos..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 h-12 bg-transparent px-5 text-sm md:text-base text-white placeholder-gray-500 outline-none"
      />

      <button
        type="submit"
        className="h-12 w-14 mr-1 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white flex items-center justify-center text-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-md shadow-red-900/30"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;