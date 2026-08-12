import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import VideoCard from "../components/VideoCard.jsx";
import Loader from "../components/Loader.jsx";

import { searchVideos } from "../services/videoService.js";

function Search() {
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        if (keyword.trim()) {
          const data = await searchVideos(keyword);
          setVideos(data);
        } else {
          setVideos([]);
        }
      } catch (error) {
        console.log(error);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [keyword]);

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Search Results
          </h1>

          {keyword && (
            <p className="text-gray-400 mt-3">
              Showing results for{" "}
              <span className="text-white font-medium">
                "{keyword}"
              </span>
            </p>
          )}
        </div>


        {loading ? (
          <Loader />
        ) : videos.length === 0 ? (
          <div className="bg-[#151515] border border-[#262626] rounded-2xl p-12 text-center">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-xl font-semibold">
              No videos found
            </h2>

            <p className="text-gray-400 mt-2">
              Try searching with another keyword.
            </p>

          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Videos
              </h2>

              <span className="text-gray-400">
                {videos.length} results
              </span>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video._id}
                  video={video}
                />
              ))}
            </div>
          </>
        )}

      </main>
    </div>
  );
}

export default Search;