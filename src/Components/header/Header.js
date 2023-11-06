import "./Header.css";
import logo from "../../Media/logo-movie-nation.png";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <img src={logo} className="header-img" alt="Header"></img>
    </span>
  );
};

export default Header;