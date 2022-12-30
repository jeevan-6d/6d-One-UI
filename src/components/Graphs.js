import LineBarGraph from "@oneui/react-components/src/components/graphs/LineBarGraphComponent";
// Sample Data format
import React from "react";
import MiniCard from "@oneui/react-components/src/components/GraphsAndCards/MinicardType1";
import MiniCard2 from "@oneui/react-components/src/components/GraphsAndCards/MiniCardType2";
import MiniCard3 from "@oneui/react-components/src/components/GraphsAndCards/MiniCardType3";
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

const cardData = {
  block1: {
    name: "Total T_IMSI",
    value: "42",
  },
  block2: {
    name: "Free T_IMSI",
    value: "23",
  },
  block3: {
    name: "Paried T_IMSI",
    value: "19",
  },
  block4: {
    name: "Anusha",
    value: "22",
  },
};

const Graphs = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <LineBarGraph
            data={lineBarData}
            title="Line Bar Graph Component"
            dataKeys={{
              bar: [
                { key: "amt", color: "pink" },
                { key: "cnt", color: "#a4de6c" },
                { key: "pv", color: "#8dd1e1" },
                { key: "newelement", color: "red" },
              ],
              line: [
                { key: "uv", color: "#82ca9d" },
                { key: "lines", color: "blue" },
              ],
            }}
            yAxisLabel="values"
            barSize={25777}
          />
        </div>
      </div>
      ;{/* minicard */}
      <div className="row">
        <div className="col-md-3">
          <MiniCard
            onClickViewList={() => {
              console.log("Callback for on click View list");
            }}
            name={"Sim PO Approval Pending"}
            count={"232"}
            rightBlockColor={"#FFF4E9"}
          />
        </div>
      </div>
      ; Type 2
      <div className="row">
        <div className="col-md-3">
          <MiniCard2
            onClickViewList={() => {
              console.log("Callback for on click View list");
            }}
            name={"Number Port In/Port Out Pending"}
            count={"232"}
            totalCount={"325"}
          />
        </div>
      </div>
      {/*  */}
      <div className="row">
        <div className="col-md-6">
          <MiniCard3 data={cardData} />
        </div>
      </div>
      ;
    </>
  );
};

export default Graphs;
