import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useUsers from "@/src/Hooks/useUsers/useUsers";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Myreviews = () => {
  const axiosSecure = useAxiosSecure();
  const [users] = useUsers();

  const deliveryManId = users?._id;

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", deliveryManId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${deliveryManId}`); // Correct API call
      return res.data; // Return the response data
    },
  });

  console.log(reviews);

  return (
    <div className="p-6">
      <h2 className="text-4xl cinzel-font font-bold text-center my-6">
        My Reviews
      </h2>
      {reviews.length === 0 ? (
        <p>No reviews found for this delivery man.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={review.userImg}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{review.userName}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-semibold">Rating:</p>
                <p className="text-yellow-500">
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-semibold">Feedback:</p>
                <p className="text-gray-700">{review.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myreviews;
