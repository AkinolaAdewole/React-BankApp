import logo from './logo.svg';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
    <Routes>
      {/* <NavBar/> */}
  
     <Route path='/' element={<Home/>} />
    <Route path="*" element={<NotFound/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
