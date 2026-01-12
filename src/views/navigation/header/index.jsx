import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../components/GoogleIcon";

function Header() {
  const navbarLinks = [
    { name: "Bảng điều khiển", path: "/" },
    { name: "Map", path: "/map" },
    { name: "Chất lượng không khí", path: "/quality" },
  ];

  const languages = [
    { code: "VN", name: "Tiếng Việt" },
    { code: "EN", name: "English" },
  ];

  const [navbar] = useState(navbarLinks);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 h-full backdrop-blur-sm ">
      {/* Logo Section */}
      <div className="flex items-center gap-3 shrink-0">
        <GoogleIcon name="cloud" size="!text-5xl" color="text-blue-300" />
        <h3 className="text-2xl text-white font-bold tracking-tight">
          V-weather
        </h3>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex gap-8">
          {navbar.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-slate-300 hover:text-blue-400 transition-colors text-lg font-medium whitespace-nowrap"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Actions Section */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Search Bar */}
        <div className="search-header flex items-center bg-white/10 backdrop-blur-md px-3 py-0.5 rounded-md gap-2 border border-white/10">
          <GoogleIcon name="search" size="!text-2xl" color="text-white" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="px-3 py-1 rounded-md focus:outline-none bg-transparent placeholder:text-slate-400 text-white w-32 lg:w-48 text-sm"
          />
        </div>
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setIsOpenLang(!isOpenLang)}
            className="flex items-center justify-center gap-2 text-white bg-white/5 hover:bg-white/10 w-[90px] py-1 rounded-md transition-all border border-white/5"
          >
            <GoogleIcon name="language" size="!text-xl" />
            <span className="text-xs font-bold w-5">{currentLang.code}</span>
            <GoogleIcon
              name="expand_more"
              size="!text-lg"
              className={`transition-transform duration-300 ${
                isOpenLang ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpenLang && (
            <div className="absolute right-0 mt-2 w-36 bg-slate-800 border border-white/10 rounded-lg shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsOpenLang(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                      ${
                        currentLang.code === lang.code
                          ? "bg-blue-600 text-white font-bold"
                          : "text-slate-300 hover:bg-white/10"
                      }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
