import React from 'react';
import Home from './Quiz/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizAnswer from './QuizAns/QuizAnswer';
import { CustomProvider } from './component/utils/Contextanswer';
import QuizTab from './QuizTab/QuizTab';
import { Modalcontext } from './component/utils/Modalcontext';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Instruction from './Instruction/Instruction';


function App() {
  return (<CustomProvider >
    <Modalcontext>
  
      <Router>
        <Routes>
         
          <Route path='/' Component={QuizTab} />
          <Route path='/home/:id' Component={Home} />
          <Route path='/home/instruction/:id' Component={Instruction} />

        </Routes>
      </Router>
      <Footer />
    </Modalcontext>
  </CustomProvider>

  );
}

export default App;
