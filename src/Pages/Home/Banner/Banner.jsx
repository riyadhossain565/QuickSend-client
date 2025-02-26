import React from "react";
import Container from "../../../Shared/Container";
import bannerImg from "../../../assets/banner/bannerImg.png";
import Lottie from "lottie-react";
import animation from "../../../assets/banner/Animation - 2.json";

const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover bg-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className=" bg-gray-900/100 opacity-90 h-full">
        <Container>
          <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-5 py-20 md:py-24 lg:py-32">
            {/* Banner animation */}
            <div className="flex-1 w-5/6 mx-auto">
              <Lottie animationData={animation} loop={true} />
            </div>

            {/* heading and search bar */}
            <div className="flex-1 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold cinzel-font text-white">
                Hassle-Free Delivery Management
              </h1>
              <p className="my-5 text-white">
                From booking parcels to assigning delivery personnel and
                tracking every step of the journey, our platform ensures
                efficiency and reliability.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <input
                  className="pl-4 pr-32 py-3 rounded-lg focus:shadow-lg focus:outline-0"
                  type="search"
                  placeholder="Search Here"
                />
                <input
                  className="text-white bg-[#f39c12] hover:bg-[#925e0b] px-12 py-3 rounded-lg cursor-pointer"
                  type="button"
                  value="Go"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
