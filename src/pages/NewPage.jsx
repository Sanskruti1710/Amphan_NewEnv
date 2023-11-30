import React from "react";
import CreateNewBread from "../components/CreateNewBread";
import CreateNewEnv from "../components/CreateNewEnv";
import WorkspaceTable from "../components/WorkspaceTable";
// import Cards from "../components/Cards";
// import QuickAccessGrid from "../components/QuickAccessGrid";
import QuickAccess from "../components/QuickAccess";
const NewPage = () => {
  return <div>
    <CreateNewBread/>
    <CreateNewEnv/>
    <WorkspaceTable/>
    <QuickAccess/>
     {/* <Cards/> */}
    {/* <QuickAccessGrid/> */}
  </div>;
};

export default NewPage;
