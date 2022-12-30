import React from "react";
import LineBarGraph from "@oneui/react-components/src/components/graphs/LineBarGraphComponent";

import MiniCard from "@oneui/react-components/src/components/GraphsAndCards/MinicardType1";
import MiniCard2 from "@oneui/react-components/src/components/GraphsAndCards/MiniCardType2";
import MiniCard3 from "@oneui/react-components/src/components/GraphsAndCards/MiniCardType3";

import CustomListComponent from "@oneui/react-components/src/components/graphs/CustomListviewComponent";

import Graphs from "./Graphs";
// Sample Data format
const lineBarData = [
  {
    name: "Page A",
    uv: 300,
    pv: 400,
    cnt: 600,
    amt: 800,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 400,
    cnt: 600,
    amt: 800,
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
};

// You can try here different different types of graphs like type-1, type-2, type-3

const GraphComp = () => {
  // return <React.Fragment>User developed component will be rendered</React.Fragment>;
  return (
    // // type 1
    // <div className="row">
    //   <div className="col-md-3">
    //     <MiniCard
    //       onClickViewList={() => {
    //         console.log("Callback for on click View list");
    //       }}
    //       name={"Sim PO Approval Pending"}
    //       count={"232"}
    //       rightBlockColor={"#FFF4E9"}
    //     />
    //   </div>
    // </div>

    // // type 2
    // <div className="row">
    //   <div className="col-md-3">
    //     <MiniCard2
    //       onClickViewList={() => {
    //         console.log("Callback for on click View list");
    //       }}
    //       name={"Number Port In/Port Out Pending"}
    //       count={"232"}
    //       totalCount={"325"}
    //     />
    //   </div>
    // </div>
    // type 3
    // <div className="row">
    //   <div className="col-md-6">
    //     <MiniCard3 data={cardData} />
    //   </div>
    // </div>
    // line bar
    // <div className="row">
    //   <div className="col-md-8">
    //     <LineBarGraph
    //       data={lineBarData}
    //       title="Line Bar Graph Component"
    //       dataKeys={{
    //         bar: [
    //           { key: "amt", color: "#83a6ed" },
    //           { key: "cnt", color: "#a4de6c" },
    //           { key: "pv", color: "#8dd1e1" },
    //         ],
    //         line: [{ key: "uv", color: "#82ca9d" }],
    //       }}
    //       yAxisLabel="values"
    //       barSize={25}
    //     />
    //   </div>
    // </div>
    <div className="row my-3">
      <div className="col-md-6">
        <CustomListComponent
          title="Top 5 Popular MSISDN Patterns"
          customComponent={<Graphs />}
        />
      </div>
      <div className="col-md-6">
        <CustomListComponent
          title="Top 5 Popular MSISDN Category"
          customComponent={<Graphs />}
        />
      </div>
    </div>
  );
};

export default GraphComp;
