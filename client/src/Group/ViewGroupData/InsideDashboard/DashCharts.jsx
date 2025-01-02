import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const DashCharts = ({ data }) => {
  console.log("Data in charts: ",data)
  return (
    <>
      <section className="border-2 border-dashed rounded-lg border-gray-300 p-2 w-full">
        <BarChart width={550} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="cash" fill="#ec4899" barSize={30} />
        </BarChart>
      </section>
    </>
  );
};

export default DashCharts;
