import logo from "/img/khana.png";
import { useState } from "react";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);

  const loginBtnHandler = () => {
    loginBtn ? setLoginBtn(false) : setLoginBtn(true);
  };

  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>
          <i className="fa fa-search"></i> Search
        </li>
        <li>Categories</li>
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
