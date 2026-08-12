import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext.jsx";
import { loginUser } from "../services/authService.js";


function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();



  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      const data = await loginUser({
        email,
        password
      });


      login(data);

      navigate("/");


    }catch(error){

      alert(
        error.response?.data?.message ||
        "Login failed"
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
          Login
        </h1>


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
          Login
        </button>


        <p className="mt-4 text-gray-400">

          Don't have an account?

          <Link
            to="/register"
            className="text-red-500 ml-2"
          >
            Register
          </Link>

        </p>


      </form>


    </div>

  );

}


export default Login;