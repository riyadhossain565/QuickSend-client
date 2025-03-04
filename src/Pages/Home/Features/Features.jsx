import React from "react";
import Container from "../../../Shared/Container";
import animation1 from "../../../assets/card/Animation-delivery.json";
import animation2 from "../../../assets/card/Animation-safety.json";
import animation3 from "../../../assets/card/Animation - trust.json";
import Lottie from "lottie-react";

const Features = () => {
  return (
    <div className="pt-20">
      <Container>
        <div className="w-3/5 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold cinzel-font my-8">
            Try us and see how good our services are.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          <div className="bg-[#F0EFE6] px-10 pb-6 text-center transition-all hover:shadow-lg">
            <div className="w-4/6 mx-auto">
              <Lottie animationData={animation1} loop={true} />
            </div>
            <h3 className="text-2xl font-bold exo-font mb-4">
              Super Fast delivery
            </h3>
            <p>
              We ensure your parcels reach their destination in record time
              without compromising on safety or reliability.
            </p>
          </div>
          <div className="bg-[#F0EFE6] px-10 pb-6 text-center transition-all hover:shadow-lg">
            <div className="w-3/6 mx-auto">
              <Lottie animationData={animation2} loop={true} />
            </div>
            <h3 className="text-2xl font-bold exo-font mb-4">Parcel Safety</h3>
            <p>
              you can have peace of mind knowing your parcels are safe, secure,
              and delivered in perfect condition.
            </p>
          </div>
          <div className="bg-[#F0EFE6] px-10 py-6 text-center transition-all hover:shadow-lg">
            <div className="w-3/5 mx-auto">
              <Lottie animationData={animation3} loop={true} />
            </div>
            <h3 className="text-2xl font-bold exo-font mb-4">
              Trusted Service
            </h3>
            <p>
              Our Service is built on reliability, transparency, and a
              commitment to excellence.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
