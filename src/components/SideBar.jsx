import { Link, NavLink, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex w-[30%] flex-col items-center overflow-hidden bg-gray-700 p-10 ">
      <Link to="/">
        <img src="/logo.png" alt="WorldWise logo" className="h-12" />
      </Link>
      <nav className="text-white">
        <ul className="mb-4 mt-6 flex gap-3 text-sm uppercase">
          <li className="rounded-md bg-gray-600 px-4 py-[4px] font-medium">
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li className=" rounded-md bg-gray-600 px-4 py-[4px] font-medium">
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default SideBar;
