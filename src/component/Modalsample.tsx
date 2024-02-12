import React, { useState } from 'react';
import Modal from 'react-modal';
import FinishQuiz from './FinishQuiz';
import { useMyContext } from './utils/Contextanswer';
import { useMyModalContext } from './utils/Modalcontext';


const Modalsample = () => {
    const {hidefinishquizQuestion,setHidefinishquizQuestion,openModal,closeModal,isModalOpen}=useMyModalContext()
    
   
  
     
    return (
      <div className="App">
        <button className='btnclasic' onClick={openModal}>Finish Quiz</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Login Modal"
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          ariaHideApp={true}
        >
          { hidefinishquizQuestion ? (
          <div className='popup'>
          <h2>Do you want to finish this quiz</h2>
          <button className='btnclasic' onClick={() => {closeModal()}}>No</button>
          <button className='btnclasic' onClick={() => {setHidefinishquizQuestion(false)}}>Finish</button>
         
          </div>)
          :<FinishQuiz closeModal={closeModal} />
          }  
          
        </Modal>
      </div>
    );
  }
  
export default Modalsample
