import { Link } from "react-router-dom";
import Logo from "../assets/imgs/DevGramLogo.svg";
import { User } from "iconsax-react";

const style = {
  container: {
    borderBottom: "1px solid #aaa",
    padding: "10px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    color: "#555",
    textDecoration: "none",
  },
  img: {
    width: "50px",
  },
};

const Navbar = () => {
  return (
    <div style={style.container}>
      <Link to="/app/newsfeed">
        <img src={Logo} style={style.img} alt="Logo" />
      </Link>
      <div>
        <Link style={style.links} to="/app/profile">
          <User /> Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
