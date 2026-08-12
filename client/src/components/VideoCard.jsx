import { Link } from "react-router-dom";



function VideoCard({ video }) {


  const thumbnail =

    video.thumbnailUrl?.startsWith("http")

      ?

      video.thumbnailUrl

      :

      `http://localhost:5000${video.thumbnailUrl}`;







  return (



    <Link


      to={`/video/${video._id}`}


      className="group block"


    >





      <div className="bg-[#151515] rounded-2xl overflow-hidden border border-[#222] hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">








        <div className="relative h-56 overflow-hidden bg-black">





          <img



            src={thumbnail}



            alt={video.title}



            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"



          />








          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>








          <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">


            <span className="text-red-500">


              ▶


            </span>


            Watch


          </div>









          <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">


            {video.category}


          </div>






        </div>









        <div className="p-5">







          <h3


            className="font-bold text-white text-lg leading-snug line-clamp-2 group-hover:text-red-400 transition-colors"


          >


            {video.title}


          </h3>










          <div className="flex items-center gap-3 mt-5">





            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">


              <span className="text-white font-bold">


                {

                  video.uploadedBy?.username

                    ?

                    video.uploadedBy.username
                      .charAt(0)
                      .toUpperCase()

                    :

                    "U"

                }


              </span>


            </div>









            <div className="flex-1 min-w-0">





              <p className="text-sm font-medium text-gray-200 truncate">


                {video.uploadedBy?.username || "Unknown Creator"}


              </p>






              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">


                <span>


                  👁 {video.views || 0} views


                </span>





                <span>


                  •


                </span>





                <span>


                  {video.category}


                </span>


              </div>





            </div>





          </div>









        </div>








      </div>





    </Link>


  );


}



export default VideoCard;