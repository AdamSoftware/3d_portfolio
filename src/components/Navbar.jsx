import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
        
      <NavLink to='/' className="w-10 h-10 flex items-center justify-center rounded-lg bg-white font-bold shadow-md hover:scale-105 transition duration-200">
        <p className="blue-gradient_text">AS</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about'             className={({ isActive }) =>
                `${isActive ? "text-blue-600" : "text-black"} hover:text-teal-300 hover:scale-105 transition duration-200`
            }>
          About
        </NavLink>
        <NavLink
            to="/projects"
            className={({ isActive }) =>
                `${isActive ? "text-blue-600" : "text-black"} hover:text-teal-300 hover:scale-105 transition duration-200`
            }
            >
            Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;