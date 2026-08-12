import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext.jsx";
import SearchBar from "./SearchBar.jsx";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-[1500px] mx-auto px-8 py-4">

        <div className="flex items-center justify-between gap-10">


          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
          >

            <div
              className="
                w-11
                h-11
                rounded-2xl
                bg-gradient-to-br
                from-red-500
                to-red-800
                flex
                items-center
                justify-center
                shadow-lg
                shadow-red-900/40
              "
            >

              <span className="text-xl font-black">
                P
              </span>

            </div>


            <div className="text-2xl font-black tracking-tight">

              <span className="text-white">
                Photon
              </span>

              <span className="text-red-500">
                Tube
              </span>

            </div>

          </Link>




          {/* Search */}

          <div className="hidden md:flex flex-1 max-w-2xl">

            <SearchBar />

          </div>




          {/* Actions */}

          <div className="flex items-center gap-4 shrink-0">


            {user ? (

              <>


                <Link
                  to="/upload"
                  className="
                    hidden sm:flex
                    items-center
                    justify-center
                    gap-2
                    h-11
                    px-5
                    rounded-full
                    bg-gradient-to-r
                    from-red-600
                    to-red-500
                    text-sm
                    font-bold
                    shadow-lg
                    shadow-red-900/30
                    hover:shadow-red-500/30
                    transition
                  "
                >

                  <span className="text-lg leading-none">
                    +
                  </span>

                  <span>
                    Upload
                  </span>

                </Link>



                <div className="relative">


                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-gradient-to-br
                      from-zinc-700
                      to-zinc-900
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-base
                      font-bold
                      shadow-lg
                      hover:border-red-500
                      transition
                    "
                  >

                    {
                      user.username
                      ? user.username.charAt(0).toUpperCase()
                      : "U"
                    }

                  </button>



                  {menuOpen && (

                    <div className="
                      absolute
                      right-0
                      mt-4
                      w-64
                      bg-[#161616]
                      border
                      border-white/10
                      rounded-2xl
                      shadow-2xl
                      p-4
                    ">


                      <div className="
                        px-3
                        pb-4
                        mb-3
                        border-b
                        border-white/10
                      ">

                        <p className="font-semibold">
                          {user.username}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          Creator Account
                        </p>

                      </div>



                      <Link
                        to="/dashboard"
                        className="
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          rounded-xl
                          hover:bg-white/5
                          transition
                        "
                      >
                        📁 Dashboard
                      </Link>


                      <Link
                        to="/upload"
                        className="
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          rounded-xl
                          hover:bg-white/5
                          transition
                        "
                      >
                        ⬆️ Upload Video
                      </Link>


                      <button
                        onClick={handleLogout}
                        className="
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          rounded-xl
                          text-red-400
                          hover:bg-red-500/10
                          text-left
                        "
                      >
                        🚪 Logout
                      </button>


                    </div>

                  )}


                </div>


              </>


            ) : (

              <>


                <Link
                  to="/login"
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    text-gray-300
                    hover:bg-white/5
                    hover:text-white
                    font-medium
                  "
                >
                  Login
                </Link>



                <Link
                  to="/register"
                  className="
                    px-6
                    py-2.5
                    rounded-full
                    bg-gradient-to-r
                    from-red-600
                    to-red-500
                    font-bold
                    shadow-lg
                    shadow-red-900/30
                  "
                >
                  Join PhotonTube
                </Link>


              </>

            )}


          </div>


        </div>

      </div>

    </nav>
  );
}

export default Navbar;