import React from 'react'
import { Route,Routes } from 'react-router-dom';
import ViewEmployees from './Pages/ViewEmployee';
import FireEmployee from './Pages/FireEmployee';
import Login from './Pages/Auth_pages/Login';
import Signup from './Pages/Auth_pages/Signup';
import activateAcount from './Pages/Auth_pages/activate';
import ResetPassword from './Pages/Auth_pages/ResetPassword';
import ResetPasswordConfirm from './Pages/Auth_pages/ResetPasswordConfirm';
import AddEmployee from './Pages/AddEmployees'
import Layout from './Layout';
import ViewEmployee from './Pages/ViewEmployee'
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
    <div>
      
      <Layout>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}></Route>
        <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
        <Route path='/ResetPasswordConfirm/confirm/:uid/:token' element={<ResetPasswordConfirm/>}></Route>
        <Route path='/activate/:uid/:token' element={<activateAcount/>}></Route>
        <Route path='/ViewEmployees' element={<ViewEmployees/>}></Route>
        <Route path='/Fire/:id' element={<FireEmployee/>}></Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        <Route path='/LandingPage' element={<ViewEmployee/>}></Route>
      </Routes>
      </Layout>
      
    
    </div>
    </Provider>
    
  )
}

export default App