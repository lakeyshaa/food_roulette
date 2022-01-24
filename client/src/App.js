import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
    <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/register" element={ <Register /> } /> 
        <Route path="/login" element={ <Login /> } /> 

      </Routes>

    </div>
  );
}

export default App;
