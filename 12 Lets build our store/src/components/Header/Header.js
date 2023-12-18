import "./Header.css";
import logo from "/img/khana1.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";
import userContext from "../../utils/userContext";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userName } = useContext(userContext);
  const { setUserName } = useContext(userContext);
  const loginLogoutHandler = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName("");
    } else {
      const name = prompt("Hey there, what is your name?");
      if (name) {
        setUserName(name);
        setIsLoggedIn(true);
      }
    }
  };
  //subscribing our store using selector
  const cart = useSelector((store) => store.cart.items);

  return (
    <nav className="flex justify-around items-center bg-white flex-wrap p-5">
      <img className="h-8 md:h-12 lg:h-16 w-auto" src={logo} alt="logo" />
      <ul className="flex m-0 items-center flex-wrap">
        <li className="list-none p-2 md:p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <Link className="text-black no-underline" to="/">
            Home
          </Link>
        </li>
        <li className="list-none p-2 md:p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          Search
        </li>
        <li className="list-none p-2 md:p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <Link to="/about"> About </Link>
        </li>
        <li className="list-none p-2 md:p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-none p-2 md:p-3 mr-2 font-medium cursor-pointer text-[0.8rem] relative">
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            <div className="absolute top-[-4px] right-[-10px] md:top-0 md:right-[-4px] w-5 h-5 flex justify-center items-center bg-black rounded-full">
              <span className="font-bold text-white ">{cart.length}</span>
            </div>
          </Link>
        </li>
        <li className="list-none p-2 md:p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <button
            className="bg-stone-100 px-5 py-3 font-bold login-btn"
            onClick={() => {
              loginLogoutHandler();
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
        <li className="list-none p-2 md:p-3 mr-2 font-bold cursor-pointer text-[0.8rem]">
          {isLoggedIn && "Welcome " + userName}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
