import useAxiosPublic from "@/src/Hooks/useAxiosPublic/useAxiosPublic";
import Container from "@/src/Shared/Container";
import { useQuery } from "@tanstack/react-query";

const TopDeliveryMen = () => {
  //   const [topDeliveryMen, setTopDeliveryMen] = useState([]);

  const axiosPublic = useAxiosPublic();

  const { data: topDeliveryMen = [] } = useQuery({
    queryKey: ["topDeliveryMen"],
    queryFn: async () => {
      const res = await axiosPublic.get("/top-delivery-men");
      console.log(topDeliveryMen);
      return res.data;
    },
  });

  return (
    <div className="mb-20">
      <Container>
        <h1 className="text-center font-bold text-5xl mb-4 cinzel-font">Top Delivery Men</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 my-8">
          {topDeliveryMen.map((man, index) => (
            <div key={index} className="bg-[#F0EFE6] px-10 py-8 shadow-lg rounded-lg">
              <img
                src={man.photo}
                alt={man.name}
                className="w-32 h-32 rounded-full border border-yellow-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center">{man.name}</h3>
              <p className="text-center text-gray-600">
                Parcels Delivered: {man.parcelsDeliveredCount}
              </p>
              <p className="text-center text-yellow-500">
                ⭐ Average Rating: {man.averageRating}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopDeliveryMen;
