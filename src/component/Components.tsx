import React, { useContext } from 'react'
import { useMyContext } from './utils/Contextanswer'
import { JsxElement } from 'typescript';
type Props = {
    index:number
}



export function QuestionDIv(){
  const { questiondb,i } = useMyContext();
 
  return(
    <div className="questionDiv">
            <div className="countownandqno">
              <h2>Question {i + 1}</h2>
              
            </div>
    
            <p>{questiondb[i]?.question}</p>
          </div>
          )
}
type avlue={
  valueOfI:1|-1
}
export function NextButton (valueOfI:avlue){
console.log("NextButton renderning....")
  const {setI ,i} = useMyContext();


  const nextonclick = (valueOfI:any) => {
    setI(i + valueOfI); //change to next question
    console.log("i", i);
    console.log("NextButton renderning....")
  };


return(
  <button onClick={()=>nextonclick(valueOfI.valueOfI)}>{Number(valueOfI.valueOfI)===-1?'previous':Number(valueOfI.valueOfI)===1?'Next':''} </button>
)
}


