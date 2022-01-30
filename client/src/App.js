import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Search from './pages/Search';
import { createTheme, ThemeProvider } from "@mui/material"
import Footer from './components/Footer';


function App() {

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#b23fb5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <ThemeProvider theme = {theme}>
    <div className='App'>
    <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/register" element={ <Register /> } /> 
        <Route path="/login" element={ <Login /> } /> 
        <Route path="/search" element={ <Search /> } />
      </Routes>
      <Footer></Footer>
    </div>   
    </ThemeProvider>
  );
}


export default App;
