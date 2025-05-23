import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import { UseAuthContext } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)
  const { authUser } = UseAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser? <Home /> : <Navigate to={"/login"} />}/>
        <Route path='/login' element={authUser? <Navigate to='/' /> : <Login />}/>
        <Route path='/signup' element={authUser? <Navigate to='/' /> : <Signup />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
