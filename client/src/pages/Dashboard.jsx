import { useEffect, useState, useContext } from "react";

import Navbar from "../components/Navbar.jsx";
import VideoCard from "../components/VideoCard.jsx";
import Loader from "../components/Loader.jsx";

import { getVideos, deleteVideo } from "../services/videoService.js";

import AuthContext from "../context/AuthContext.jsx";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyVideos = async () => {
    try {
      const data = await getVideos();

      const myVideos = data.filter(
        (video) =>
          video.uploadedBy?._id === user._id ||
          video.uploadedBy === user._id
      );

      setVideos(myVideos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyVideos();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteVideo(id);

      setVideos(
        videos.filter(
          (video) => video._id !== id
        )
      );
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-[#181818] to-[#111] border border-[#262626] rounded-2xl p-8 mb-10">

          <h1 className="text-4xl font-bold">
            Creator Dashboard
          </h1>

          <p className="text-gray-400 mt-3">
            Manage your uploaded content and track your videos.
          </p>


          <div className="flex gap-6 mt-6">

            <div className="bg-[#222] rounded-xl px-6 py-4">
              <p className="text-gray-400 text-sm">
                Total Videos
              </p>

              <p className="text-2xl font-bold mt-1">
                {videos.length}
              </p>
            </div>


            <div className="bg-[#222] rounded-xl px-6 py-4">
              <p className="text-gray-400 text-sm">
                Creator
              </p>

              <p className="text-2xl font-bold mt-1">
                {user?.username}
              </p>
            </div>

          </div>

        </div>


        {loading ? (
          <Loader />
        ) : videos.length === 0 ? (
          <div className="bg-[#151515] border border-[#262626] rounded-2xl p-12 text-center">

            <div className="text-5xl mb-4">
              🎬
            </div>

            <h2 className="text-xl font-semibold">
              No videos uploaded yet
            </h2>

            <p className="text-gray-400 mt-2">
              Upload your first video and start building your channel.
            </p>

          </div>
        ) : (
          <>

            <h2 className="text-2xl font-bold mb-6">
              Your Videos
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {videos.map((video) => (

                <div
                  key={video._id}
                  className="bg-[#151515] rounded-2xl p-3 border border-[#222]"
                >

                  <VideoCard video={video} />


                  <button
                    onClick={() => handleDelete(video._id)}
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 py-2.5 rounded-xl font-medium transition"
                  >
                    Delete Video
                  </button>

                </div>

              ))}

            </div>

          </>
        )}

      </main>
    </div>
  );
}

export default Dashboard;