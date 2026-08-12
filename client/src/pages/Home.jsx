import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import VideoCard from "../components/VideoCard.jsx";
import Loader from "../components/Loader.jsx";

import { getVideos } from "../services/videoService.js";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [
    { name: "All", icon: "🔥" },
    { name: "Education", icon: "📚" },
    { name: "Technology", icon: "💻" },
    { name: "Gaming", icon: "🎮" },
    { name: "Music", icon: "🎵" },
    { name: "Entertainment", icon: "🎬" },
    { name: "Sports", icon: "⚽" }
  ];

  const selectedCategory = searchParams.get("category") || "All";

  const fetchVideos = async (category) => {
    try {
      setLoading(true);

      const data = await getVideos(category);

      setVideos(data);
    } catch (error) {
      console.log(error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(selectedCategory);
  }, [selectedCategory]);

  const changeCategory = (category) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8">
          <section className="mb-10">
            <div className="mb-6">
              <h1 className="text-4xl font-black">
                Discover
              </h1>

              <p className="text-gray-500 mt-2">
                Explore videos from the PhotonTube community
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => changeCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 font-medium ${
                    selectedCategory === category.name
                      ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/30"
                      : "bg-[#151515] border-[#292929] text-gray-300 hover:bg-[#222] hover:border-[#444]"
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-7">
              <div>
                <h2 className="text-3xl font-bold">
                  {selectedCategory === "All"
                    ? "Latest Videos"
                    : selectedCategory}
                </h2>

                <p className="text-gray-500 mt-1">
                  Fresh content uploaded by creators
                </p>
              </div>

              <div className="bg-[#181818] border border-[#292929] px-4 py-2 rounded-full text-sm text-gray-400">
                {videos.length} videos
              </div>
            </div>

            {loading ? (
              <Loader />
            ) : videos.length === 0 ? (
              <div className="rounded-2xl bg-[#151515] border border-[#222] p-12 text-center">
                <div className="text-5xl mb-5">
                  📺
                </div>

                <h3 className="text-xl font-bold mb-2">
                  No videos found
                </h3>

                <p className="text-gray-500">
                  Try another category or upload your first video.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {videos.map((video) => (
                  <VideoCard
                    key={video._id}
                    video={video}
                  />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;