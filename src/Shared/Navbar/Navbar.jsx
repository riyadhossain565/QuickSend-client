import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import logoGif from "../../assets/logo/logo-gif.gif";
import { IoIosNotifications } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "@/src/Provider/AuthProvider";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import avatarImg from "../../assets/login/placeholder.jpg";
import useUserRole from "@/src/Hooks/useUserRole/useUserRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userRole] = useUserRole();

  const { role } = userRole || {};

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User successfully logged out");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

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
            <div className="text-white flex items-center ">
              <div className="flex items-center gap-3 mr-4">
                <NavLink
                  to="/"
                  className="text-[#f39c12] hover:underline"
                >
                  Home
                </NavLink>
                <IoIosNotifications className="text-2xl cursor-pointer hover:text-[#f39c12] " />
              </div>
              {user ? (
                <>
                  <Avatar
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 cursor-pointer border-2 border-[#f39c12]"
                  >
                    <AvatarImage
                      src={user && user?.photoURL ? user?.photoURL : avatarImg}
                      alt="Profile Picture"
                      className="rounded-full "
                    />
                  </Avatar>

                  {isOpen && (
                    <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-black overflow-hidden right-10 top-16 text-sm">
                      <div className="px-4 py-3 font-semibold">
                        <p title="User Name">{user?.displayName}</p>
                      </div>

                      {role === "user" && (
                        <div className="px-4 py-3 hover:text-black hover:underline hover:bg-neutral-100 transition font-semibold">
                          <Link to="/dashboard/book-parcel">Dashboard</Link>
                        </div>
                      )}
                      {role === "deliveryMan" && (
                        <div className="px-4 py-3 hover:text-black hover:underline hover:bg-neutral-100 transition font-semibold">
                          <Link to="/dashboard/my-delivery-list">Dashboard</Link>
                        </div>
                      )}
                      {role === "admin" && (
                        <div className="px-4 py-3 hover:text-black hover:underline hover:bg-neutral-100 transition font-semibold">
                          <Link to="/dashboard/statistics">Dashboard</Link>
                        </div>
                      )}

                      <div
                        onClick={handleLogout}
                        className="px-4 py-3 hover:text-black hover:underline hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Logout
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className="ml-3 bg-[#f39c12] px-5 py-2 rounded-lg transition hover:bg-[#7a4e09]"
                  to="/signin"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
