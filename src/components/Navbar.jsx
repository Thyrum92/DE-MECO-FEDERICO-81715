import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router";

export default function Navbar( {categorias} ) {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-md border-b border-base-200">
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
              <li key={categoria.id}>
                <NavLink className={({isActive}) => isActive ? 'btn btn-sm btn-primary' : 'rounded-lg px-3 py-2 hover:bg-base-200 transition-colors text-sm font-medium'} to={`/categoria/${categoria.id}`}>{categoria.name}</NavLink>
              </li>
          ))}
          </ul>
        </div>

        <Link className="btn btn-ghost text-xl font-extrabold tracking-tight" to="/">
          TiendApp
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {categorias.map((categoria)=>(
              <li key={categoria.id}>
                <NavLink className={({isActive}) => isActive ? 'btn btn-sm btn-primary' : 'rounded-lg px-3 py-2 hover:bg-base-200 transition-colors text-sm font-medium'} to={`/categoria/${categoria.id}`}>{categoria.name}</NavLink>
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