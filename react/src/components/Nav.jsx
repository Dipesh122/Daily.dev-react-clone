import { Shapes, Menu } from "lucide-react";
import "../nav.css";
import logo from "../assets/img/logo.png";

export default function Nav() {
  return (
    <nav className="nav-bar bg-header h-14 text-white flex items-center justify-between">
      <span className="ml-2 hidden max-md:block">
        <Menu />
      </span>
      <div className="flex">
        <img className="logo" src={logo} alt="logo" />
        <div className="ml-1 logo-name">
          <h1>
            <b>daily</b>.dev
          </h1>
        </div>
      </div>
      <div>
      <button className="max-md:block hidden add-new-button mr-3 border rounded-xl py-1 font-bold px-3 text-sm">New post</button>
      </div>
      <div className="max-md:hidden">
        <ul className="flex items-center">
          <li className="add-new-button mr-3 border rounded-xl py-1.5 font-bold px-4">
            <button>New post</button>
          </li>
          <li className="bell-icon mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </li>
          <li>
            <Shapes className="collection-icon mr-3" />
          </li>
          <li className="profile text-center flex items-center">
            <h1 className="font-bold">10</h1>
          </li>
          <li className="profile-logo mr-3 flex items-center font-bold">
            <h1>D</h1>
          </li>
        </ul>
      </div>
    </nav>
  );
}
