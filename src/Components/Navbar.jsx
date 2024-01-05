import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // backend gdbd hai check pls

  // const reqHelper = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/users/auth");
  //     console.log(response.data);
  //     if (response.data.message === true) {
  //       isLogin = true;
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   reqHelper();
  // }, []);

  // jugaad - local storage s kra gya hai

  let isLogin = localStorage.getItem("token") !== null ? true : false;

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-blue-500 text-gray-200 p-4">
        <div className="container mx-auto font-bold capitalize">
          <div className="flex items-center justify-between">
            <div className=" text-2xl ">
              <Link to="/" className="text-white font-semibold text-xl">
                reachOut connect
              </Link>
            </div>
            {/* Toggle Button - Visible on Small Screens */}
            <button onClick={toggleMenu} className=" md:hidden">
              {isOpen ? "Close" : "Menu"}
            </button>

            {/* Desktop Menu - Visible on Medium and Larger Screens */}
            <ul className="hidden md:flex space-x-4 ">
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/offerings">Offerings</Link>
            </ul>
            <button>
              {isLogin ? (
                <Link to="/" onClick={handleLogOut}>
                  LogOut
                </Link>
              ) : (
                <Link to="/login">LogIn</Link>
              )}
            </button>
          </div>

          {/* Mobile Menu - Visible on Small Screens */}
          {isOpen && (
            <ul className="mt-4 md:hidden flex flex-col">
              <Link to="/" className="py-2">
                home
              </Link>
              <Link to="/about" className="py-2">
                about
              </Link>
              <Link to="/offerings" className="py-2">
                Offerings
              </Link>
              {isLogin ? (
                <Link to="/" onClick={handleLogOut}>
                  LogOut
                </Link>
              ) : (
                <Link to="/login">LogIn</Link>
              )}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
