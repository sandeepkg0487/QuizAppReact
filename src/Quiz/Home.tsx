import StatusButton from '../component/StatusButton';
import './home.css';
import Question from '../component/Question';
import Modalsample from '../component/Modalsample';



export default function Home() {
 
  return (

    <div className="home">
      <div className="questionAndindicationWrapper">
        <div className="displayContent">
        <Question />
        </div>
        <div className="indicator">
          <StatusButton />
        </div>
      </div>
  
    </div>

  )
}
