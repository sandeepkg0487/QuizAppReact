import React from 'react'
import '../Quiz/home.css';
import { useMyContext } from '../component/utils/Contextanswer';
import StatusButton from '../component/StatusButton';
import './quizans.css';

const QuizAnswer = () => {
 
      const{questiondb} = useMyContext()
      const {i}=useMyContext();
    
    
    
      return (
      <div className="home">
      <div className="questionAndindicationWrapper">
   
      <div className="displayContent">
        {/* contentstart here  */}
      <div>
          <div className="questionDiv">
          <div className="countownandqno"> 
            <h2>Question {i+1}</h2>
          
          </div>
          
         <p>{questiondb[i]?.question}</p>
        </div>                                          
      <div className="option">
        {questiondb[i]?.options?.map((value,key)=>{
          return (
          <>
          <label key={i+""+key} htmlFor ={key.toString()}className={(questiondb[i].answer===value?'notselect green flexbox':'notselect flexbox')}><input  key={i+""+key+key}type="radio" id={"input".concat(key.toString())} name="userAnswer" value={value} defaultChecked = {questiondb[i]?.userAnswer===value}></input>{value}<span className='yournaswerspan'>{questiondb[i]?.userAnswer===value?'Your Answer':''}</span></label >
          </>);
        })}
          {/* <label htmlFor ='optionA'className={(questiondb[i].answer==='optionA'?'green':'answerLabel')}><input type="radio" id="optionA" name="userAnswer" value="optionA" checked= {questiondb[i]?.userAnswer==='optionA'}></input>{questiondb[i]?.options?.optionA}<span className='yournaswerspan'>{questiondb[i]?.userAnswer==='optionA'?'Your Answer':''}</span></label >
          <label htmlFor='optionB' className={(questiondb[i].answer==='optionB'?'green':'answerLabel')}><input type="radio" id="optionB" name="userAnswer" value="optionB" checked= {questiondb[i]?.userAnswer==='optionB'}></input>{questiondb[i]?.options?.optionB}<span className='yournaswerspan'>{questiondb[i]?.userAnswer==='optionB'?'Your Answer':''}</span></label>
          <label htmlFor='optionC' className={(questiondb[i].answer==='optionC'?'green':'answerLabel')}><input type="radio" id="optionC" name="userAnswer" value="optionC" checked= {questiondb[i]?.userAnswer==='optionC'}></input>{questiondb[i]?.options?.optionC}<span className='yournaswerspan'>{questiondb[i]?.userAnswer==='optionC'?'Your Answer':''}</span></label>
          <label htmlFor='optionD' className={(questiondb[i].answer==='optionD'?'green':'answerLabel')}><input type="radio" id="optionD" name="userAnswer" value="optionD" checked= {questiondb[i]?.userAnswer==='optionD'}></input>{questiondb[i]?.options?.optionD}<span className='yournaswerspan'>{questiondb[i]?.userAnswer==='optionD'?'Your Answer':''}</span></label> */}
        </div> 
      
        </div>
     </div>
     <div className="indicator">
      <StatusButton/>
     </div>
      </div>
    </div>
   



       
      )
    }
    

    

export default QuizAnswer
