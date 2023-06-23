import { Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from "./Pages/Account";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LogIn, logInlocal } from "./Store/authSlice";


function App() {

  const dispatch = useDispatch()
  const isLoggedIN = useSelector((state)=> state.authStore.isLoggedIn)

  // console.log(isLoggedIN);

  useEffect(()=>{
   if( localStorage.getItem("userID")){
      dispatch(logInlocal())
   }
  },[localStorage])

  return (
    <>
    
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/account' element={<Account/>} />
    </Routes>
  <ToastContainer autoClose={1000} theme="dark" />
    </>
  )
}

export default App
