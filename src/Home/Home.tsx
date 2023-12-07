import React, { useEffect, useState } from 'react'
import { quizdbshape, tabtrigerstatus, userAnswers } from './component/utils/shape'
import Button from './component/Button';
import QuestionAdd from './component/QuestionAdd';
import Quiz from './component/Quiz';
import './home.css';
import { CustomProvider } from './component/utils/Contextanswer';


export default function Home() {
  const [tabtrigger ,setTabtriger]= useState<tabtrigerstatus>('quiz');
  const [ questiondb ,setQuestiondb] = useState<quizdbshape[]>([]) ;

  
 
  useEffect(() => {
   
  },[]
  )
  return (
    <CustomProvider >

   
    <div className="tabtrigger">
      <div className="tabtrigerwrap">
      <Button value='answer' className={`TabTrigerButton ${tabtrigger ==='quiz'? 'active':''}`} setTabtriger={setTabtriger} set='quiz'>quiz</Button>
      <Button value='questionadd'  className={`TabTrigerButton ${tabtrigger ==='questionadd'? 'active':''}`} setTabtriger={setTabtriger} set="questionadd">Add Question</Button>
      </div>
     <div className="displayContent">
      {tabtrigger ==='questionadd' ? <QuestionAdd setQuestiondb={setQuestiondb}/> : <Quiz/> }
     </div>
    </div>
    </CustomProvider>
  )
}
