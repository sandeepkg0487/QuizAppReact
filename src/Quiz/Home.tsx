import React, { useEffect, useState } from 'react'
import { quizdbshape, tabtrigerstatus, userAnswers } from '../component/utils/shape'
import StatusButton from '../component/StatusButton';
import Quiz from '../component/Quiz';
import './home.css';



export default function Home() {
  const [tabtrigger ,setTabtriger]= useState<tabtrigerstatus>('quiz');
  const [ questiondb ,setQuestiondb] = useState<quizdbshape[]>([]) ;

  
 
  useEffect(() => {
   
  },[]
  )
  return (
   

   
    <div className="home">
      <div className="questionAndindicationWrapper">

      <div className="displayContent">
      <Quiz/>
     </div>
     <div className="indicator">
      <StatusButton/>
     </div>
      </div>
    </div>
   
  )
}
