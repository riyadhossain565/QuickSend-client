import bgImg1 from "../../assets/login/bg1.png";
import loginImg from "../../assets/login/bg34-1.png";
import Container from "@/src/Shared/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "@/src/Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/src/Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log("user",loggedUser)
      navigate('/')
    })
  };

  return (
    <div
      className="w-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <Helmet>
              <title>QuickSend | SignUp</title>
            </Helmet>
      <Container>
        <div className="flex gap-4 py-8 px-4 flex-col md:flex-row">
          <div className="flex items-center">
            <div className="ml-8">
              <h1 className="text-5xl font-extrabold text-[#0d6efd] cinzel-font">
                <Link to="/">QiuckSend</Link>
              </h1>
              <h3 className="py-6 text-3xl font-extrabold">
                Sign Up to Recharge Direct
              </h3>
              <p className="text-lg">
                If you have an account <br /> You can{" "}
                <NavLink
                  to="/signin"
                  className="text-[#4460f1] font-bold hover:text-[#151bde] hover:underline"
                >
                  Sign-In
                </NavLink>
              </p>
            </div>
            <img className="w-2/5 hidden lg:block" src={loginImg} alt="" />
          </div>

          <div className="lg:w-3/6">
            <form className="space-y-6 pt-12" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="url"
                  {...register("photo", { required: true })}
                  placeholder="Enter Your PhotoURL"
                  
                />
                {errors.photo && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div>
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/,
                  })}
                  placeholder="Password"
                />
                {/* validation */}
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one upper case, one lower case, one
                    special characters
                  </span>
                )}

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
