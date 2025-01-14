import React from "react";
import Container from "../../../Shared/Container";
import bannerImg from "../../../assets/banner/bannerImg.png";

const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[85vh] bg-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className=" bg-gray-900/100 opacity-90 h-full">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* heading and search bar */}
            <div className="pt-40">
              <h1 className="text-5xl font-bold exo-font text-white">
                Hassle-Free Delivery Management
              </h1>
              <p className="my-5 text-white">
                From booking parcels to assigning delivery personnel and
                tracking every step of the journey, our platform ensures
                efficiency and reliability.
              </p>
              <div>
                <input className="pl-4 pr-16 py-3 rounded-lg focus:shadow-lg focus:outline-0" type="search" placeholder="Search Here" />
                <input className="text-white ml-3 bg-[#f39c12] px-8 py-3 rounded-lg cursor-pointer" type="button" value="Go" />
              </div>
            </div>

            <div></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
