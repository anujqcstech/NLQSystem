import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

/* =======================
   SAMPLE DATA
======================= */
const data = [
    { name: "Page A", uv: 400 },
    { name: "Page B", uv: 300 },
    { name: "Page C", uv: 300 },
    { name: "Page D", uv: 200 },
    { name: "Page E", uv: 278 },
    { name: "Page F", uv: 189 },
];

/* =======================
   HELPERS
======================= */
const formatAxisTick = (value) => `*${value}*`;

const renderCustomBarLabel = ({ x, y, width, value }) => (
    <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
    >
        {value}
    </text>
);

/* =======================
   COMPONENT
======================= */
export default function SimpleBarChart() {
    return (
        <BarChart
            width={'100%'}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
                dataKey="name"
                tickFormatter={formatAxisTick}
                label={{
                    value: "Pages",
                    position: "insideBottom",
                    offset: -10,
                }}
            />

            <YAxis
                label={{
                    value: "Users",
                    angle: -90,
                    position: "insideLeft",
                }}
            />

            <Tooltip />

            <Bar
                dataKey="uv"
                fill="#8884d8"
                label={renderCustomBarLabel}
            />
        </BarChart>
    );
}
