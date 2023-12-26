import React from 'react';
import Home from './Quiz/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import QuizAnswer from './QuizAns/QuizAnswer';
import { CustomProvider } from './component/utils/Contextanswer';
import QuizTab from './QuizTab/QuizTab';


function App() {
  return ( <CustomProvider >
    
<Router>
  <Routes>


  <Route path='/'   Component={QuizTab} />
  <Route path='/home/:id'   Component={Home} />
  <Route path='/QuizAnswer'   Component={QuizAnswer} />
  </Routes>
  
</Router>
  </CustomProvider>
  );
}

export default App;
