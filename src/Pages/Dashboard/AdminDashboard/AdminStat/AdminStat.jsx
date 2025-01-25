import { Helmet } from "react-helmet-async";
import Charts from "./Charts";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics | Dashboard</title>
      </Helmet>

      <h1 className="text-4xl cinzel-font text-center my-6 font-bold">Statistics</h1>
      
      <Charts />
    </div>
  );
};

export default Statistics;
