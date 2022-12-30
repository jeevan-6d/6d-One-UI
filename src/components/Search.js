import SearchComponent from "@oneui/oneui-search-component";

import "@oneui/6d-base-theme/lib/theme.css";
/*Below import is of compressed theme css file*/
import "@oneui/6d-base-theme";

//sample wrapper component
const SrComponent = (props) => {
  //sample code
  return (
    <SearchComponent
      searchFields={{
        title: "Search",
        elements: [
          {
            name: "name",
            label: "Name",
            type: "text",
            default: "",
            placeholder: "Please enter the name to find",
          },
          {
            name: "email",
            label: "Email",
            type: "text",
            default: "",
            placeholder: "Please enter the email to search",
          },
        ],
      }}
      onSearch={(data) => console.log("on search data", data)}
      onReset={(data) => console.log("on reset data", data)}
      searchEvent={"SEARCH_APP"}
      searchEventType={"SEARCH_APP"}
      wrapperCSSClassName={"app-search"}
      searchLabel={"Search"}
      resetLabel={"Reset"}
    />
  );
};

export default SrComponent;
