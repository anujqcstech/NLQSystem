import {
    Bar,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

/* =========================
   DATA PREPARATION
========================= */
const rawData = `
100+,110838,476160
95-99,1141691,3389124
90-94,6038458,13078242
85-89,18342182,31348041
80-84,37166893,53013079
75-79,65570812,83217973
70-74,103998992,124048996
65-69,138182244,154357035
`
    .trim()
    .split("\n")
    .map(line => {
        const [age, m, f] = line.split(",");
        return { age, male: +m, female: +f };
    });

const totalPopulation = rawData.reduce(
    (sum, row) => sum + row.male + row.female,
    0
);

const percentageData = rawData.map(row => ({
    age: row.age,
    male: -(row.male / totalPopulation) * 100,
    female: (row.female / totalPopulation) * 100,
}));

/* =========================
   HELPERS
========================= */
const formatPercent = value =>
    `${Math.abs(value).toFixed(1)}%`;

const legendSorter = item =>
    item.value === "Male" ? 0 : 1;

/* =========================
   COMPONENT
========================= */
export default function PopulationPyramid() {
    return (
        <div style={{ width: "100%", maxWidth: 700, height: 500 }}>
            <ResponsiveContainer>
                <BarChart
                    data={percentageData}
                    layout="vertical"
                    stackOffset="sign"
                    barCategoryGap={2}
                >
                    <XAxis
                        type="number"
                        domain={[-10, 10]}
                        tickFormatter={formatPercent}
                        label={{
                            value: "% of total population",
                            position: "insideBottom",
                            offset: -5,
                        }}
                    />

                    <YAxis
                        type="category"
                        dataKey="age"
                        width={60}
                        label={{
                            value: "Age group",
                            angle: -90,
                            position: "insideLeft",
                        }}
                    />

                    <Tooltip formatter={formatPercent} />

                    <Legend
                        verticalAlign="top"
                        align="right"
                        itemSorter={legendSorter}
                    />

                    <Bar
                        dataKey="female"
                        name="Female"
                        stackId="age"
                        fill="#ed7485"
                        radius={[0, 5, 5, 0]}
                    />

                    <Bar
                        dataKey="male"
                        name="Male"
                        stackId="age"
                        fill="#6ea1c7"
                        radius={[5, 0, 0, 5]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
