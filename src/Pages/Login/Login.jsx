import bgImg1 from "../../assets/login/bg1.png";
import loginImg from "../../assets/login/bg34-1.png";
import Container from "@/src/Shared/Container";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "@/src/Components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "@/src/Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      form.reset();
      // toast 
      toast.success("User Successfully SignIn")
      navigate(from, { replace: true });
    });
  };

  return (
    <div
      className="w-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <Helmet>
        <title>QuickSend | SignIn</title>
      </Helmet>
      <Container>
        <div className="flex py-8 flex-col md:flex-row">
          <div className="flex items-center">
            <div className="ml-8">
              <h1 className="text-5xl font-extrabold text-[#0d6efd] cinzel-font">
                <Link to="/">QiuckSend</Link>
              </h1>
              <h3 className="py-6 text-3xl font-extrabold">
                Sign In to Recharge Direct
              </h3>
              <p className="text-lg">
                If you don't have an account <br /> You can{" "}
                <NavLink
                  to="/signup"
                  className="text-[#4460f1] font-bold hover:text-[#151bde] hover:underline"
                >
                  Sign-Up
                </NavLink>
              </p>
            </div>
            <img className="lg:w-2/5 hidden lg:block" src={loginImg} alt="" />
          </div>
          {/* form  */}
          <div className="lg:w-2/5">
            <form onSubmit={handleLogin} className="space-y-6 pt-20">
              <div>
                <input
                  className="w-full pl-4 pr-52 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full pl-4 pr-52 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full bg-[#4460f1] hover:bg-[#151bde] cursor-pointer text-white font-bold py-4 rounded-lg"
                  type="submit"
                  value="Sign-In"
                />
              </div>
            </form>

            <div>
              <div className="flex items-center justify-center my-6">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-500">Or Countinue With</span>
                <div className="h-px bg-gray-300 flex-grow"></div>
              </div>

              <SocialLogin />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
