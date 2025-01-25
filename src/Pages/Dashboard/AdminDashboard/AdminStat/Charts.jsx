import React from "react";
import Chart from "react-apexcharts";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loadingspinner from "@/src/Shared/LoadingSpinner/Loadingspinner";

const Charts = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch bookings by date using TanStack Query
  const { data: bookingData = [], isLoading: isLoadingBookings } = useQuery({
    queryKey: ["bookingsByDate"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings-by-date");
      console.log(res.data)
      return res.data; 
    },
  });

  console.log(bookingData)

  // Fetch booked vs delivered data using TanStack Query
  const { data: comparisonData = [], isLoading: isLoadingComparison } =
    useQuery({
      queryKey: ["bookingVsDelivered"],
      queryFn: async () => {
        const res = await axiosSecure.get("/bookings-vs-deliveries");
        return res.data; 
      },
    });

  if (isLoadingBookings || isLoadingComparison) {
    return <Loadingspinner />
  }

  // Bar Chart: Bookings by Date
  const barChartOptions = {
    chart: {
      id: "bookings-by-date",
      toolbar: { show: false },
    },
    xaxis: {
      categories: bookingData.map((data) => data.date), // Dates as categories
      title: { text: "Booking Dates" },
    },
    yaxis: {
      title: { text: "Number of Bookings" },
    },
    colors: ["#FF5733"],
    title: {
      text: "Bookings by Date",
      align: "center",
    },
  };

  const barChartSeries = [
    {
      name: "Bookings",
      data: bookingData.map((data) => data.count), // Number of bookings
    },
  ];

  // Line Chart: Booked vs Delivered Parcels
  const lineChartOptions = {
    chart: {
      id: "booking-vs-delivered",
      toolbar: { show: false },
    },
    xaxis: {
      categories: comparisonData.map((data) => data.date), // Booking dates
      title: { text: "Booking Dates" },
    },
    yaxis: {
      title: { text: "Number of Parcels" },
    },
    colors: ["#28a745", "#007bff"],
    title: {
      text: "Booked vs Delivered Parcels",
      align: "center",
    },
  };

  const lineChartSeries = [
    {
      name: "Booked Parcels",
      data: comparisonData.map((data) => data.bookedCount),
    },
    {
      name: "Delivered Parcels",
      data: comparisonData.map((data) => data.deliveredCount),
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <Chart
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
        />
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <Chart
          options={lineChartOptions}
          series={lineChartSeries}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Charts;
