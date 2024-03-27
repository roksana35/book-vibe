import { NavLink } from "react-router-dom";


const Navbar = () => {
    

    return (
        <div className="navbar bg-base-100   px-4 shadow-lg sticky h-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm flex gap-6  dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 ">
      <NavLink exact to="/" className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Home</NavLink>
      <NavLink to="/listedbooks" className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Listed Books</NavLink>
      <NavLink to="/pagesread" className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Pages to Read</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl lg:text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink exact to="/" className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Home</NavLink>
    <NavLink to="/listedbooks" className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Listed Books</NavLink>
    <NavLink to="/pagesread" className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Pages to Read</NavLink>
    </ul>
  </div>
  <div className="navbar-end mr-2">
    <button className="btn bg-green-500 px-2 py-1 lg:px-4 lg:py-2 rounded-lg text-white mr-4">Sign In</button>
    <button className="btn bg-sky-400 px-2 py-1 lg:px-4 lg:py-2 rounded-lg text-white">Sign Up</button>
  </div>
</div>
    );
};

export default Navbar;