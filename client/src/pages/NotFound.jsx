import { Link } from "react-router-dom";



function NotFound(){


  return (


    <div className="min-h-screen bg-[#0f0f0f] flex flex-col justify-center items-center">


      <h1 className="text-7xl font-bold text-red-600">


        404


      </h1>




      <p className="text-xl text-gray-400 mt-4">


        Page Not Found


      </p>





      <Link


        to="/"


        className="mt-8 bg-red-600 px-6 py-3 rounded-full hover:bg-red-700"


      >


        Go Home


      </Link>




    </div>


  );


}



export default NotFound;