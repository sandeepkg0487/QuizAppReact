import  {   useState } from 'react'
import { quizdb,   } from './utils/shape'
import Question from './Question';




export default function Quiz() {
    const [quizdb , setQuizdb]=useState<quizdb[]>([])
    let random:Number;
    let check ;
   
 
  
// /*random number generator for advance */
  //  const rondomnumgenerator = ()=>{
   
  //     random =  Math.floor(Math.random() * ( 3 ))
  //     check= quizdb.find((item) => item.questionnumber === random)
  //     console.log(random);
  //     if(check){
  //       console.log(check)
  //       rondomnumgenerator();
  //     }
  //     };


/*next click function for change question using change value of i*/
; 





  return (
    <div>
     <Question/>
    </div>
  )
}



