import {LOGO_URL} from "/src/utils/config";

const Header = () => {
    return (
      <nav>
        <img src={LOGO_URL} alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </nav>
    );
  };

  export default Header;