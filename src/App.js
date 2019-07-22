import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import EditExercise from "./components/exercise-list";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import ExerciseList from './components/exercise-list';
 
function App() {
  return (
    <Router>
      <div className="container">
          <Navbar/>
          <br/>
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id"  component={EditExercise} />
          <Route path="/create"  component={CreateExercise} />
          <Route path="/user"  component={CreateUser} />
       </div>
    </Router>
    
  );
}

export default App;
