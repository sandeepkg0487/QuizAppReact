import { useState } from 'react';
import { useMyContext } from './utils/Contextanswer';


const FinishQuiz = () => {
const {selectedValue}= useMyContext();
const [result ,setResult]=useState<number|null>(null);
    const finishButtonClick = () => {
      setResult(selectedValue.filter((prevdata)=>{return prevdata.userAnswer === prevdata.answer}).length);
      console.log("result",result)
     
       
        
       
    
    }
    
  return (
    <>
       <button onClick={finishButtonClick}>Finish</button>
       {result!==null ?<h1>You Scored {result} out of 5</h1>:null}
    </>
  )
}

export default FinishQuiz
