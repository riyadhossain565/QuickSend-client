import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import logoGif from "../../assets/logo/logo-gif.gif";
import { IoIosNotifications } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="fixed w-full z-10 bg-gray-900/100 opacity-90">
      <div className="py-4">
        <Container>
          <div className="flex justify-between items-center">
            {/*Logo and title */}
            <Link to="/" className="flex items-center gap-1 text-white">
              <img className="w-8" src={logoGif} alt="" />
              <h2 className="text-xl font-bold cinzel-font">QuickSend</h2>
            </Link>
            <div className="text-white flex items-center">
             <div className="flex items-center gap-3">
             <NavLink to="/">Home</NavLink>
             <IoIosNotifications className="text-2xl" />
             </div>
              <Link className="ml-3" to="/signin">
                Login
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
