import CartWidget from "./CartWidget";
import { Link } from "react-router";

export default function Navbar( {categorias} ) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {categorias.map((categoria)=>(
              <li key={categoria.slug}>
                <a>{categoria.name}</a>
              </li>
          ))}
          </ul>
        </div>

        <Link className="btn btn-ghost text-xl" to="/">
          TiendApp
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {categorias.map((categoria)=>(
              <li key={categoria.slug}>
                <Link to={`/categoria/${categoria.slug}`}>{categoria.name}</Link>
              </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <CartWidget />
      </div>
    </div>
  );
}