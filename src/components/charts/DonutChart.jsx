import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

/* =======================
   SAMPLE DATA
======================= */
const data = [
    { name: "Chrome", value: 64 },
    { name: "Safari", value: 19 },
    { name: "Firefox", value: 4 },
    { name: "Edge", value: 3 },
    { name: "Others", value: 10 },
];

const COLORS = ["#4f46e5", "#22c55e", "#f97316", "#ef4444", "#64748b"];

/* =======================
   HELPERS
======================= */
const formatPercent = (value) => `${value}%`;

/* =======================
   COMPONENT
======================= */
export default function DonutChart() {
    return (
        <div style={{ width: "100%", maxWidth: 400, height: 350 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={3}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip formatter={formatPercent} />
                    <Legend verticalAlign="bottom" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
