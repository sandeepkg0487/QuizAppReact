import StatusButton from '../component/StatusButton';
import './home.css';
import Question from '../component/Question';
import Modalsample from '../component/Modalsample';
import { useEffect } from 'react';



export default function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    console.log(0,0);
    
},[])
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
