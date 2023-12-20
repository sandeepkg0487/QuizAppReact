import React, { useState } from 'react'
import { useMyContext } from './utils/Contextanswer'

const ShowAnswer = () => {
  const{questiondb} = useMyContext()
  const {i,setI}=useMyContext();
  
  return (
    <div>
      <div className="questionDiv">
      <div className="countownandqno"> 
        <h2>Question {i+1}</h2>
      
      </div>
      
     <p>{questiondb[i]?.question}</p>
    </div>                                          
    <div className="option">
      <label htmlFor ='optionA'className={questiondb[i]?.userAnswer==='optionA'? (questiondb[i].answer==='optionA'?'green':'userAnswer'):(questiondb[i].answer==='optionA'?'green':'')}><input type="radio" id="optionA" name="userAnswer" value="optionA" checked= {questiondb[i]?.userAnswer==='optionA'}></input>{questiondb[i]?.options?.optionA}</label >
      <label htmlFor='optionB' className={questiondb[i]?.userAnswer==='optionB'? (questiondb[i].answer==='optionB'?'green':'userAnswer'):(questiondb[i].answer==='optionB'?'green':'')}><input type="radio" id="optionB" name="userAnswer" value="optionB" checked= {questiondb[i]?.userAnswer==='optionB'}></input>{questiondb[i]?.options?.optionB}</label>
      <label htmlFor='optionC' className={questiondb[i]?.userAnswer==='optionC'? (questiondb[i].answer==='optionC'?'green':'userAnswer'):(questiondb[i].answer==='optionC'?'green':'')}><input type="radio" id="optionC" name="userAnswer" value="optionC" checked= {questiondb[i]?.userAnswer==='optionC'}></input>{questiondb[i]?.options?.optionC}</label>
      <label htmlFor='optionD' className={questiondb[i]?.userAnswer==='optionD'? (questiondb[i].answer==='optionD'?'green':'userAnswer'):(questiondb[i].answer==='optionD'?'green':'')}><input type="radio" id="optionD" name="userAnswer" value="optionD" checked= {questiondb[i]?.userAnswer==='optionD'}></input>{questiondb[i]?.options?.optionD}</label>
    </div>
    </div>
  )
}

export default ShowAnswer
