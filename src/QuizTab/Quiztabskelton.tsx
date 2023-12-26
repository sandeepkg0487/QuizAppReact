import React from "react";
import { Link } from "react-router-dom";
type valueprop = {
  value: {
    quizname: string;
    image: string;
    duration: number;
    noOfQuestions: number;
  };
};
const Quiztabskelton: React.FC<valueprop> = ({ value }) => {


  return (
<>  <div className="contentwraper">
    
      <div className="imgwrapper">
       <img className="imgwidth100" src={value.image} alt={value.quizname} />
      </div>
      <div className="quizcontent">
        <div className="quizheader">
          <h3>{value.quizname}</h3>
        </div>
        <div className="insidecontentwraper">
          <div className="quizstyle">
            <div className="noofquestion">
              <h3>{value.noOfQuestions}</h3> {/* qouizcount */}
              <h5 className="gray">Questions</h5>
            </div>
            <div className="verticalruler"></div>
            <div className="duration">
              <h3 className="durationinline">{value.duration}</h3>
              <h6 className="durationinline gray">sec</h6> {/* qouizcount */}
              <h5 className="gray">Duration</h5>
            </div>
          </div>
          <Link  to={`/home/${value.quizname}`}> <button className="playbutton">Play</button></Link>
         
        </div>
      </div>
      
</div>
            </>
 
  );
};

export default Quiztabskelton;
