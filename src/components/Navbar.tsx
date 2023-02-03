import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar 2xl:px-36 xl:px-24 text-[#F3F0EC] bg-[#252121]">
      <div className="navbar-start ">
        <div className="navbar-center lg:flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/acoustic" className="link link-hover">
                Acoustic
              </Link>
            </li>
            <li>
              <Link to="/electric" className="link link-hover">
                Electric
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
