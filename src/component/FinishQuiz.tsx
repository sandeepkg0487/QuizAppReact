import { useEffect, useState } from "react";
import { useMyContext } from "./utils/Contextanswer";
import { Link } from "react-router-dom";
type value = {
  closeModal:() => void
 
  
}
const FinishQuiz = ({closeModal,}:value) => {
  const { questiondb ,setQuestiontriger} = useMyContext();
  const [result, setResult] = useState<number | null>(null);
  const resultcalculation = () => {
    setResult(
      questiondb.filter((prevdata) => {
        return prevdata.userAnswer === prevdata.answer;
      }).length
    );
 
  };
useEffect(()=>{
  resultcalculation()
})
  return (
    <>
      
      {result !== null && (
        <>
          <h1>
            You Scored {result} out of {questiondb.length}
          </h1>
          <button onClick={()=>{ closeModal();setQuestiontriger(true)}} >Show Answers</button>
        </>
      )}
    </>
  );
};

export default FinishQuiz;
