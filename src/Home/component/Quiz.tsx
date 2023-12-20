import  {   useState } from 'react'
import { quizdb,   } from './utils/shape'
import Question from './Question';
import ShowAnswer from './ShowAnswer';
import { useMyContext } from './utils/Contextanswer';


export default function Quiz() {
    const [quizdb , setQuizdb]=useState<quizdb[]>([])
    let random:Number;
    let check ;
   
/*next click function for change question using change value of i*/
const [showanswerflag , setShowanswerflag] =useState<boolean>(false);
const{setI} = useMyContext();
const showAnswerbutton = () => {
  setI(0);
  setShowanswerflag(true);
 

}

  return (
    <div>
      {!showanswerflag?<Question setShowanswerflag={setShowanswerflag}/>:<ShowAnswer/>}
     
    </div>
  )
}



