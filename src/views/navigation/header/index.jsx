import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../components/GoogleIcon";

function Header() {
  const navbarLinks = [
    { name: "Bảng điều khiển", path: "/" },
    { name: "Map", path: "/map" },
    { name: "Chất lượng không khí", path: "/quality" },
  ];

  const [navbar] = useState(navbarLinks);

  return (
    <header className="flex items-center justify-between px-6 h-full">
      <div className="flex items-center gap-3">
        <GoogleIcon name="cloud" size="!text-5xl" color="text-blue-300" />
        <h3 className="text-2xl text-white font-bold tracking-tight">
          V-weather
        </h3>
      </div>

      <nav>
        <ul className="flex gap-8">
          {navbar.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-slate-300 hover:text-blue-400 transition-colors text-lg font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
