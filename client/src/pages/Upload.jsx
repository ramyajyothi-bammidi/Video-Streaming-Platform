import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { uploadVideo } from "../services/videoService.js";

function Upload() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile || !thumbnailFile) {
      alert("Please select both video and thumbnail files.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("video", videoFile);
      formData.append("thumbnail", thumbnailFile);

      await uploadVideo(formData);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Video upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-[#151515] border border-[#262626] rounded-2xl p-8 shadow-xl">

          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              Upload Video
            </h1>
            <p className="text-gray-400 mt-2">
              Share your content with the PhotonTube community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Video Title
              </label>

              <input
                type="text"
                placeholder="Enter video title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 focus:border-red-500 outline-none transition"
                required
              />
            </div>


            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Description
              </label>

              <textarea
                placeholder="Describe your video..."
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                rows="5"
                className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 resize-none focus:border-red-500 outline-none transition"
              />
            </div>


            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                className="w-full bg-[#222] border border-[#333] rounded-xl px-4 py-3 focus:border-red-500 outline-none"
                required
              >
                <option value="">
                  Select Category
                </option>
                <option value="Education">
                  Education
                </option>
                <option value="Technology">
                  Technology
                </option>
                <option value="Gaming">
                  Gaming
                </option>
                <option value="Music">
                  Music
                </option>
                <option value="Entertainment">
                  Entertainment
                </option>
                <option value="Sports">
                  Sports
                </option>
              </select>
            </div>


            <div className="grid md:grid-cols-2 gap-5">

              <label className="bg-[#202020] border border-dashed border-gray-600 rounded-xl p-5 cursor-pointer hover:border-red-500 transition">
                <p className="font-medium mb-2">
                  🎬 Video File
                </p>

                <p className="text-sm text-gray-400 mb-3">
                  {videoFile?.name || "Choose video"}
                </p>

                <input
                  type="file"
                  accept="video/*"
                  onChange={(e)=>setVideoFile(e.target.files[0])}
                  className="hidden"
                  required
                />
              </label>


              <label className="bg-[#202020] border border-dashed border-gray-600 rounded-xl p-5 cursor-pointer hover:border-red-500 transition">
                <p className="font-medium mb-2">
                  🖼 Thumbnail
                </p>

                <p className="text-sm text-gray-400 mb-3">
                  {thumbnailFile?.name || "Choose thumbnail"}
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e)=>setThumbnailFile(e.target.files[0])}
                  className="hidden"
                  required
                />
              </label>

            </div>


            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Uploading..." : "Publish Video"}
            </button>

          </form>

        </div>
      </main>
    </div>
  );
}

export default Upload;