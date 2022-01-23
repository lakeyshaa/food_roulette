import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Register</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/register" element={ <Register /> } /> 
      </Routes>

    </div>
  );
}

export default App;
