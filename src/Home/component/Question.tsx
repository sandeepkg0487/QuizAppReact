import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { quizdbshape, userAnswers } from "./utils/shape";
import FinishQuiz from "./FinishQuiz";
import { useMyContext } from "./utils/Contextanswer";
type anything= {
  setShowanswerflag:React.Dispatch<React.SetStateAction<boolean>>
}
const Question:React.FunctionComponent<anything> = ({setShowanswerflag}) => {
  const { questiondb, setQuestiondb } = useMyContext();
  const { i, setI } = useMyContext();
  const [optionselect, setOptionselect] = useState();
  // rest api datatype

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8900/question"); // Replace with your API endpoint
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

  const nextonclick = () => {
    //check wether this question is viewed or not  if selected value have the same question that means
    //the question is already viewed and now need to change the user selected option

    setI(i + 1); //change to next question
    console.log("i", i);
  };
  function setShowanswerflagButtonEvent(){
    setShowanswerflag(true);
  }
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
    console.log("option selected:", optionselect);
    console.log("ans array", questiondb);
  };
  const prevonclick = () => {
    setI(i - 1);
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
  if (i < 5) {
    return (
      <>
        <div>
          <div className="questionDiv">
            <div className="countownandqno">
              <h2>Question {i + 1}</h2>
              <Countdown />
            </div>

            <p>{questiondb[i]?.question}</p>
          </div>
          <div className="option">
            <label
              htmlFor="optionA"
              className={
                questiondb[i]?.userAnswer === "optionA" ? "userAnswer" : "none"
              }
            >
              <input
                type="radio"
                id="optionA"
                name="userAnswer"
                value="optionA"
                onChange={handleRadioChange}
                checked={questiondb[i]?.userAnswer === "optionA"}
              ></input>
              {questiondb[i]?.options?.optionA}
            </label>
            <label
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
            </label>
          </div>
          {i > 0 ? <button onClick={prevonclick}>Previous </button> : null}
          <button onClick={submitEventHandle}>submit </button>
          <button onClick={nextonclick}>Next </button>
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
        <button onClick={setShowanswerflagButtonEvent}>Show Answers</button>
      </div>
    );
  }
};

export default Question;
