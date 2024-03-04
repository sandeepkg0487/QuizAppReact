import React, { useEffect, useState } from 'react'
import { useMyModalContext } from './utils/Modalcontext';
type props = {
  timerinsec:number;
}

const Countdown :React.FC<props> = ({timerinsec}) => {
    const [timer, setTimer] = useState<number>(timerinsec*10); 
    const{setHidefinishquizQuestion,openModal}=useMyModalContext();
  
    useEffect(() => {
  
        const countdown = setInterval(() => {
          setTimer((prevTimer:number):number|any => {
            if (prevTimer === 0) {
              clearInterval(countdown);
              setHidefinishquizQuestion(false);
              openModal();
              
              // Handle time's up logic here
            } else {
              return prevTimer - 1;
            }
          });
        }, 1000);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(countdown);
      }, []); 
  return (
    <div>
 
      <h3>00:{ ('0'+Math.floor(timer/60)).slice(-2)}:{('0'+Math.round(timer%60)).slice(-2)}</h3>
    </div>
  )
}

export default Countdown
