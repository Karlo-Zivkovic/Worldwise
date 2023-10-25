import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

function PageNav() {
  return (
    <nav className="flex items-center justify-between  px-12 py-6 ">
      <Link to="/">
        <img src="logo.png" alt="WorldWise logo" className="h-12" />
      </Link>
      <ul className="flex items-center gap-10 font-medium uppercase text-white">
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink>
            <Button>Login</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
