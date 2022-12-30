import React from "react";
import AreaGraph from "@oneui/react-components/src/components/graphs/AreaGraphComponent";
import BarGraph from "@oneui/react-components/src/components/graphs/BarGraphComponent";
import PieGraph from "@oneui/react-components/src/components/graphs/PieGraphComponent";

const AllGraphs = () => {
  const AreaData = [
    {
      name: "Page A",
      uv: 300,
      pv: 400,
      cnt: 600,
      amt: 800,
      newelement: 1200,
      lines: 100,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 400,
      cnt: 600,
      amt: 800,
      newelement: 120,
      lines: 500,
    },
  ];

  const lineBarData = [
    {
      name: "Page A",
      uv: 300,
      pv: 400,
      cnt: 600,
      amt: 800,
      newelement: 1200,
      lines: 100,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 400,
      cnt: 600,
      amt: 800,
      newelement: 120,
      lines: 500,
    },
  ];

  const barData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="row my-3">
      <div className="col-md-4">
        <AreaGraph
          data={AreaData}
          //   dataKeys={["yaxisValue", "yaxisValue1"]}
          dataKeys={["uv", "amt", "newelement", "pv"]}
          xAxisKey="name"
          yAxisLabel="values"
          title="Area chart"
          isLastUpdatedEnabled={true}
          isLastUpdatedMsg="Last Updated 5 days ago"
        />
      </div>
      <div className="col-md-4">
        <BarGraph
          data={barData}
          //   dataKeys={["yaxisValue", "yaxisValue1"]}
          dataKeys={["uv", "amt", "newelement", "pv"]}
          xAxisKey="name"
          yAxisLabel="values"
          title="Bar chart"
          isLastUpdatedEnabled={true}
          isLastUpdatedMsg="Last Updated 5 days ago"
        />
      </div>
      <div className="col-md-4">
        <PieGraph
          data={lineBarData}
          //   dataKeys={["yaxisValue"]}
          dataKeys={["uv", "amt", "newelement", "pv"]}
          xAxisKey="name"
          yAxisLabel="values"
          title="Pie chart"
          isLastUpdatedEnabled={true}
          isLastUpdatedMsg="Last Updated 5 days ago"
        />
      </div>
    </div>
  );
};

export default AllGraphs;
