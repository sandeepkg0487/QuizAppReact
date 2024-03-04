import React from "react";
import "./cover.css";
const Cover = () => {
  return (
    <div className="contenthead  ">
      <div className="covercontainer">
        <div className="leftcover">
          <h1 className="blue">"LIFE HAS <span className="yellow">NO LIMIT"</span> </h1>
       
          <p className="covermsg">There 's more to the world than you know and life would be such a waste if you don't get out there and see the world </p>
        </div>
        <div className="rightcover">
          <img src="./Images/Success.png" alt="success" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
