import "./Header.css";
import logo from "/img/khana.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);

  const loginBtnHandler = () => {
    loginBtn ? setLoginBtn(false) : setLoginBtn(true);
  };

  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Search</li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
        <li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtnHandler();
            }}
          >
            {loginBtn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
