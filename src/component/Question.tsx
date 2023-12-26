import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { quizdbshape, userAnswers } from "./utils/shape";
import FinishQuiz from "./FinishQuiz";
import { NextButton, QuestionDIv } from "./Components";
import { useMyContext } from "./utils/Contextanswer";
import { Link, useParams } from "react-router-dom";


const Question = () => {
  const { questiondb, setQuestiondb } = useMyContext();
  const { i, setI } = useMyContext();
  const { id } = useParams();

  // rest api datatype

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8900/${id}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: quizdbshape[] = await response.json();
      setQuestiondb(result);
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


  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // check if exist
    console.log("from q db:", questiondb[i].questionId);
    const index = questiondb.findIndex(
      (existingElement) =>
        existingElement.questionId === questiondb[i].questionId
    );

    if (index === -1) {
      console.log(index);
      // Element not found, push it to the array
      // else update
    } else {
      setQuestiondb((prevArray: any) =>
        prevArray.map((quiz: any) =>
          quiz.questionId === questiondb[i].questionId
            ? { ...quiz, userAnswer: event.target.value }
            : quiz
        )
      );
    }
  };
  const submitEventHandle = () => {
    console.log("ans array", questiondb);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!questiondb) {
    return <div>No data available</div>;
  }
  if (i < questiondb.length) {
    return (
      <>
        <div>
          <QuestionDIv/>  
          <div className="option">
           {questiondb[i]?.options?.map((value,key)=>{
            return (
              <>
              <label
              key={i+""+key}
              htmlFor={'input'.concat(key.toString())}
              className={
                questiondb[i]?.userAnswer === value ? "userAnswer notselect" : "notselect"
              }
            >
              <input
                key={i+""+key+key}
                type="radio"
                id={'input'.concat(key.toString())}
                name="userAnswer"
                value={value}
                onChange={handleRadioChange}
                checked={questiondb[i]?.userAnswer === value}
              ></input>
              {value}
            </label>
              </>
            );
           })} 
            {/* <label
              htmlFor="optionB"
              className={
                questiondb[i]?.userAnswer === "optionB" ? "userAnswer" : "none"
              }
            >
              <input
                type="radio"
                id="optionB"
                name="userAnswer"
                value="optionB"
                onChange={handleRadioChange}
                checked={questiondb[i]?.userAnswer === "optionB"}
              ></input>
              {questiondb[i]?.options?.optionB}
            </label>
            <label
              htmlFor="optionC"
              className={
                questiondb[i]?.userAnswer === "optionC" ? "userAnswer" : "none"
              }
            >
              <input
                type="radio"
                id="optionC"
                name="userAnswer"
                value="optionC"
                onChange={handleRadioChange}
                checked={questiondb[i]?.userAnswer === "optionC"}
              ></input>
              {questiondb[i]?.options?.optionC}
            </label>
            <label
              htmlFor="optionD"
              className={
                questiondb[i]?.userAnswer === "optionD" ? "userAnswer" : "none"
              }
            >
              <input
                type="radio"
                id="optionD"
                name="userAnswer"
                value="optionD"
                onChange={handleRadioChange}
                checked={questiondb[i]?.userAnswer === "optionD"}
              ></input>
               {questiondb[i]?.options?.optionD}
            </label> */}
          </div>

          {i > 0 ? <NextButton valueOfI={-1} /> : null}
          <button onClick={submitEventHandle}>submit </button>
          <NextButton valueOfI={1} />
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h2>Do you want to finish this quiz</h2>
        <button
          onClick={() => {
            setI(i - 1);
          }}
        >
          No
        </button>
        <button onClick={() => console.log("sel value:", questiondb)}>
          show{" "}
        </button>
        <FinishQuiz />
        <Link to="/QuizAnswer"><button >Show Answers</button></Link>
        
      </div>
    );
  }
};

export default Question;
