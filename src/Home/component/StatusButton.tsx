import React, {  useState } from "react";
import "../home.css"
import {Buttonstatus} from "./Components";


const StatusButton = () => {
  let buttonname = [];
  for (let index: number = 1; index <= 25; index++) {
    buttonname.push(
      <Buttonstatus key = {index} index={index}/>
    );
  }

  return (
<div className="grid-container">

{buttonname}
  </div>
  );
    
  
}
export default StatusButton;
