import { Route, Routes } from "react-router-dom";
import DemoTable from "./components/Demo";
import Graphs from "./components/Graphs";
import AlertComponent from "./components/Alert";
import ParentComponent from "./lib/ParentComponent";

import AllGraphs from "./components/AllGraphs";

// import GraphComp from "./components/GraphComp";

import FileuploadDropzone from "./components/FileuploadDropzone";
// import DemoTable from "./Demo";

// import Table from "./components/Table";

import DComponent from "./components/Wizard";

import Toaster from "./components/Toaster";

import SrComponent from "./components/Search";
// import DemoTable from "./components/Widget";

import Loaders from "./components/Loader";

import Headers from "./components/Header";
import SideManu from "./components/SideManu";
import CustomModel from "./components/CustomModel";
import CustomGraph from "./components/CustomGraph";
// import ListTypeTable from "./components/ListTypeTable";

function App() {
  return (
    <div className="App">
      <Headers />
      <SideManu />
      <div style={{ paddingLeft: "240px" }}>
        <Routes>
          <Route path="/" element={<DemoTable />} />
          <Route path="/allgraph" element={<AllGraphs />} />

          <Route path="/customgraph" element={<CustomGraph />} />
          <Route path="/custommodel" element={<CustomModel />} />
          <Route path="/wizard" element={<DComponent />} />
          <Route path="/loader" element={<Loaders />} />
          <Route path="/graph" element={<Graphs />} />
          <Route path="/alert" element={<AlertComponent />} />
          <Route path="/toaster" element={<Toaster />} />
          <Route path="/fileupload" element={<FileuploadDropzone />} />
          <Route path="/dynamicform" element={<ParentComponent />} />
          <Route path="/search" element={<SrComponent />} />
        </Routes>
      </div>
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ marginTop: "10px" }}>
          For Code Go OneUI library documentation URL=>http://10.0.10.51:49161/
        </p>
      </div>
    </div>
  );
}

export default App;
