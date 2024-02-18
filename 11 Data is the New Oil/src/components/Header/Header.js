import "./Header.css";
import logo from "/img/khana1.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/userContext";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);
  const { userName } = useContext(userContext);
  const loginBtnHandler = () => {
    loginBtn ? setLoginBtn(false) : setLoginBtn(true);
  };

  return (
    <nav className="flex justify-around items-center bg-white flex-wrap p-5">
      <img className="h-16 w-auto" src={logo} alt="logo" />
      <ul className="flex m-0 items-center flex-wrap">
        <li className="list-none p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <Link className="text-black no-underline" to="/">
            Home
          </Link>
        </li>
        <li className="list-none p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          Search
        </li>
        <li className="list-none p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <Link to="/about"> About </Link>
        </li>
        <li className="list-none p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-none p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          Cart
        </li>
        <li className="list-none p-3 mr-2 font-medium cursor-pointer text-[0.8rem]">
          <button
            className="bg-stone-100 px-5 py-3 font-bold login-btn"
            onClick={() => {
              loginBtnHandler();
            }}
          >
            {loginBtn ? "Logout" : "Login"}
          </button>
        </li>
        <li className="list-none p-3 mr-2 font-bold cursor-pointer text-[0.8rem]">
          {loginBtn && "Welcome " + userName}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
