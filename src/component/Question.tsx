import React, { useEffect, useState } from "react";
import { quizdbshape } from "./utils/shape";

import { NextButton, QuestionDIv } from "./Components";
import { useMyContext } from "./utils/Contextanswer";
import { useParams } from "react-router-dom";
import Modalsample from "./Modalsample";
import QuizAnswer from "../QuizAns/QuizAnswer";
import { useMyModalContext } from "./utils/Modalcontext";

const Question = () => {
  const {
    questiondb,
    setQuestiondb,
    questiontriger,
    i,
    setI,
    setQuestiontriger,
  } = useMyContext();
  const { id } = useParams(); //useParam hook is used to get data from url
  const{setHidefinishquizQuestion}=useMyModalContext();
  // rest api datatype

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      let response = await Promise.any([
        fetch(`http://localhost:8900/${id}`),
        fetch(`https://api.npoint.io/67f33e35ca22600979ac/${id}`)
      ]);


      // const response = await fetch(`http://localhost:8900/${id}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: quizdbshape[] = await response.json();
      setQuestiondb(result);

    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setI(0);
    fetchData();
    return () => {
      setQuestiontriger(false);
      setHidefinishquizQuestion(true);












    };
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
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!questiondb) {
    return <div>No data available</div>;
  }
  if (i < questiondb.length && !questiontriger) {
    return (
      <>
        <div>
          <QuestionDIv />
          <div className="option">
            {questiondb[i]?.options?.map((value, key) => {
              const uniqueKey = `${i}-${key}`;

              return (

                <div key={uniqueKey}>

                  <label

                    htmlFor={"input".concat(key.toString())}
                    className={
                      questiondb[i]?.userAnswer === value
                        ? "userAnswer notselect"
                        : "notselect"
                    }
                  >
                    <input
                      type="radio"
                      id={"input".concat(key.toString())}
                      name="userAnswer"
                      value={value}
                      onChange={handleRadioChange}
                      checked={questiondb[i]?.userAnswer === value}
                    ></input>
                    {value}
                  </label>
                </div>

              );
            })}
          </div>
          <br />
          <div className="flexboxforbutton">
            <div className="btn1">
              {i > 0 && <NextButton valueOfI={-1} text={"Previous"} />}
            </div>
            {/*previous button*/}
            <div className="btn2">
              <Modalsample />
            </div>
            <div className="btn3">
              {i < questiondb.length - 1 && <NextButton valueOfI={1} text={"Next"} />}
            </div>
          </div>
        </div>
      </>
    );
  } else if (questiontriger) {
    return <QuizAnswer />; //Quizanswer
  } else {
    return <></>;
  }
};

export default Question;
