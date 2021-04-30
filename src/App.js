import './App.css';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
nimport Homepage from'./pages/Homepage/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import ChangePasswords from './pages/ChangePassword/ChangePasswords';
import ToDoList from './ToDoList';
import axios from 'axios'
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    const getUser = ()=>{
      axios.get('http://127.0.0.1:8000/api/todos').then(res=>console.log(res)).catch(err=>console.log(err))
    }
    getUser()
  },[])
  return (
    <div className="app">
     <Router>
       <Switch>
         <Route path='/' exact component={Login}/>
         <Route path='/register' exact component={Register}/>
         <Route path='/home' exact>
          <Homepage/>
         </Route>
         <Route path='/profile' exact component= {Profile}/>
        <Route path='/changepass'exact component = {ChangePasswords}/>
        <Route path='/todo' exact component={ToDoList}/>
       </Switch>
     </Router>
     
     

    </div>
  );
}

export default App;
