import './App.css';
import  { Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './views/LandingPage/landingPage';
import Home from './views/Home/Home';
import Create from './views/Create/create';
import Detail from './views/Detail/detail';
import NavBar from './components/NavBar/NavBar';
import Error from './components/Error/Error'
import About from './views/About/About'; 

function App() {

  const location = useLocation();

  return (
    <div className="App">
        {location.pathname !== "/" && location.pathname !== "/home" && location.pathname !== "/about" ? <NavBar/> : null} 
        <Routes>
          <Route path='*' element={<Error/>}/>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/home' element= {<Home/>}/>
          <Route path='/home/:id' element={<Detail/>} />
          <Route path='/create' element={<Create/>} />
        </Routes>
    </div>
  );
}


export default App;
