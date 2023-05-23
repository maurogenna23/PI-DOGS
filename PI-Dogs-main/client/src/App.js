import './App.css';
import  { Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './views/LandingPage/landingPage';
import Home from './views/Home/Home';
import Create from './views/Create/create';
import Detail from './views/Detail/detail';
import NavBar from './components/NavBar/NavBar';
import Success from './views/Success/Success';
import Error from './components/Error/Error'

function App() {

  const location = useLocation();

  return (
    <div className="App">
        {location.pathname !== "/" && location.pathname !== "/home" ? <NavBar/> : null} 
        <Routes>
          <Route path='*' element={<Error/>}/>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/home/:id' element={<Detail/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/success' element={<Success/>} />
        </Routes>
    </div>
  );
}


export default App;
