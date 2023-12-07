import React, { useEffect, useState } from 'react'
import Countdown from './Countdown'
import { quizdbshape, userAnswers } from './utils/shape';
import FinishQuiz from './FinishQuiz';
import { useMyContext } from './utils/Contextanswer';





const Question = () => {

const [optionselect,setOptionSelect] = useState<userAnswers>()
const {selectedValue,setSelectedValue}= useMyContext();


const  [i ,setI] =useState(0); 
// rest api datatype
const [questiondb, setQuestiondb] = useState<quizdbshape[] >([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8900/question'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result: quizdbshape[] = await response.json();
    setQuestiondb(result);
  } catch (error:any) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
 

  fetchData();
}, []);

   
const nextonclick = () => {
  setI(i+1);
  console.log('i',i);
 const index = selectedValue.findIndex((existingElement) => existingElement.questionId === questiondb[i].questionId);

  if (index === -1) {
    console.log(index);
    // Element not found, push it to the array
    setSelectedValue((prevArray:any) =>[...prevArray,{
      question:questiondb[i]?.question,
      answer:questiondb[i].answer,
      questionId:questiondb[i].questionId,
      userAnswer:null
        }]);
  }
}

const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  // check if exist
console.log('from q db:',questiondb[i].questionId)
  const index = selectedValue.findIndex((existingElement) => existingElement.questionId === questiondb[i].questionId);

  if (index === -1) {
    console.log(index);
    // Element not found, push it to the array
    
    setSelectedValue((prevArray:any) =>[...prevArray,{
      question:questiondb[i]?.question,
      answer:questiondb[i].answer,
      questionId:questiondb[i].questionId,
      userAnswer:event.target.value,
        }]);
  }else{
   setSelectedValue((prevArray:any) =>
      prevArray.map((quiz:any) =>
            quiz.questionId === questiondb[i].questionId ? { ...quiz, userAnswer: event.target.value } : quiz
      
      ))
      
  }
  // else update
 
};
const submitEventHandle =  () => {
  console.log('option selected:',optionselect)
 console.log("ans array",selectedValue)
}
const prevonclick =() => {
  setI(i-1);
}
if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

if (!questiondb) {
  return <div>No data available</div>;
}
if(i<5){
   return <>
   <div>
    <div className="questionDiv">
      <div className="countownandqno"> 
        <h2>Question {i+1}</h2>
       <Countdown/>
      </div>
      
     <p>{questiondb[i]?.question}</p>
    </div>                                          
    <div className="option">
      <label htmlFor ='optionA'className={selectedValue[i]?.userAnswer==='optionA'?'active' :'none'}><input type="radio" id="optionA" name="userAnswer" value="optionA" onChange={handleRadioChange}checked= {selectedValue[i]?.userAnswer==='optionA'}></input>{questiondb[i]?.options?.optionA}</label >
      <label htmlFor='optionB' className={selectedValue[i]?.userAnswer==='optionB'?'active' :'none'}><input type="radio" id="optionB" name="userAnswer" value="optionB" onChange={handleRadioChange}checked= {selectedValue[i]?.userAnswer==='optionB'}></input>{questiondb[i]?.options?.optionB}</label>
      <label htmlFor='optionC' className={selectedValue[i]?.userAnswer==='optionC'?'active' :'none'}><input type="radio" id="optionC" name="userAnswer" value="optionC" onChange={handleRadioChange}checked= {selectedValue[i]?.userAnswer==='optionC'}></input>{questiondb[i]?.options?.optionC}</label>
      <label htmlFor='optionD' className={selectedValue[i]?.userAnswer==='optionD'?'active' :'none'}><input type="radio" id="optionD" name="userAnswer" value="optionD" onChange={handleRadioChange}checked= {selectedValue[i]?.userAnswer==='optionD'}></input>{questiondb[i]?.options?.optionD}</label>
    </div>
     {i>0 ? <button onClick={prevonclick}>Previous </button> :null}
     <button onClick={submitEventHandle}>submit </button>
     <button onClick={nextonclick}>Next </button>
   
  </div>
   </>
    
  
}else{
  return(
  <div>
    <h2>Do you want to finish this quiz</h2>
    <button onClick={()=>{setI(i-1)}}>No</button>
    <button onClick={() => console.log("sel value:",selectedValue) }>show </button>
    <FinishQuiz/>
  </div> 
  );
  
}
  
}

export default Question
