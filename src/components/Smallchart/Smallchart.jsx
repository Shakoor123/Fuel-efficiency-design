import "./Smallchart.scss";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    amt: 2500,
  },
  {
    amt: 1010,
  },
  {
    amt: 1790,
  },
  {
    amt: 2800,
  },
  {
    amt: 1081,
  },
  {
    amt: 3500,
  },
  {
    amt: 3000,
  },
];
const Smallchart = ({ color }) => {
  return (
    <div className="rightchart">
      <ResponsiveContainer width="80%" height={100}>
        <AreaChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke={`#${color}`}
            fill="#111"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Smallchart;
