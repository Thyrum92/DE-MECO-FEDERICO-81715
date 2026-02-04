import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown: oculto en desktop */}
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
            <li><a>Monitores</a></li>
            <li><a>Teclados</a></li>
            <li><a>Mouse</a></li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl" href="/">
          TiendApp
        </a>
      </div>

      {/* Desktop menu: oculto en mobile */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Monitores</a></li>
          <li><a>Teclados</a></li>
          <li><a>Mouse</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <CartWidget />
      </div>
    </div>
  );
}