import React from "react";
import { useState } from "react";

import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";
import { BsCardText } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import QuickAccess from "../components/QuickAccess";


const Dashboard = () => {
  const [view,setView] = useState(false)
  const toggleHandler =(e)=>{
    e.preventDefault();
    setView(true)
  }
  const toggleHandler1=(e)=>{
    e.preventDefault();
    setView(false)
  }
  return <div className="title">
  <Header />
      <Welcome />
      <Cards/>
      <QuickAccess/>
      
      {/* {!view?<Tablechrome/>: <Cardchrome/>} */}

       {/* <div style={{marginTop:"5%"}}>
       <button size="100%" style={{backgroundColor:"#DCE5EC" }} onClick={toggleHandler1}>{<BsListUl/>}</button>
       <button size="100%" style={{backgroundColor:"#DCE5EC" }} onClick={toggleHandler}>{<BsCardText/>}</button>
       </div>  */}
   
      </div>
};

export default Dashboard;
