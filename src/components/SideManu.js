import SideMenu from "@oneui/react-components/src/components/SideMenu";

const SideManu = () => {
  const menuItems = [
    {
      name: "One UI Table",
      id: "table",
      exact: true,
      to: "/",
      iconClassName: "bi bi-speedometer2",
      //   icon: Icon,
      customClassName: "dashboard-custom-class",
    },
    // {                                 // when you want manu with sub manu try this
    //   name: "Content",
    //   id: "content",
    //   exact: true,
    //   to: `/table`,
    //   iconClassName: "bi bi-speedometer2",
    //   subMenus: [
    //     { name: "Courses", id: "cources", to: "/content/courses" },
    //     { name: "Videos", id: "videos", to: "/content/videos" },
    //   ],
    // },
    {
      name: "One UI Search",
      id: "search",
      to: `/search`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI File Upload",
      id: "fileUpload",
      to: `/fileupload`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI File All Graph",
      id: "graphs",
      to: `/allgraph`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Dynamic Form",
      id: "form",
      to: `/dynamicform`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Toaster",
      id: "toaster",
      to: `/toaster`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Alert",
      id: "alert",
      to: `/alert`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Graph",
      id: "graph",
      to: `/graph`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Loader",
      id: "loader",
      to: `/loader`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Model",
      id: "model",
      to: `/custommodel`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Wizard",
      id: "wizard",
      to: `/wizard`,
      iconClassName: "bi bi-vector-pen",
    },
    {
      name: "One UI Custom Graph",
      id: "customgraph",
      to: `/customgraph`,
      iconClassName: "bi bi-vector-pen",
    },
    // {
    //   name: "Content 2",
    //   id: "content2",
    //   exact: true,
    //   to: `/table`,
    //   iconClassName: "bi bi-speedometer2",
    //   subMenus: [
    //     { name: "Courses", id: "cources2", to: "/content-2/courses" },
    //     { name: "Videos", id: "videos2", to: "/content-2/videos" },
    //   ],
    // },
  ];
  return (
    // here styles we used the center the content
    <div style={{ padding: "75px 1px 1px 1900px" }}>
      <SideMenu
        menuItems={menuItems}
        onCollapse={(inactive) => {
          console.log(inactive);
        }}
        isFooterVisible={true}
        footerCompanyName="6d Technologies"
        customClassName="side-menu-custom-class"
      />
    </div>
  );
};

export default SideManu;
