import React, {  useState } from 'react'
import Input from './Input'
import { quizdbshape } from './utils/shape';

type Props={
  setQuestiondb:  React.Dispatch<React.SetStateAction<quizdbshape[]>>
}



const QuestionAdd :React.FC<Props> = ({setQuestiondb}) => {
  const [questionadd,setQuestionadd]=useState<quizdbshape>({
    answer:"",
    options:{
     optionA: '',
     optionB: '',
     optionC: '',
     optionD: ''
   },
   questionId:"",
    question:'' 
  });

  
  const savedata =() => {
    setQuestiondb((prevdata:quizdbshape[])=>[...prevdata,questionadd])
    setQuestionadd({
      answer:"",
     options:{
       optionA: '',
       optionB: '',
       optionC: '',
       optionD: ''
     },
     questionId:'',
     question:'' 
    });
  }
  const printfun= () => {
 
    console.log('claered',questionadd);
  }
  
 
  return (
    <div>
   <Input setQuestionadd={setQuestionadd} value={questionadd.question} data='question'/>
   <Input setQuestionadd={setQuestionadd} value={questionadd.options?.optionA}  data='option' name='option1'/>
   <Input setQuestionadd={setQuestionadd} value={questionadd.options?.optionB} data='option' name='option2'/>
   <Input setQuestionadd={setQuestionadd} value={questionadd.options?.optionC} data='option' name='option3'/>
   <Input setQuestionadd={setQuestionadd} value={questionadd.options?.optionD} data='option' name='option4'/>
   <button onClick={savedata}>save</button>
   <button onClick={printfun}>check</button>


    </div>
  )
}
export default QuestionAdd;



  
  