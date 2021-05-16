import React  from 'react'
import './App.css';
import Login from './pages/Login/Login'
import Homepage from'./pages/Homepage/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import ToDoList from './ToDoList';
import Register from './pages/Register/Register'
import ChangePasswords from './pages/ChangePassword/ChangePasswords'
import TodoRepos from './ToDoList/TodoRepos';
function App() {
 

   return (
    <div className="app">
     <Router>
       <Switch>
         <Route path='/home' exact>
          <Homepage/>
         </Route>
         <Route path = '/' exact component = {Login}/>
         <Route path = '/register' exact component = {Register}/>
        <Route path = '/changepass' exact component={ChangePasswords}/>
         <Route path='/profile' exact component= {Profile}/>
        <Route path='/todos/:repo' exact component={ToDoList}/>
        <Route path ='/todorepos' exact component={TodoRepos}/>
       </Switch>
     </Router>
     
     

    </div>
  );
}

export default App;
