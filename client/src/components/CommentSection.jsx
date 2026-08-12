import { useState, useEffect, useContext } from "react";

import api from "../services/api.js";
import AuthContext from "../context/AuthContext.jsx";

function CommentSection({ videoId }) {
  const { user } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      const response = await api.get(
        `/comments/${videoId}`
      );

      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);


  const addComment = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      await api.post(
        `/comments/${videoId}`,
        {
          text
        }
      );

      setText("");

      fetchComments();

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="mt-10 bg-[#151515] border border-[#262626] rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Comments
      </h2>


      {user ? (
        <div className="flex gap-3 mb-8">

          <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 bg-[#222] border border-[#333] rounded-xl px-4 py-3 outline-none focus:border-red-500 transition"
          />

          <button
            onClick={addComment}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 px-6 rounded-xl font-medium transition disabled:bg-red-900"
          >
            {loading ? "Posting..." : "Post"}
          </button>

        </div>
      ) : (
        <p className="text-gray-400 mb-6">
          Login to comment on this video.
        </p>
      )}



      {comments.length === 0 ? (
        <div className="bg-[#1c1c1c] rounded-xl p-6 text-center text-gray-400">
          No comments yet. Be the first to comment.
        </div>
      ) : (

        <div className="space-y-4">

          {comments.map((comment)=>(

            <div
              key={comment._id}
              className="bg-[#1c1c1c] border border-[#262626] rounded-xl p-5"
            >

              <div className="flex items-center gap-3 mb-3">

                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center font-bold">
                  {comment.user?.username
                    ?.charAt(0)
                    .toUpperCase() || "U"}
                </div>


                <p className="font-semibold">
                  {comment.user?.username || "User"}
                </p>

              </div>


              <p className="text-gray-300">
                {comment.text}
              </p>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default CommentSection;