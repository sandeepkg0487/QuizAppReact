import React, { useEffect, useRef, useState } from "react";
import "./quiztab.css";
import Quiztabskelton from "./Quiztabskelton";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Navbar from "../Navbar/Navbar";
import useEventData from "./Handlechangefilter";
type charapara = {
  quizname: string;
  image: string;
  duration: number;
  noOfQuestions: number;
  id:number;
  category: string;

};
const QuizTab = () => {
  const [loading, setLoading] = useState(true);
  const [questiontab, setQuestiontab] = useState<charapara[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();



  let  [selectedValue, handleSelectChange] =useEventData('All');

  // Event handler to update the selected value
  

function filterdata (selectedValue: string , questiontab:charapara[]):charapara[]{
  if(selectedValue ==='All'){
    return questiontab;
  }
   return questiontab.filter((data) => { return data.category === selectedValue })
  
  
}

  const fetchData = async () => {

    try {
      let response = await Promise.any([
        fetch("https://api.npoint.io/67f33e35ca22600979ac/quiztab"),
        fetch("http://localhost:89000/quiztab")
      ]);


      // const response = await fetch("https://www.jsonkeeper.com/b/U3U2"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setQuestiontab(result);
      console.log("inside api caller");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error1: {error}</div>;
  }



  return (
    <>
      <Navbar />
      <div className="carouselcontainer">
        <Carousel />
      </div>

      <div className="contenthead">
        <div className="conhedflex">
          <h1>Quizes </h1>
          <select value={selectedValue} onChange = { handleSelectChange }>
            <option value="All">All</option>
            <option value="GK">GK</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Maths">Maths</option>
          </select>
        </div>
      </div>


      <div className="quiztabwraper">

        {filterdata(selectedValue,questiontab).map((value) => {
          return <Quiztabskelton key={value.id} value={value} />;
        })}
      </div>
      <div className="trending">

      </div>
    </>
  );
};

export default QuizTab;
