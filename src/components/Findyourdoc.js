import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './UserLogin/Login'
import Register from './UserLogin/Register'
import Doctors from './Doctorcards/Doctors'

function Findyourdoc() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className='Findyourdoc'>
      <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Doctors setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/Login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Findyourdoc