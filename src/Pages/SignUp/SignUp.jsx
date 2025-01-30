import bgImg1 from "../../assets/login/bg1.png";
import loginImg from "../../assets/login/bg34-1.png";
import Container from "@/src/Shared/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "@/src/Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/src/Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "@/src/Hooks/useAxiosPublic/useAxiosPublic";

const SignUp = () => {

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = async (data) => {

    console.log(data)
    try {
      // user registration 
      const result = await createUser(data.email, data.password)
      console.log(result)
      await updateUserProfile(data.name, data.photo)
      setUser({...result.user, photoUrl: data.photo, displayName: data.name})

      // create user entry in the db
      const userInfo = {
        name: data.name,
        email: data.email,
        photo: data.photo,
        phoneNumber: data.phone,
      }
      const res = await axiosPublic.post('/users', userInfo)
      console.log(res.data)
      if(res.data.insertedId){
        console.log("user Add to the databse")
        reset()
        // sweet alert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Successfully Sign-UP",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      }

    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
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
                <Link to="/">QuickSend</Link>
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
              {/* name input */}
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* email input */}
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
              {/* phoneNumber input */}
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="Enter Your phone Number"
                  
                />
                {errors.phone && (
                  <span className="text-red-600">Phone Number is required</span>
                )}
              </div>
              {/* Photo input */}
              <div>
                <input
                  className="w-full pl-4 py-4 rounded-lg bg-gray-100 text-[#646464] focus:outline-none"
                  type="url"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Enter Your PhotoURL"
                  
                />
                {errors.photo && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div>
              {/* Password input */}
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
