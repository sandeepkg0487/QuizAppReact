import React, { useEffect } from 'react'
import './instruction.css'
import { Link, useParams } from 'react-router-dom';



const Instruction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(0, 0);

    }, [])
    const { id } = useParams();
    
    
    return (
        <>
        
            <div>
                <div className="instructioncontainer">
                    <h1>General Instructions:</h1>
                    <ol>
                        <li>The clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself.</li>
                        <li>The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</li>
                        <ol><li><b>white:</b> UnAnswered</li>
                            <li><b>blue:</b> Answered</li></ol>
                        <li>
                            <b> To answer a question, do the following: </b>
                            <p>
                                <ol>
                                    <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</li>
                                    <li>Click on <b> Next</b> to save your answer for the current question and then go to the next question.</li>

                                    <li>To change your chosen answer, click on the bubble of another option.</li>
                                </ol>
                            </p>
                        </li>
                    </ol>
                    <Link to={`/home/${id}`}><button className='playbutton'>Start Quiz</button></Link>

                </div>
            </div>
        </>
    )
}

export default Instruction
