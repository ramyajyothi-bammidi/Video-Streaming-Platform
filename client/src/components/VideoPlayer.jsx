import ReactPlayer from "react-player";



function VideoPlayer({ url }) {


  if (!url) {

    return (

      <div className="w-full aspect-video bg-black rounded-xl flex items-center justify-center text-gray-400">

        Video unavailable

      </div>

    );

  }




  const videoUrl =

    url.startsWith("http")

      ? url

      : `http://localhost:5000${url}`;






  return (


    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-[#2a2a2a]">


      <ReactPlayer

        src={videoUrl}

        width="100%"

        height="100%"

        controls

        config={{

          file: {

            attributes: {

              controlsList: "nodownload"

            }

          }

        }}

      />


    </div>


  );

}



export default VideoPlayer;