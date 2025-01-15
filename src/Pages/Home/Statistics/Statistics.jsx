import Container from "@/src/Shared/Container";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import bgImg from "../../../assets/banner/slider-img1.jpg"

const Statistics = () => {
  return (
    <div className="mb-20 w-full bg-center bg-cover" style={{ backgroundImage: `url(${bgImg})`}}>
        <div className="opacity-90 py-24">
      <Container>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold cinzel-font pb-10">Tracking Our Success</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex gap-3 px-10 py-8 border bg-black bg-opacity-50 rounded-lg">
            <span className="text-6xl text-[#FF7D44]">
              <FaCalendarCheck />
            </span>
            <div className="text-white">
              <h2 className="text-5xl font-bold">30</h2> 
              <p className="text-lg">Parcels Booked</p>
            </div>
          </div>

          <div className="flex gap-3 px-8 py-6 border bg-black bg-opacity-50 rounded-lg">
            <span className="text-7xl text-[#f39c12]">
            <TbTruckDelivery />
            </span>
            <div className="text-white">
              <h2 className="text-5xl font-bold">30</h2> 
              <p className="text-lg">Parcels Delivered</p>
            </div>
          </div>

          <div className="flex gap-3 px-8 py-6 border bg-black bg-opacity-50 rounded-lg">
            <span className="text-7xl text-[#27ae60]">
            <IoIosPeople />
            </span>
            <div className="text-white">
              <h2 className="text-5xl font-bold">30</h2> 
              <p className="text-lg">People Using Our App</p>
            </div>
          </div>

        </div>
      </Container>
      </div>
    </div>
  );
};

export default Statistics;
