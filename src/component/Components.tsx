import Countdown from './Countdown';
import { useMyContext } from './utils/Contextanswer'

export function QuestionDIv(){
  const { questiondb,i } = useMyContext();
 
  return(
    <div className="questionDiv">
            <div className="countownandqno">
              <h2  >Question  {i + 1}</h2>
              <Countdown timerinsec={questiondb.length}/>
            
            </div>
    
            <p>{questiondb[i]?.question}</p>
          </div>
          )
}
type avlue={
  valueOfI:number;
  text:string;
}
export function NextButton ({valueOfI,text}:avlue  ){

  const {setI ,i} = useMyContext();


  const nextonclick = (valueOfI:number) => {
    setI(i + valueOfI); //change to next question

   
  };


return(
  <button className='btnclasic' onClick={()=>nextonclick(valueOfI)}>{text} </button>
)
}


