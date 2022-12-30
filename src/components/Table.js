import React, { useRef } from 'react'
import TabCol from './Tabcol'
import { AppTable } from '@oneui/6d-table';
import '@oneui/6d-base-theme/build/theme.css';


const Table = () => {
    const tableRef = useRef();
const fetchList = async (pageSize, pageIndex) => {
    const resp = await getList();
    const startRow = pageSize * pageIndex;
    const endRow = startRow + pageSize;
    return {
      data: resp.slice(startRow, endRow),
      totalRecords: resp.length,
    };
  };
  
  
  const getList = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const OnShowActionComponent = () => {
    return (
      <>
      
        <div>
          <button
            className="btn btn-app-secondary"
            style={{
              height: "30px",
              lineHeight: "30px",
              border: "solid 1px",
              marginLeft: "10px",
              padding: "0px 12px",
              marginRight: "0px",
              fontSize: "12px",
            }}
            type="button"
            onClick={() => {
              console.log("clicked action button");
            }}
          >
            Action button
          </button>
        </div>
      </>
    );
  };
 
  const renderSubComponent = (rowData) => {
    return (
        <div>
           
        </div>
    )
}

  return (
  <>
  
  <AppTable
    ref={tableRef}
    title="Demo table"
    columns={TabCol}
    getDataFrom={fetchList}
    onRowSelectedActionComponent={<OnShowActionComponent />}
    limit={5}
    isSearchFilterEnabled={true}
    isExportActionEnabled={true}
    onExport={() => {
      alert("Export button clicked");
    }}
    addItem={<button className="btn btn-app-secondary" type="button" >Add Item</button>}
    enableSubComponent={true}
    subComponent={(rowData) => renderSubComponent(rowData)}
    enableRowSelection={true}
    selectionKey={`id`}
    commonItem={<button className="btn btn-app-secondary" type="button" >Custom Action</button>}
    actionButtons={[
        {
            class: 'btn-primary',
            //  label: <Icon/>,
            onClick: (data) => {
                //will recive row data
               console.log(data);
            }
        },{
            class: 'btn-secondary',
            label: 'remove',
            onClick: (data) => {
                console.log(data);
            }
        }
    ]}
/>

  </>
  )
}

export default Table