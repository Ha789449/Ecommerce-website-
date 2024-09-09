import { useState } from 'react';
import { FaBars, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import logo from "/logo.svg";
import { FaBagShopping } from 'react-icons/fa6';
// Uncomment this line if using react-router-dom
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuBars, setisMenuBars] = useState(false)

  const togleMenu = () => {
    setisMenuBars(!isMenuBars)
  }
  const navitems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Parties", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collection", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px- absolute top-0 right-0 left-0 ">
      <nav className="flex justify-between items-center md:py-4 pt-6 pb-4">
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block' />
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-[293px] h-[60px]" />
        </a>
        {/*Shoping & btn */}
        <div className="text-black text-lg md:flex text-center hidden gap-4">
          <a href="/" className="flex items-center gap-2"><FaUser />Account</a>
          <a href="/" className="flex items-center gap-2"> <FaBagShopping />Shopping</a>
        </div>
        {/*  Navbar for sm devices  */}
        <div className='sm:hidden'>
          <button onClick={togleMenu}>
            {isMenuBars ? <FaTimes className='w-5 h-5 text-Black' /> : <FaBars className='w-5 h-5 text-Black' />}
          </button>
        </div>
      </nav>

      <hr />

      {/* Category items */}
      <div className='pt-4'>
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navitems.map(({ title, path }) => (
            <li key={title} className='hover:text-orange-500'>
              {/* Use <Link> if you are using react-router-dom */}
              <Link to={path}>{title}</Link>

            </li>
          ))}
        </ul>
      </div>
      <div>
      <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuBars ? "" : "hidden"}`}>
          {navitems.map(({ title, path }) => (
            <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
              {/* Use <Link> if you are using react-router-dom */}
              <Link to={path}>{title}</Link>

            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
