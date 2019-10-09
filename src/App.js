import React from 'react';
import './App.css';

import {FirstComponent} from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import {ThirdComponent} from './components/learning-examples/ThirdComponent';
import CounterButton from './components/counter/CounterButton';

import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      
      <TodoApp/>

    </div>  
  );
}


// class LearningComponents extends React.Component {
//   render() {
//     return(

//       <div className="LearningComponents">
      
//       My Hello world

//       <FirstComponent/>
//       <SecondComponent/>
//       <ThirdComponent/>
      
//     </div>

//     )
//   }
// }

export default App;
