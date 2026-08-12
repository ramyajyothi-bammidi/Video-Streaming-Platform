import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import CommentSection from "../components/CommentSection.jsx";
import Loader from "../components/Loader.jsx";

import { getVideoById } from "../services/videoService.js";



function Video() {


  const { id } = useParams();


  const viewCounted = useRef(false);



  const [video, setVideo] = useState(null);

  const [loading, setLoading] = useState(true);








  useEffect(()=>{


    const fetchVideo = async()=>{


      try{


        const data =
          await getVideoById(id);



        setVideo(data);



      }
      catch(error){


        console.log(error);


      }
      finally{


        setLoading(false);


      }


    };





    if(!viewCounted.current){


      viewCounted.current = true;


      fetchVideo();


    }



  },[id]);









  if(loading){


    return <Loader />;


  }







  if(!video){


    return (


      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">


        <div className="bg-[#181818] p-8 rounded-xl">


          Video not found


        </div>


      </div>


    );


  }









  return (



    <div className="min-h-screen bg-[#0b0b0b] text-white">



      <Navbar />







      <main className="max-w-6xl mx-auto px-6 py-8">






        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#222]">



          <VideoPlayer


            url={video.videoUrl}


            id={id}


          />



        </div>









        <section className="mt-8">





          <h1 className="text-3xl font-bold leading-tight">


            {video.title}


          </h1>








          <div className="flex flex-wrap gap-3 mt-5">



            <div className="bg-[#181818] px-5 py-3 rounded-xl border border-[#252525]">


              👤 {video.uploadedBy?.username || "Unknown Creator"}


            </div>





            <div className="bg-[#181818] px-5 py-3 rounded-xl border border-[#252525]">


              👁 {video.views || 0} views


            </div>





            <div className="bg-[#181818] px-5 py-3 rounded-xl border border-[#252525]">


              📂 {video.category}


            </div>





          </div>







        </section>









        <section className="mt-8 bg-gradient-to-br from-[#181818] to-[#111] rounded-2xl p-7 border border-[#222]">



          <h2 className="text-xl font-bold mb-4">


            Description


          </h2>





          <p className="text-gray-300 leading-relaxed">


            {video.description || "No description available."}


          </p>





        </section>









        <div className="mt-8">


          <CommentSection

            videoId={id}

          />


        </div>






      </main>





    </div>


  );


}



export default Video;