import Container from "@/src/Shared/Container";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import bgImg from "../../../assets/banner/slider-img1.jpg";
import useAxiosPublic from "@/src/Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAllParcels from "@/src/Hooks/useAllParcels/useAllParcels";
import CountUp from "react-countup";

const Statistics = () => {
  const axiosPublic = useAxiosPublic();

  const [allParcels] = useAllParcels();

  const { data: deliveredCount = 0 } = useQuery({
    queryKey: ["deliveredCount"],
    queryFn: async () => {
      const res = await axiosPublic.get("/deliveredCount");
      return res.data.count;
    },
  });

  const { data: count = 0 } = useQuery({
    queryKey: ["usersCount"],
    queryFn: async () => {
      const res = await axiosPublic.get("/usersCount");
      return res.data.count;
    },
  });

  return (
    <div
      className="mt-16 w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="opacity-90 py-24">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold cinzel-font pb-2">
            Tracking Our Success
          </h1>
          <h3 className="text-lg text-center text-white pb-10">
            Real-Time Updates on Every Delivery, Every Step of the Way.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-3 px-10 py-8 border bg-black bg-opacity-50 rounded-lg">
              <span className="text-6xl text-[#FF7D44]">
                <FaCalendarCheck />
              </span>
              <div className="text-white">
                <h2 className="text-5xl font-bold">
                  <CountUp end={allParcels.length} duration={5} />
                </h2>
                <p className="text-lg">Parcels Booked</p>
              </div>
            </div>

            <div className="flex gap-3 px-8 py-6 border bg-black bg-opacity-50 rounded-lg">
              <span className="text-7xl text-[#f39c12]">
                <TbTruckDelivery />
              </span>
              <div className="text-white">
                <h2 className="text-5xl font-bold">
                  <CountUp end={deliveredCount} duration={5} />
                </h2>
                <p className="text-lg">Parcels Delivered</p>
              </div>
            </div>

            <div className="flex gap-3 px-8 py-6 border bg-black bg-opacity-50 rounded-lg">
              <span className="text-7xl text-[#27ae60]">
                <IoIosPeople />
              </span>
              <div className="text-white">
                <h2 className="text-5xl font-bold">
                  <CountUp end={count} duration={5} />
                </h2>
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
