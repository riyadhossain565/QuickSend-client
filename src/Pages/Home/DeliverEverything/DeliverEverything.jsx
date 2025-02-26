import Container from "@/src/Shared/Container";
import burgImg from "../../../assets/images/burg.png";
import boxImg from "../../../assets/images/box.png";
import groImg from "../../../assets/images/gro.png";

const DeliverEverything = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="w-3/5 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold cinzel-font mb-2">
            We deliver everything
          </h1>
          <h3 className="text-xl text-center mb-6">
            Fast, Reliable, and Secure Delivery for Everything You Need
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10">
          <div className="bg-[#F0EFE6] px-10 pb-6 text-center transition-all hover:shadow-lg">
            <div className="w-36 mx-auto py-4">
              <img src={burgImg} alt="" />
            </div>
            <h3 className="text-2xl font-bold exo-font mb-4">
              Food And Drinks
            </h3>
            <p>
              We ensure your parcels reach their destination in record time
              without compromising on safety or reliability.
            </p>
          </div>
          <div className="bg-[#F0EFE6] px-10 pb-6 text-center transition-all hover:shadow-lg">
            <div className="w-28 mx-auto py-4">
              <img src={boxImg} alt="" />
            </div>
            <h3 className="text-2xl font-bold exo-font mb-4">Packages</h3>
            <p>
              you can have peace of mind knowing your parcels are safe, secure,
              and delivered in perfect condition.
            </p>
          </div>
          <div className="bg-[#F0EFE6] px-10 pb-6 text-center transition-all hover:shadow-lg">
            <div className="w-28 mx-auto py-4">
              <img src={groImg} alt="" />
            </div>
            <h3 className="text-2xl font-bold exo-font mb-4">Groceries</h3>
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

export default DeliverEverything;
