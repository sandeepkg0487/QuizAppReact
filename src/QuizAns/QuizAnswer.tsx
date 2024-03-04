import '../Quiz/home.css';
import { useMyContext } from '../component/utils/Contextanswer';
import StatusButton from '../component/StatusButton';
import './quizans.css';
import { useEffect } from 'react';
import { NextButton } from '../component/Components';

const QuizAnswer = () => {

  const { questiondb, setI } = useMyContext()
  const { i } = useMyContext();
  useEffect(() => {
    setI(0);
  }, [])


  return (


    <div>
      <div className="questionDiv">
        <div className="countownandqno">
          <h2>Question {i + 1}</h2>
        </div>
        <p>{questiondb[i]?.question}</p>
      </div>
      <div className="option">
        {questiondb[i]?.options?.map((value, key) => {
          const uniqueKey = `${i}+${key}`
          return (
            <div key={uniqueKey}>
              <label key={i + "" + key} htmlFor={key.toString()} className={(questiondb[i].answer === value ? 'notselect green flexbox' : 'notselect flexbox')}><input key={i + "" + key + key} type="radio" id={"input".concat(key.toString())} name="userAnswer" value={value} defaultChecked={questiondb[i]?.userAnswer === value}></input>{value}<span className='yournaswerspan'>{questiondb[i]?.userAnswer === value ? 'Your Answer' : ''}</span></label >
            </div>);
        })}
      </div>
      <br /><br />
      <div className="flexboxforbutton">
        <div className="btnprev">
          {i > 0 && <NextButton valueOfI={-1} text={"Previous"} />}
        </div>
        <div className="btnnext">
          {i < questiondb.length - 1 && <NextButton valueOfI={1} text={"Next"} />}
        </div>
      </div>

    </div>







  )
}




export default QuizAnswer
