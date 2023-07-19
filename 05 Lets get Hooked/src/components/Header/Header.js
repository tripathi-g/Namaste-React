import logo from "/img/khana.png";

const Header = () => {
    return (
      <nav>
        <img src={logo} alt="logo" />
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