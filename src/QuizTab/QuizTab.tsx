import React from "react";
import "./quiztab.css";
import useEventData from "./Handlechangefilter";
import Cover from "../Cover/Cover";
import Cardcontent from "./Cardcontent";

const QuizTab = () => {

  let [selectedValue, handleSelectChange] = useEventData('All'); //select menu state manage

  return (
    <>
      {/* cover page  */}
      <div className="carouselcontainer">
        {/* <Carousel /> */}
        <Cover />
      </div>

      {/* sort card view */}
      <div className="contenthead">
        <div className="conhedflex">
          <h1>Quizes <span className="tagname">{selectedValue ? selectedValue : 'All'}</span> </h1>
          <select value={selectedValue} onChange={handleSelectChange}>
            <option value="All">All</option>
            <option value="GK">GK</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Maths">Maths</option>
          </select>
        </div>
      </div>

      {/* content of quiz in cardview */}
      <div className="quiztabwraper">
        <Cardcontent selectedValue={selectedValue} />
      </div>

    </>
  );
};

export default QuizTab;
