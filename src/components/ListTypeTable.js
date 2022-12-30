import React from "react";
import ListTable from "@oneui/react-components/src/components/ListTable/ListTable";

const ListTypeTable = () => {
  const columns = [
    {
      Header: "Count",
      accessor: "id",
    },
    {
      Header: () => null,
      id: "icon",
      accessor: (d) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.427"
            height="25"
            viewBox="0 0 19.427 25"
          >
            <g
              id="_6D_SIM"
              data-name="6D_SIM"
              transform="translate(-451.015 -1665.007)"
            >
              <path
                id="Path_1275"
                data-name="Path 1275"
                d="M469.576,1671.1l-5.774-5.264a1.665,1.665,0,0,0-.876-.334H452.392a.841.841,0,0,0-.877.8v22.4a.843.843,0,0,0,.879.8h16.669a.843.843,0,0,0,.879-.8v-16.8A1.4,1.4,0,0,0,469.576,1671.1Zm-1.134,16.9H453.015v-21h9.823l.028.01,5.576,5.084Z"
                fill="#00D580"
                stroke="rgba(0,0,0,0)"
                strokeWidth="1"
              />
              <path
                id="Path_1276"
                data-name="Path 1276"
                d="M455.768,1677.521v6.989a1.485,1.485,0,0,0,1.483,1.484h7.1a1.485,1.485,0,0,0,1.483-1.484v-6.989a1.485,1.485,0,0,0-1.483-1.484h-7.1A1.485,1.485,0,0,0,455.768,1677.521Zm4.282,6.983-2.782.006-.007-2.744h2.789Zm1.5-6.977,2.781-.006v2.745H461.55Zm0,4.239h2.781v2.728l-2.781.006Zm-1.5-1.5h-2.793l-.006-2.729,2.8-.006Z"
                fill="#00D580"
                stroke="rgba(0,0,0,0)"
                strokeWidth="1"
              />
            </g>
          </svg>
        );
      },
      style: {
        width: "50px",
        textAlign: "center",
      },
    },
    {
      Header: "ICCID",
      accessor: "iccid",
    },
    {
      Header: "IMSI",
      accessor: "imsi",
    },
    {
      Header: "More details",
      id: "expander", // ID needs an expander to allow expand and collapse of sub component
      Cell: ({ row }) => {
        return (
          <span
            {...row.getToggleRowExpandedProps()}
            title={row.isExpanded ? "Collapse" : "Expand"}
          >
            {row.isExpanded ? "Close" : "View"}
          </span>
        );
      },
    },
    {
      Header: "Delete",
      accessor: (d) => {
        return (
          <svg
            onClick={() => alert(d.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        );
      },
      style: {
        textAlign: "center",
      },
    },
  ];

  // api call data

  const data = [
    {
      postId: 1,
      id: 1,
      iccid: "123456789012345",
      imsi: "9876545678",
    },
    {
      postId: 1,
      id: 2,
      iccid: "111236789012345",
      imsi: "12345654356",
    },
    {
      postId: 1,
      id: 3,
      iccid: "567654335678887",
      imsi: "987654435678",
    },
    {
      postId: 1,
      id: 4,
      iccid: "87654456783434343434",
      imsi: "45465435678",
    },
  ];
  const renderSubComponent = (data) => {
    return <SubComponent rowData={data} />;
  };

  const SubComponent = ({ rowData }) => {
    return (
      <div
        className=""
        style={{
          background: "#fff",
          padding: "10px 20px",
        }}
      >
        <div className="row">
          <div className="col-1">
            <dt>{`Record ID`}</dt>
            <dd className="text-wrap">{rowData["id"]}</dd>
          </div>
          <div className="col-2">
            <dt>{`ICCID`}</dt>
            <dd className="text-wrap">{rowData["iccid"]}</dd>
          </div>
          <div className="col-2">
            <dt>{`IMSI`}</dt>
            <dd className="text-wrap">{rowData["imsi"]}</dd>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ListTable
      columns={columns}
      data={data}
      enableSubComponent={true}
      subComponent={renderSubComponent}
    />
  );
};

export default ListTypeTable;
