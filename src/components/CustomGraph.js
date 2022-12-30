import React from "react";
import AreaGraph from "@oneui/react-components/src/components/graphs/AreaGraphComponent";
import BarGraph from "@oneui/react-components/src/components/graphs/BarGraphComponent";
import PieGraph from "@oneui/react-components/src/components/graphs/PieGraphComponent";
const rangeData = [
  {
    name: "A",
    x: 11,
    y: 23,
    z: 4,
  },

  {
    name: "B",
    x: 22,
    y: 38,
    z: 23,
  },
  {
    name: "C",
    x: 43,
    y: 24,
    z: 76,
  },
  {
    name: "D",
    x: 65,
    y: 32,
    z: 13,
  },

  {
    name: "E",
    x: 81,
    y: 47,
    z: 65,
  },
];

const CustomGraph = () => {
  return (
    <>
      <div className="row my-3">
        <div className="col-md-4">
          <AreaGraph
            // data={AreaData}
            // dataKeys={["23", "38", "45", "32" , "47"]}
            // dataKeys = {["uv","amt"]}
            data={rangeData}
            dataKeys={["y"]}
            // dataKeys={{
            //   area: [{ key: "x" },
            //   {key: "y"}
            // ]
            // }}
            xAxisKey="name"
            yAxisLabel="values"
            title="Area chart"
            isLastUpdatedEnabled={true}
            isLastUpdatedMsg="Last Updated 5 days ago"
          />
        </div>
        <div className="col-md-4">
          <BarGraph
            data={rangeData}
            dataKeys={["x", "y"]}
            xAxisKey="name"
            yAxisLabel="values"
            title="Bar chart"
            isLastUpdatedEnabled={true}
            isLastUpdatedMsg="Last Updated 5 days ago"
          />
        </div>
        <div className="col-md-4">
          <PieGraph
            data={rangeData}
            dataKeys={["x", "y"]}
            xAxisKey="name"
            yAxisLabel="values"
            title="Pie chart"
            isLastUpdatedEnabled={true}
            isLastUpdatedMsg="Last Updated 5 days ago"
          />
        </div>
      </div>
    </>
  );
};

export default CustomGraph;
