import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService.js";


function Register(){

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();



  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      await registerUser({
        username,
        email,
        password
      });


      navigate("/login");


    }catch(error){

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center">


      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-96"
      >

        <h1 className="text-2xl font-bold mb-6">
          Register
        </h1>


        <input
          placeholder="Username"
          className="w-full bg-gray-800 p-3 rounded mb-4"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />


        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-800 p-3 rounded mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-800 p-3 rounded mb-4"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          className="w-full bg-red-600 py-3 rounded"
        >
          Register
        </button>


        <p className="mt-4 text-gray-400">

          Already have account?

          <Link
            to="/login"
            className="text-red-500 ml-2"
          >
            Login
          </Link>

        </p>


      </form>


    </div>

  );

}


export default Register;