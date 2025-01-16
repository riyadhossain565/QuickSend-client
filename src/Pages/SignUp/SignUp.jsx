import bgImg1 from "../../assets/login/bg1.png";
import bgImg2 from "../../assets/login/shape1.png";
import loginImg from "../../assets/login/bg34-1.png";
import Container from "@/src/Shared/Container";
import { Link, NavLink } from "react-router-dom";
import SocialLogin from "@/src/Components/SocialLogin/SocialLogin";

const SignUp = () => {

    

  return (
    <div
      className="w-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <Container>
        <div className="flex gap-4 py-8 px-4 flex-col md:flex-row">
          <div className="flex items-center">
            <div className="ml-8">
              <h1 className="text-5xl font-extrabold text-[#0d6efd] cinzel-font">
                <Link to="/">QiuckSend</Link>
              </h1>
              <h3 className="py-6 text-3xl font-extrabold">
                Sign Up to Rechage Direct
              </h3>
              <p className="text-lg">
                If you don't have an account <br /> You can{" "}
                <NavLink
                  to="/signin"
                  className="text-[#4460f1] font-bold hover:text-[#151bde] hover:underline"
                >
                  Sign-In
                </NavLink>
              </p>
            </div>
            <img className="w-2/4 hidden lg:block" src={loginImg} alt="" />
          </div>

          <div>
            <form className="space-y-6 pt-12">
              <div>
                <input
                  className="w-full pl-4 pr-36 py-4 rounded-lg bg-gray-100 text-[#646464]"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <input
                  className="w-full pl-4 pr-36 py-4 rounded-lg bg-gray-100 text-[#646464]"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <input
                  className="w-full pl-4 pr-36 py-4 rounded-lg bg-gray-100 text-[#646464]"
                  type="url"
                  placeholder="Enter Your PhotoURL"
                />
              </div>
              <div>
                <input
                  className="w-full pl-4 pr-32 py-4 rounded-lg bg-gray-100 text-[#646464]"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div>
                <input
                  className="w-full bg-[#4460f1] hover:bg-[#151bde] cursor-pointer text-white font-bold py-4 rounded-lg"
                  type="submit"
                  value="Sign-Up"
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

export default SignUp;
