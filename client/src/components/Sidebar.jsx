import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: "🏠"
    },
    {
      name: "Upload Video",
      path: "/upload",
      icon: "⬆️"
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "📁"
    },
    {
      name: "Search",
      path: "/search",
      icon: "🔍"
    }
  ];

  const categories = [
    {
      name: "Gaming",
      icon: "🎮"
    },
    {
      name: "Technology",
      icon: "💻"
    },
    {
      name: "Music",
      icon: "🎵"
    },
    {
      name: "Education",
      icon: "📚"
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/?category=${category}`);
  };

  return (
    <aside className="hidden lg:flex flex-col w-80 min-h-screen bg-[#0b0b0b] border-r border-white/10 px-6 py-8">

      <div className="space-y-3">

        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="
              flex items-center
              gap-5
              w-full
              min-h-[52px]
              px-5
              py-3
              rounded-2xl
              text-gray-400
              hover:text-white
              hover:bg-white/5
              transition-all
              duration-200
              group
            "
          >

            <span className="text-xl w-7 flex justify-center group-hover:scale-110 transition">
              {item.icon}
            </span>

            <span className="font-medium text-[15px] whitespace-nowrap">
              {item.name}
            </span>

          </Link>
        ))}

      </div>


      <div className="mt-12 border-t border-white/10 pt-8">

        <p className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-gray-500
          font-semibold
          mb-6
        ">
          Categories
        </p>


        <div className="space-y-3">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="
                w-full
                flex
                items-center
                gap-5
                min-h-[50px]
                px-5
                py-3
                rounded-2xl
                text-gray-400
                hover:text-white
                hover:bg-white/5
                transition-all
                duration-200
                text-left
                group
              "
            >

              <span className="text-lg w-7 flex justify-center group-hover:scale-110 transition">
                {category.icon}
              </span>

              <span className="font-medium text-[15px] whitespace-nowrap">
                {category.name}
              </span>

            </button>
          ))}

        </div>

      </div>


      <div className="mt-auto pt-10">

        <div className="
          rounded-3xl
          bg-gradient-to-br
          from-[#1c1c1c]
          to-[#101010]
          border
          border-white/10
          p-6
          shadow-xl
        ">

          <h3 className="text-white font-bold text-lg mb-3">
            PhotonTube
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Watch, upload and discover amazing content.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;